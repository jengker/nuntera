# Deploy nuntera.id via GitHub Pages + Cloudflare

Situs statis murni: tidak ada build step. Push dan langsung tayang.

## 1. Push ke GitHub

Repo: https://github.com/jengker/nuntera (sudah dibuat, kosong).

```bash
git init
git add -A
git commit -m "Situs Penerbit Nuntera: versi GitHub Pages"
git branch -M main
git remote add origin https://github.com/jengker/nuntera.git
git push -u origin main
```

## 2. Aktifkan GitHub Pages

1. Repo → **Settings** → **Pages**.
2. Source: **Deploy from a branch** · Branch: **main** · Folder: **/(root)** → Save.
3. Tunggu 1–2 menit; `CNAME` di root membuat Pages memakai domain kustom segera setelah DNS diset.
4. Cek deploy di tab **Actions** sampai hijau.

## 3. DNS di Cloudflare

Domain: `nuntera.id` (zone sudah di Cloudflare).

| Tipe | Nama | Isi | Proxy |
|---|---|---|---|
| A | `@` | `185.199.108.153` | Proxied |
| A | `@` | `185.199.109.153` | Proxied |
| A | `@` | `185.199.110.153` | Proxied |
| A | `@` | `185.199.111.153` | Proxied |
| CNAME | `www` | `jengker.github.io` | Proxied |

Hapus record A/CNAME lama yang mengarah ke Blogger (ghs.google.com) supaya tidak bentrok.

**SSL/TLS** → Overview → mode **Full (strict)**.
**Edge Certificates** → Always Use HTTPS: ON.

## 4. Verifikasi domain di Pages

Repo → Settings → Pages → Custom domain: isi `nuntera.id` → Add.
Tunggu check DNS hijau, lalu aktifkan **Enforce HTTPS**.

## 5. Cek akhir

- `https://nuntera.id` → beranda, CSS termuat (`assets/style.css`).
- `https://www.nuntera.id` → redirect ke apex.
- `https://nuntera.id/sitemap.xml` dan `/robots.txt` terbaca.
- Tombol WhatsApp di kontak & kartu paket membuka `wa.me`.
