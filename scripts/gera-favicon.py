"""Gera os icones de aba/atalho a partir do logo oficial (public/logo.png).

O logo completo tem dois aneis finos e o texto "CRN 3 73044", que viram
sujeira em 16-32 px. Aqui recortamos so o monograma F.Z, que continua
legivel em tamanho de favicon, e assentamos num quadrado branco de cantos
arredondados (o marrom do Z sumiria numa aba escura sem fundo).

Uso: python3 scripts/gera-favicon.py
"""
import struct, zlib

SRC = "public/logo.png"


def decodifica(caminho):
    d = open(caminho, "rb").read()
    i, idat = 8, b""
    while i < len(d):
        ln = struct.unpack(">I", d[i:i + 4])[0]
        t = d[i + 4:i + 8]
        if t == b"IHDR":
            w, h, dep, ct = struct.unpack(">IIBB", d[i + 8:i + 18])
        if t == b"IDAT":
            idat += d[i + 8:i + 8 + ln]
        i += 12 + ln
    assert dep == 8 and ct == 6, (dep, ct)
    raw = zlib.decompress(idat)
    prev, rows, pos = bytearray(w * 4), [], 0
    for _ in range(h):
        f = raw[pos]
        line = bytearray(raw[pos + 1:pos + 1 + w * 4])
        pos += 1 + w * 4
        if f == 1:
            for x in range(4, len(line)):
                line[x] = (line[x] + line[x - 4]) & 255
        elif f == 2:
            for x in range(len(line)):
                line[x] = (line[x] + prev[x]) & 255
        elif f == 3:
            for x in range(len(line)):
                a = line[x - 4] if x >= 4 else 0
                line[x] = (line[x] + ((a + prev[x]) >> 1)) & 255
        elif f == 4:
            for x in range(len(line)):
                a = line[x - 4] if x >= 4 else 0
                b = prev[x]
                c = prev[x - 4] if x >= 4 else 0
                p = a + b - c
                pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
                pr = a if (pa <= pb and pa <= pc) else (b if pb <= pc else c)
                line[x] = (line[x] + pr) & 255
        rows.append(bytes(line))
        prev = line
    return w, h, rows


def bbox_monograma(w, h, rows, dist=8):
    """Isola o monograma: so pixels de traco grosso entram.

    Os aneis tem ~4 px de espessura e o texto do CRN e fino, entao ambos
    falham no teste de vizinhanca a `dist` px. Nao da para usar contagem por
    linha/coluna: nas bordas o anel e tangente e enche a coluna inteira.
    """
    def tinta(x, y):
        o = x * 4
        r = rows[y]
        return min(r[o], r[o + 1], r[o + 2]) < 200

    por_col = [0] * w
    por_lin = [0] * h
    for y in range(dist, h - dist, 2):
        for x in range(dist, w - dist, 2):
            if (tinta(x, y) and tinta(x - dist, y) and tinta(x + dist, y)
                    and tinta(x, y - dist) and tinta(x, y + dist)):
                por_col[x] += 1
                por_lin[y] += 1
    # >= 5 acertos descarta pixel solitario (o anel, onde tangencia, cola um ou
    # outro) e mantem so linha/coluna que cruza traco de verdade
    xs = [x for x in range(w) if por_col[x] >= 5]
    ys = [y for y in range(h) if por_lin[y] >= 5]
    return min(xs), min(ys), max(xs), max(ys)


