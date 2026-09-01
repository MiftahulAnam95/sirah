# Sirah Nabawiyah — Arsip Digital Interaktif

Situs statis murni: **HTML, CSS, dan JavaScript**. Tanpa framework, tanpa build wajib.

Sumber utama seluruh narasi sejarah:

**Ar-Rahiq Al-Makhtum / Sirah Nabawiyah**
Syaikh Shafiyyurrahman Al-Mubarakfuri
Edisi Indonesia: Pustaka Al-Kautsar, penerjemah Kathur Suhardi
Rujukan digital: <https://archive.org/details/sirahnabawiyah_201911>

---

## Berkas yang perlu diunggah

Hanya lima berkas ini:

```
index.html     → struktur halaman
styles.css     → seluruh tampilan
app.js         → logika, routing, peta, audio
data.js        → seluruh naskah 11 bab
404.html       → pengalihan alamat lama
.nojekyll      → wajib untuk GitHub Pages
```

Tidak ada folder `assets`. Tidak ada dependensi. Tidak ada langkah kompilasi.

---

## Cara deploy ke GitHub Pages

1. Buat repositori baru di GitHub.
2. Unggah keenam berkas di atas ke **root** repositori, branch `main`.
3. Buka **Settings → Pages**.
4. Bagian **Build and deployment → Source**, pilih **Deploy from a branch**.
5. Branch: `main`, folder: **/ (root)**. Simpan.

Tunggu satu hingga dua menit. Situs terbit di:

```
https://<username>.github.io/<nama-repo>/
```

Kali ini memilih **root** memang benar, karena berkasnya sudah berupa HTML/CSS/JS siap saji.

---

## Menjalankan di komputer sendiri

Berkas memakai ES module, jadi perlu dibuka lewat server kecil, bukan klik dua kali.

```bash
python3 -m http.server 8000
```

Lalu buka <http://localhost:8000>.

Alternatif:

```bash
npx serve .
```

---

## Routing

Alamat bab memakai hash agar tidak pernah 404 saat di-refresh:

```
https://<username>.github.io/<nama-repo>/#/chapter-07
```

Daftar rute:

| Rute | Bab |
| --- | --- |
| `#/` | Arsip utama |
| `#/chapter-01` | Sebelum Kenabian |
| `#/chapter-02` | Kelahiran dan Masa Muda |
| `#/chapter-03` | Awal Kenabian |
| `#/chapter-04` | Dakwah di Makkah |
| `#/chapter-05` | Tahun-tahun Ujian |
| `#/chapter-06` | Isra' Mi'raj |
| `#/chapter-07` | Hijrah |
| `#/chapter-08` | Madinah |
| `#/chapter-09` | Perjuangan dan Perjanjian |
| `#/chapter-10` | Fathu Makkah |
| `#/chapter-11` | Haji Wada' dan Wafat |

---

## Menyunting naskah

Semua teks ada di `data.js`. Tidak perlu menyentuh `app.js`.

```js
{
  title: "Gua Hira",
  slug: "gua-hira",
  location: "Jabal Nur, Makkah",
  period: "Menjelang usia empat puluh tahun",
  summary: "Paragraf pertama.\n\nParagraf kedua.",
  context: "Paragraf pertama.\n\nParagraf kedua.",
  source: src("Di Gua Hira", "Tahannuts menjelang wahyu")
}
```

Pisahkan paragraf dengan `\n\n`. Situs akan merendernya sebagai paragraf terpisah.

Fungsi `src(bab, subbab)` otomatis mengisi nama kitab, penulis, edisi, dan penerbit.

---

## Prinsip arsip

- Bahasa utama Indonesia.
- Tidak ada visualisasi Nabi ﷺ, para nabi, malaikat, atau perkara gaib.
- Tidak ada dialog fiktif dan tidak ada kutipan tanpa sumber.
- Angka dan tanggal hanya ditampilkan jika disebut sumber.
- Nomor halaman tidak dicantumkan karena berbeda antar cetakan.
- Copy editorial dipisahkan secara eksplisit dari kutipan.

---

## Catatan teknis

**Gambar** diambil dari URL publik Pexels, jadi repositori tetap ringan. Kredit fotografer ditampilkan di tiap bab.

**Audio gurun** dibangkitkan langsung di peramban memakai Web Audio API: angin, desiran pasir, dan dengung rendah. Tidak ada berkas audio, tidak ada autoplay. Aktifkan lewat tombol **Suara gurun**.

**Aksesibilitas**: skip link, navigasi papan tik, `aria-pressed` pada tombol peta, fokus otomatis pada panel sumber, dan dukungan `prefers-reduced-motion`.
