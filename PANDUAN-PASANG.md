# Panduan Pasang Tema Nuntera ke Blogger

> Pembaruan 23 Nov 2026: tema diubah ke layouts v3 (`b:layoutsVersion='3'`).
> Jika Anda sudah memasang versi sebelumnya yang tampil kosong, pasang ulang
> berkas `nuntera-blogger.xml` yang baru lewat Tema → Pulihkan.

## Berkas
- `nuntera-blogger.xml` — tema Blogger siap pasang.
- `logo-nuntera.png` — logo yang perlu diunggah dulu untuk mendapat URL Blogger.

## Langkah pasang

### 1. Dapatkan URL logo
1. Buka Blogger → buat postingan draf baru (atau lewat menu **Tata Letak**).
2. Sisipkan gambar `logo-nuntera.png`, publikasikan draf (bisa langsung hapus postingannya setelahnya).
3. Klik kanan gambar yang tampil → **Salin alamat gambar**. URL-nya berformat
   `https://blogger.googleusercontent.com/img/.../logo-nuntera.png`.

### 2. Ganti placeholder di XML
Buka `nuntera-blogger.xml` dengan editor teks, cari `REPLACE-LOGO-URL` (ada 2 tempat:
favicon di `<head>` dan logo di navbar). Ganti seluruh URL placeholder dengan URL logo dari langkah 1.

### 3. Unggah tema
1. Blogger → **Tema** → tombol **⋮** di kartu tema aktif → **Pulihkan** (Restore).
2. Pilih berkas `nuntera-blogger.xml` → **Unggah**.
3. Buka blog, periksa beranda dan satu halaman postingan.

### 4. Buat halaman statis (pages)
Buat di Blogger → **Halaman** → **Halaman baru**, judul sesuai daftar, lalu tempel isi dari file HTML yang sudah dibuat (mode tampilan HTML):

| Judul halaman | URL yang terbentuk | Isi dari berkas |
|---|---|---|
| Tentang Kami | `/p/tentang-kami.html` | `tentang.html` (bagian tengah saja) |
| Tanya Jawab | `/p/faq.html` | `faq.html` |
| Kontak | `/p/kontak.html` | `kontak.html` |
| Kebijakan Privasi | `/p/privasi.html` | `privasi.html` |

Catatan URL: tema menghubungkan menu ke `p/tentang.html`, `p/faq.html`, `p/kontak.html`,
`p/privasi.html`. Blogger membentuk URL dari judul halaman, jadi agar cocok gunakan
judul satu kata (`Tentang`, `FAQ`, `Kontak`, `Privasi`) atau perbarui tautan di XML
setelah tahu URL finalnya (cara kedua lebih aman).

### 5. Halaman 404
Blogger → **Setelan** → **Kesalahan dan pengalihan** → **Kustom halaman 404**.
Tempel hanya bagian dalam `<main>…</main>` dari `404.html` (tanpa header/footer,
karena tema sudah menyediakannya).

## Peta halaman tema

| Kondisi | Yang tampil |
|---|---|
| Beranda / arsip / label | Hero + strip layanan + kisi katalog postingan + proses + paket + kontak ringkas |
| Halaman postingan (`item`) | Layout artikel: breadcrumb, judul, isi, tombol share, kartu pesan WhatsApp |
| Halaman statis (`static_page`) | Konten polos lebar untuk halaman Tentang/FAQ/Kontak/Privasi |

## Yang perlu disesuaikan setelah pasang
- **Logo**: dua placeholder `REPLACE-LOGO-URL` (langkah 2).
- **Tautan menu**: sesuaikan dengan URL halaman statis final (langkah 4).
- **Paket & harga**: tulis di HTML XML bagian `<!-- PAKET -->` bila harga berubah.
- **Harga buku**: harga dan ISBN per buku ditulis di isi postingan (data buku ada di
  kartu samping halaman artikel versi statis; di tema Blogger kartu pesan otomatis
  memakai judul postingan).

## Batasan yang diketahui
- Harga per buku tidak otomatis di kartu samping versi Blogger (data harga tidak ada
  di metadata Blogger). Solusi: tulis harga di awal isi postingan, atau nanti pakai
  konvensi label seperti `harga-30000` bila ingin otomatis.
- Filter kategori katalog versi HTML statis tidak dibawa ke tema (Blogger sudah punya
  halaman label `/search/label/...` yang berfungsi sebagai filter).
- Peta di halaman kontak versi statis memakai embed nama tempat; ganti `src` iframe
  dengan kode embed resmi dari Google Maps bila ingin pin presisi.
