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