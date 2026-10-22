# MODUL A - PROSES UTAMA

## 1. Penanggung Jawab
Nama : Geraldine Grace Natalie
NIM : 322610004

## 2. Tujuan Modul A
Modul A bertujuan untuk menerima data kendaraan, menentukan tarif berdasarkan jenis dan lama parkir, menghitung denda apabila tiket hilang, serta menampilkan total biaya yang harus dibayar oleh pengguna parkir.

## 3. Input Modul A
Modul A menerima empat data utama:
1. Nomor kendaraan
2. Jenis kendaraan
3. Lama parkir
4. Status kehilangan tiket

## 4. Proses Modul A
1. Menerima nomor kendaraan.
2. Menerima jenis kendaraan, sepeda motor(M) atau mobil(C).
3. Menerima lama parkir.
4. Menerima status kehilangan tiket, yes(Y) atau no(N).
5. Memvalidasi seluruh input yang dimasukkan.
6. Membulatkan lama parkir ke atas apabila terdapat angka pecahan, dengan durasi minimum satu jam.
7. Menentukan biaya parkir berdasarkan jenis kendaraan dan durasi parkir.
8. Mengecek status kehilangan tiket.
9. Menambahkan denda apabila tiket hilang.
10. Menghitung total pembayaran.
11. Menampilkan rincian hasil pembayaran.
12. Menyerahkan hasil perhitungan kepada Modul B untuk proses rekapitulasi.

## 5. Algoritma Deskriptif Modul A
1. Mulai.
2. Masukkan nomor kendaraan.
3. Masukkan jenis kendaraan.
4. Masukkan lama parkir.
5. Masukkan status kehilangan tiket.
6. Periksa apakah seluruh input valid.
7. Jika input tidak valid atau lama parkir kurang dari atau sama dengan 0, tampilkan pesan kesalahan dan minta pengguna memasukkan kembali data yang benar.
8. Bulatkan lama parkir ke atas menjadi durasi parkir dalam jam penuh, dengan durasi minimum satu jam.
9. Jika kendaraan merupakan sepeda motor, hitung biaya parkir berdasarkan tarif sepeda motor.
10. Jika kendaraan merupakan mobil, hitung biaya parkir berdasarkan tarif mobil.
11. Periksa status kehilangan tiket.
12. Jika tiket hilang, tambahkan denda sesuai jenis kendaraan, yaitu Rp20.000 untuk sepeda motor atau Rp50.000 untuk mobil.
13. Hitung total pembayaran dengan menjumlahkan biaya parkir dan denda.
14. Tampilkan nomor kendaraan, durasi parkir, biaya parkir, denda, dan total pembayaran.
15. Hasil perhitungan digunakan oleh Modul B untuk proses rekapitulasi.
16. Selesai.

## 6. Pseudocode Modul A
```text
{ Variabel }
nomorKendaraan : string
jenisKendaraan : char       { 'M' = Motor, 'C' = Mobil }
lamaParkir     : double
tiketHilang    : char       { 'Y' = Ya, 'N' = Tidak }
durasiParkir   : integer
biayaParkir    : integer
denda          : integer
totalBayar     : integer

MULAI

    output("=== PROGRAM PARKIR ===")

    output("Masukkan nomor kendaraan")
    input(nomorKendaraan)

    REPEAT
        output("Masukkan jenis kendaraan (M/C)")
        input(jenisKendaraan)

        IF (jenisKendaraan <> 'M' AND jenisKendaraan <> 'C') THEN
            output("Jenis kendaraan tidak valid")
        ENDIF
    UNTIL (jenisKendaraan = 'M' OR jenisKendaraan = 'C')

    REPEAT
        output("Masukkan lama parkir")
        input(lamaParkir)

        IF (lamaParkir <= 0) THEN
            output("Input tidak valid, masukkan lama parkir > 0")
        ENDIF
    UNTIL (lamaParkir > 0)

    REPEAT
        output("Apakah tiket hilang? (Y/N)")
        input(tiketHilang)

        IF (tiketHilang <> 'Y' AND tiketHilang <> 'N') THEN
            output("Input tidak valid, masukkan Y atau N")
        ENDIF
    UNTIL (tiketHilang = 'Y' OR tiketHilang = 'N')

    durasiParkir <- ceil(lamaParkir)

    IF (jenisKendaraan = 'M') THEN
        IF (durasiParkir <= 1) THEN
            biayaParkir <- 2000
        ELSE IF (durasiParkir <= 5) THEN
            biayaParkir <- 2000 + (durasiParkir - 1) * 1000
        ELSE
            biayaParkir <- 2000 + (4 * 1000) +
                           (durasiParkir - 5) * 500
        ENDIF
    ELSE
        IF (durasiParkir <= 1) THEN
            biayaParkir <- 5000
        ELSE IF (durasiParkir <= 5) THEN
            biayaParkir <- 5000 + (durasiParkir - 1) * 2000
        ELSE
            biayaParkir <- 5000 + (4 * 2000) +
                           (durasiParkir - 5) * 1000
        ENDIF
    ENDIF

    denda <- 0

    IF (tiketHilang = 'Y') THEN
        IF (jenisKendaraan = 'M') THEN
            denda <- 20000
        ELSE
            denda <- 50000
        ENDIF
    ENDIF

    totalBayar <- biayaParkir + denda

    output("Nomor Kendaraan :", nomorKendaraan)
    output("Durasi Parkir   :", durasiParkir, "jam")
    output("Biaya Parkir    :", biayaParkir)
    output("Denda           :", denda)
    output("Total Bayar     :", totalBayar)

    kirimKeModulB(nomorKendaraan, durasiParkir,
                  biayaParkir, denda, totalBayar)

SELESAI
```

## 7. Flowchart Modul A
![Flowchart Modul A](..\flowchart_hitung_biaya_parkir.png)

## 9. Source Code dan Penjelasan
1. Source code: modul-a.cpp
2. Penjelasan source code akan membahas: 
- Input data kendaraan
- Validasi input
- Pembulatan lama parkir
- Percabangan jenis kendaraan
- Perhitungan tarif parkir
- Perhitungan denda
- Perhitungan total pembayaran
- Output hasil
3. Hasil Eksekusi dan Pengujian
Contoh format:
- Input:
- Nomor kendaraan : N 1234 AB
- Jenis kendaraan : M
- Lama parkir     : 3 jam
- Tiket hilang    : T
- Output:
- Durasi parkir : 3 jam
- Biaya parkir  : Rp4000
- Denda         : Rp0
- Total bayar   : Rp4000