def amostra(rows, x0, y0, lado, destino, limite):
    """Reduz o recorte quadrado (x0,y0,lado) para destino x destino, media de caixa.

    `limite` = (lx0, ly0, lx1, ly1) do monograma: fora dele devolvemos branco,
    senao a folga do quadrado traria de volta o anel e o texto do CRN.
    """
    lx0, ly0, lx1, ly1 = limite
    escala = lado / destino
    saida = []
    for oy in range(destino):
        linha = []
        sy0, sy1 = int(y0 + oy * escala), int(y0 + (oy + 1) * escala)
        for ox in range(destino):
            sx0, sx1 = int(x0 + ox * escala), int(x0 + (ox + 1) * escala)
            sr = sg = sb = n = 0
            for sy in range(sy0, max(sy1, sy0 + 1)):
                dentro_y = ly0 <= sy <= ly1
                r = rows[sy] if dentro_y else None
                for sx in range(sx0, max(sx1, sx0 + 1)):
                    if r is not None and lx0 <= sx <= lx1:
                        o = sx * 4
                        sr += r[o]; sg += r[o + 1]; sb += r[o + 2]
                    else:
                        sr += 255; sg += 255; sb += 255
                    n += 1
            linha.append((sr // n, sg // n, sb // n))
        saida.append(linha)
    return saida


def cobertura(px, py, lado, raio, ss=4):
    """Fracao do pixel dentro do quadrado de cantos arredondados (antialias)."""
    dentro = 0
    for j in range(ss):
        for i in range(ss):
            x, y = px + (i + 0.5) / ss, py + (j + 0.5) / ss
            cx = min(max(x, raio), lado - raio)
            cy = min(max(y, raio), lado - raio)
            if (x - cx) ** 2 + (y - cy) ** 2 <= raio * raio:
                dentro += 1
    return dentro / (ss * ss)


def png(tamanho, pixels):
    raio = tamanho * 0.18
    dados = bytearray()
    for y in range(tamanho):
        dados.append(0)
        for x in range(tamanho):
            r, g, b = pixels[y][x]
            a = cobertura(x, y, tamanho, raio)
            # a arte ja vem sobre branco; so o recorte do cantinho fica translucido
            dados += bytes((r, g, b, int(round(a * 255))))

    def chunk(tipo, d):
        return struct.pack(">I", len(d)) + tipo + d + struct.pack(">I", zlib.crc32(tipo + d) & 0xFFFFFFFF)

    return (b"\x89PNG\r\n\x1a\n"
            + chunk(b"IHDR", struct.pack(">IIBBBBB", tamanho, tamanho, 8, 6, 0, 0, 0))
            + chunk(b"IDAT", zlib.compress(bytes(dados), 9))
            + chunk(b"IEND", b""))


w, h, rows = decodifica(SRC)
x0, y0, x1, y1 = bbox_monograma(w, h, rows)
print(f"monograma: x {x0}..{x1} ({x1-x0}px), y {y0}..{y1} ({y1-y0}px)")

# quadrado centrado no monograma, com folga para respirar
lado = int(max(x1 - x0, y1 - y0) * 1.46)
cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
qx, qy = int(cx - lado / 2), int(cy - lado / 2)
print(f"recorte: {lado}x{lado} em ({qx},{qy})")

for nome, tam in [("icon-32.png", 32), ("icon-192.png", 192),
                  ("icon-512.png", 512), ("apple-touch-icon.png", 180)]:
    open("public/" + nome, "wb").write(png(tam, amostra(rows, qx, qy, lado, tam, (x0, y0, x1, y1))))
    print(f"  public/{nome} ({tam}x{tam})")

# favicon.ico com 16/32/48 embutidos como PNG (suportado por todos os navegadores atuais)
imgs = [(t, png(t, amostra(rows, qx, qy, lado, t, (x0, y0, x1, y1)))) for t in (16, 32, 48)]
ico = struct.pack("<HHH", 0, 1, len(imgs))
offset = 6 + 16 * len(imgs)
for t, blob in imgs:
    ico += struct.pack("<BBBBHHII", t, t, 0, 0, 1, 32, len(blob), offset)
    offset += len(blob)
for _, blob in imgs:
    ico += blob
open("public/favicon.ico", "wb").write(ico)
print(f"  public/favicon.ico ({len(ico)/1024:.1f} KB)")
