# ANALISIS MASALAH

## 1. Latar Belakang
Parkir merupakan salah satu fasilitas yang digunakan oleh mahasiswa, dosen, dan staf di lingkungan kampus. Dalam pengelolaannya, petugas parkir perlu menghitung biaya parkir setiap kendaraan berdasarkan jenis dan lama parkir. Selain itu, petugas juga perlu mencatat kendaraan yang kehilangan tiket serta membuat rekapitulasi pendapatan parkir harian.

Oleh karena itu, dibuat sebuah program Sistem Pengelolaan Parkir Kampus yang dapat membantu petugas menghitung biaya parkir setiap kendaraan dan menghasilkan rekapitulasi pendapatan secara lebih teratur. Program ini juga dapat memproses data beberapa kendaraan secara berulang sampai petugas memilih untuk mengakhiri proses.

## 2. Rumusan Masalah
Berdasarkan permasalahan tersebut, rumusan masalah dalam proyek ini adalah:
- Bagaimana cara menghitung biaya parkir berdasarkan jenis dan lama parkir kendaraan?
- Bagaimana cara menghitung denda apabila kendaraan kehilangan tiket parkir?
- Bagaimana cara memproses data beberapa kendaraan secara berulang?
- Bagaimana cara membuat rekapitulasi jumlah kendaraan dan pendapatan parkir harian?
- Bagaimana cara menangani input yang tidak valid agar program tetap berjalan dengan baik?

## 3. Tujuan Program
Program ini bertujuan untuk:

- Menghitung biaya parkir berdasarkan jenis dan lama parkir kendaraan.
- Menghitung denda berdasarkan status kehilangan tiket.
- Menampilkan rincian biaya yang harus dibayar oleh setiap kendaraan.
- Memproses data kendaraan secara berulang.
- Menghasilkan rekapitulasi pendapatan parkir harian.

## 4. Pengguna Program
Pengguna program adalah petugas parkir kampus yang bertugas memasukkan data kendaraan dan melihat hasil perhitungan biaya serta rekapitulasi pendapatan parkir.

## 5. Ketentuan dan Batasan
Ketentuan yang digunakan dalam program berdasarkan studi kasus adalah sebagai berikut.

### 5.1 Tarif Sepeda Motor
- Jam pertama: Rp2.000.
- Jam ke-2 sampai jam ke-5: tambahan Rp1.000 per jam.
- Setelah 5 jam: tambahan Rp500 per jam.

### 5.2 Tarif Mobil
- Jam pertama: Rp5.000.
- Jam ke-2 sampai jam ke-5: tambahan Rp2.000 per jam.
- Setelah 5 jam: tambahan Rp1.000 per jam.

### 5.3 Ketentuan Lama Parkir
- Durasi parkir kurang dari 1 jam tetap dihitung sebagai 1 jam.
- Durasi parkir dalam pecahan jam dibulatkan ke atas.

### 5.4 Denda Tiket Hilang
- Sepeda motor: Rp20.000.
- Mobil: Rp50.000.

### 5.5 Ketentuan Proses Program
Program terus menerima data kendaraan sampai petugas memilih untuk mengakhiri proses. Setelah proses selesai, program menampilkan rekapitulasi parkir harian.

## 6. Input-Process-Output (IPO)

| Input | Proses | Output |
|---|---|---|
| `nomorKendaraan` | Menerima data kendaraan | `nomorKendaraan` |
| `jenisKendaraan` | Menentukan tarif berdasarkan jenis kendaraan (motor=M atau mobil=C) | `jenisKendaraan` |
| `lamaParkir` | Membulatkan durasi ke atas | `durasiParkir` |
| `statusKehilanganTiket` | Menghitung biaya parkir | `biayaParkir` |
| Pilihan lanjut/selesai | Menghitung denda jika tiket parkir hilang | `denda` |
|  | Menghitung total pembayaran | `totalPembayaran` |
|  | Menghitung rekapitulasi kendaraan | Jumlah motor dan mobil |
|  | Menghitung pendapatan | Pendapatan motor dan mobil |
|  | Membandingkan biaya untuk mencari biaya tertinggi | Biaya parkir tertinggi |
