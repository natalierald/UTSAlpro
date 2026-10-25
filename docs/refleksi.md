# REFLEKSI

## 1. Pembagian Pekerjaan

| No. | Nama Anggota Kelompok | Pekerjaan |
| :---: | :--- | :--- |
| **1.** | Geraldine Grace Natalie | Mengerjakan pembuatan Modul A (input data kendaraan, penentuan tarif, perhitungan denda, dan total pembayaran) |
| **2.** | Stephanie Halim Kurniawan | Mengerjakan pembuatan Modul B (rekapitulasi pendapatan harian yang mengolah hasil Modul A) |

---

## 2. Kontribusi Anggota 

| No. | Nama Anggota Kelompok | Kontribusi Anggota |
| :---: | :--- | :--- |
| **1.** | Geraldine Grace Natalie | Mengerjakan Modul A: menerima input data kendaraan, memvalidasi input, membulatkan lama parkir, menghitung biaya parkir dan denda tiket hilang, serta menampilkan total pembayaran. Menyusun dokumentasi Modul A (IPO, algoritma, pseudocode, flowchart, source code, dan pengujian). |
| **2.** | Stephanie Halim Kurniawan | Mengerjakan Modul B: mengolah hasil Modul A menjadi rekapitulasi harian (jumlah motor dan mobil, kendaraan kehilangan tiket, pendapatan per jenis, total denda, total pendapatan, dan biaya parkir tertinggi). Menyusun dokumentasi Modul B dan menguji hasil rekapitulasi. |

**Kerja Sama:**  
Kami berdiskusi untuk menyamakan nama variabel (`jenisKendaraan`, `tiketHilang`, `denda`, `totalBayar`) dan format input, sehingga hasil perhitungan Modul A bisa langsung diolah Modul B. Pembagian beban kerja seimbang, yaitu masing-masing satu modul.

---

## 3. Bagian Tersulit

| No. | Nama Anggota Kelompok | Bagian Tersulit |
| :---: | :--- | :--- |
| **1.** | Geraldine Grace Natalie | 1. Membuat code C++<br>2. Memastikan kode berjalan dan rapi |
| **2.** | Stephanie Halim Kurniawan | 1. Memasukkan gambar flowchart pada file `modul-b.md`<br>2. Memasukkan tabel pada GitHub online |

---

## 4. Kesalahan dan Perbaikan

| No. | Kesalahan | Perbaikan |
| :---: | :--- | :--- |
| **1.** | Gambar flowchart pada file `modul-b.md` tidak tampil (*broken link*) setelah di-push ke repositori GitHub. | Mengubah jalur relatif gambar menjadi `docs/images/flowchart-modul-b.png` dan memastikannya terunggah ke folder repositori yang sesuai. |
| **2.** | Terjadi *diverged branch* pada Git saat mencoba melakukan `git push` setelah ada perubahan dari remote repository. | Melakukan `git pull` untuk menggabungkan perubahan, menyelesaikan penanda konflik, lalu mengesahkan dengan `git commit` sebelum melakukan *push* ulang. |

---

## 5. Pengetahuan yang Diperoleh

Melalui proyek sistem parkir ini, saya memperoleh pemahaman yang lebih baik mengenai penerapan dasar pemrograman C++ untuk menyelesaikan permasalahan sederhana dalam kehidupan sehari-hari. Kami belajar bahwa sebuah program tidak hanya membutuhkan input dan proses perhitungan, tetapi juga perlu memiliki alur logika yang jelas agar menghasilkan output yang sesuai.

Kami juga memahami penggunaan variabel, percabangan, perulangan, dan operasi penjumlahan untuk mengolah data kendaraan serta membuat rekapitulasi pendapatan. Selain itu, pengerjaan Modul B membantu kami memahami pentingnya akumulasi data, seperti menghitung jumlah kendaraan, total denda, pendapatan berdasarkan jenis kendaraan, dan biaya parkir tertinggi.

Pengalaman ini juga mengajarkan saya pentingnya melakukan pengujian dan pemeriksaan ulang terhadap program. Dengan pengujian, kesalahan dalam logika maupun perhitungan dapat ditemukan dan diperbaiki sebelum program digunakan.

---

## 6. Rencana Pengembangan UAS

Untuk pengembangan pada UAS, kami berencana menyempurnakan sistem parkir agar memiliki alur yang lebih terintegrasi antara Modul A dan Modul B. Kami juga ingin meningkatkan validasi input sehingga program dapat menangani data yang tidak sesuai dengan ketentuan, misalnya jenis kendaraan yang tidak dikenal atau pilihan yang tidak valid.

Selain itu, kami berencana memperbaiki tampilan output agar informasi kendaraan dan rekapitulasi lebih mudah dibaca. Pengembangan lainnya adalah menambahkan penyimpanan data parkir sehingga informasi kendaraan tidak hanya ditampilkan selama program berjalan, tetapi juga dapat digunakan kembali untuk keperluan pemeriksaan atau laporan. Dengan pengembangan tersebut, diharapkan sistem parkir menjadi lebih terstruktur, akurat, dan mudah digunakan.