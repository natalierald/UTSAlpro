# 🚀 AlproCase - Blog Studi Kasus Algoritma & Pemrograman C++

Blog repositori modern dan interaktif untuk mendokumentasikan serta mempraktikkan berbagai studi kasus **Algoritma dan Pemrograman (Alpro)** menggunakan bahasa **C++**. Dibangun khusus untuk kebutuhan presentasi, portfolio, dan dokumentasi tugas/proyek Ujian Tengah Semester (UTS).

---

## 🌟 Fitur Utama

1. **Koleksi Studi Kasus Komprehensif**:
   - **Dasar & Percabangan**: Sistem Kasir Toko & Diskon Bertingkat dengan Pajak PPN 11%.
   - **Perulangan Bersarang (*Nested Loop*)**: Pola Geometri Piramida Berlian Berongga (*Hollow Diamond*).
   - **Array 1D & Fungsi**: Analisis Statistik Nilai Ujian Mahasiswa (Mean, Maks/Min, Simpangan Baku).
   - **Array 2D & Matriks**: Perkalian dan Transposisi Matriks Dinamis ordo $R \times C$.
   - **Sorting & Analisis Kinerja**: Komparasi algoritma *Bubble Sort* vs *Quick Sort* dengan pencatatan jumlah perbandingan (*comparisons*) & pertukaran (*swaps*).
   - **Searching**: Pencarian Biner (*Binary Search*) dengan visualisasi pelacakan langkah (*trace* rentang low, mid, high).
   - **Fungsi & Rekursi**: Penyelesaian puzzle Menara Hanoi & Kalkulator Deret Fibonacci berbasis *Memoization*.
   - **Struct & Proyek Mini DBMS**: Sistem Manajemen Akademik Mahasiswa (CRUD, kalkulasi nilai akhir otomatis, konversi huruf A-E, dan ranking peringkat kelas).

2. **Terminal Simulator Interaktif**:
   - Dilengkapi *Live Runner* berbasis JavaScript yang mereplikasi eksekusi konsol C++ langsung di browser tanpa perlu install compiler untuk preview cepat!

3. **C++ Code Viewer & Syntax Highlighting**:
   - Menggunakan **PrismJS** dengan tema *Tomorrow Dark* dan *Line Numbers*.
   - Dilengkapi tombol **Salin Kode** (Copy to Clipboard) dan tombol **Unduh `.cpp`** langsung.

4. **Pencarian & Multi-Filter Realtime**:
   - Filter berdasarkan Kategori Materi (*Dasar, Perulangan, Array, Sorting, Rekursi, Struct*).
   - Filter berdasarkan Tingkat Kesulitan (*Mudah, Sedang, Mahir*).
   - Pencarian cerdas berdasarkan judul, tag, atau kata kunci logika.
   - Fitur **Favorit / Bookmark** yang tersimpan di memori browser (*localStorage*).

5. **CRUD Tambah Studi Kasus Baru**:
   - Pengguna dapat menambahkan studi kasus mandiri melalui modal form.
   - Data otomatis disimpan ke `localStorage`.
   - Fitur Ekspor Data ke file `.json`.

6. **Identitas & Profil Mahasiswa UTS**:
   - Komponen profil mahasiswa (Nama, NIM, Kelas, Dosen Pengampu) yang dapat disunting langsung dan tersimpan permanen.

7. **Desain Modern Developer**:
   - Bootstrap 5.3 + Custom CSS Glassmorphism.
   - Mode Gelap (*Dark Mode*) & Mode Terang (*Light Mode*) yang dapat diubah sesuai kenyamanan.
   - C++ Quick Cheatsheet untuk referensi sintaks cepat.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5** (Semantik, Accessible)
- **CSS3 / Bootstrap 5.3.3** (Responsive Grid, Utility Classes, Custom Variables)
- **Bootstrap Icons 1.11.3**
- **JavaScript (ES6+)** (DOM Manipulation, State Management, Terminal Simulation, LocalStorage)
- **PrismJS 1.29.0** (C++ Syntax Highlighting & Line Numbers)
- **SweetAlert2** (Modal notifikasi interaktif)

---

## 💻 Cara Menjalankan Proyek

### Menggunakan Laragon (Rekomendasi)
Karena proyek ini berada di folder `c:\laragon\www\UTSAlpro`:
1. Buka aplikasi **Laragon**.
2. Klik tombol **Start All** (Apache / Nginx).
3. Buka browser dan ketik alamat:
   - `http://utsalpro.test` atau
   - `http://localhost/UTSAlpro`

### Menjalankan Langsung (Direct Browser)
- Anda juga dapat langsung membuka file `index.html` dengan cara double-click atau menggunakan extension *Live Server* pada VS Code.

---

## ⚙️ Cara Kompilasi Source Code C++ di Komputer

Jika Anda mengunduh file `.cpp` dari blog ini, Anda dapat meng-compile menggunakan terminal GCC/MinGW:

```bash
# Kompilasi kode C++ standar
g++ -std=c++17 nama_file.cpp -o program.exe

# Jalankan program
./program.exe
```

Atau buka file `.cpp` pada IDE favorit Anda seperti **Code::Blocks**, **Dev-C++**, atau **Visual Studio Code** dengan ekstensi C/C++.
