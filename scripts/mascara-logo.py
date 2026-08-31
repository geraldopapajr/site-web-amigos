"""Recorta o logo no desenho e aplica máscara circular com borda suave."""
import struct, zlib, math

src = "public/logo.png"
dst = "public/logo-marca.png"

d = open(src, "rb").read()
i = 8; idat = b""
while i < len(d):
    ln = struct.unpack(">I", d[i:i+4])[0]; t = d[i+4:i+8]
    if t == b"IHDR": w, h, dep, ct = struct.unpack(">IIBB", d[i+8:i+18])
    if t == b"IDAT": idat += d[i+8:i+8+ln]
    i += 12 + ln
raw = zlib.decompress(idat)

prev = bytearray(w*4); rows = []; pos = 0
for y in range(h):
    f = raw[pos]; line = bytearray(raw[pos+1:pos+1+w*4]); pos += 1 + w*4
    if f == 1:
        for x in range(4, len(line)): line[x] = (line[x] + line[x-4]) & 255
    elif f == 2:
        for x in range(len(line)): line[x] = (line[x] + prev[x]) & 255
    elif f == 3:
        for x in range(len(line)):
            a = line[x-4] if x >= 4 else 0
            line[x] = (line[x] + ((a + prev[x]) >> 1)) & 255
    elif f == 4:
        for x in range(len(line)):
            a = line[x-4] if x >= 4 else 0
            b = prev[x]; c = prev[x-4] if x >= 4 else 0
            p = a + b - c; pa, pb, pc = abs(p-a), abs(p-b), abs(p-c)
            pr = a if (pa <= pb and pa <= pc) else (b if pb <= pc else c)
            line[x] = (line[x] + pr) & 255
    rows.append(bytes(line)); prev = line

# bounding box do desenho (medido antes): x 256..1876, y 224..1844
cx, cy = (256 + 1876) / 2, (224 + 1844) / 2
r = (1876 - 256) / 2 + 6          # raio com folga para não cortar o anel
out = 1700                         # canvas de saída, com margem transparente
oc = out / 2
saida = bytearray()
for oy in range(out):
    saida.append(0)  # filtro 0
    sy = int(cy - oc + oy)
    for ox in range(out):
        sx = int(cx - oc + ox)
        dist = math.hypot(ox - oc, oy - oc)
        if dist > r + 1.5 or not (0 <= sx < w and 0 <= sy < h):
            saida += b"\x00\x00\x00\x00"
            continue
        px = rows[sy][sx*4:sx*4+3]
        if dist < r - 1.5:
            alpha = 255
        else:
            alpha = int(255 * max(0.0, min(1.0, (r + 1.5 - dist) / 3.0)))
        saida += bytes(px) + bytes([alpha])

def chunk(tipo, dados):
    return struct.pack(">I", len(dados)) + tipo + dados + struct.pack(">I", zlib.crc32(tipo + dados) & 0xFFFFFFFF)

png = b"\x89PNG\r\n\x1a\n"
png += chunk(b"IHDR", struct.pack(">IIBBBBB", out, out, 8, 6, 0, 0, 0))
png += chunk(b"IDAT", zlib.compress(bytes(saida), 9))
png += chunk(b"IEND", b"")
open(dst, "wb").write(png)
print(f"gerado {dst}: {out}x{out}, {len(png)/1024:.0f} KB")
