## .1 Proses Integrasi
Program Sistem Pengelolaan Parkir Kampus dikembangkan melalui penggabungan Modul A dan Modul B. Modul A bertanggung jawab untuk menerima data kendaraan, memvalidasi input, menghitung biaya parkir, menentukan denda jika tiket hilang, serta menampilkan total pembayaran. Sementara itu, Modul B bertanggung jawab untuk mengolah data transaksi dan menghasilkan rekapitulasi jumlah kendaraan serta total pendapatan parkir.

Proses integrasi dilakukan dengan memastikan kedua modul menggunakan data dan variabel yang sesuai. Hasil perhitungan dari Modul A diteruskan ke Modul B agar setiap transaksi dapat dicatat dan dijumlahkan. Setelah seluruh kendaraan selesai diproses, program menampilkan rekapitulasi akhir.

## 2. Pseudocode Final
{ Variabel Modul A }
nomorKendaraan    : string
jenisKendaraan    : char
lamaParkir        : double
tiketHilang       : char
durasiParkir      : integer
biayaParkir       : integer
denda             : integer
totalBayar        : integer

{ Variabel Modul B }
jumlahMotor       : integer
jumlahMobil       : integer
jumlahTiketHilang : integer
pendapatanMotor   : integer
pendapatanMobil   : integer
totalDenda        : integer
totalPendapatan   : integer
biayaTertinggi    : integer
pilihan           : char

MULAI

    { Inisialisasi Modul B }
    jumlahMotor <- 0
    jumlahMobil <- 0
    jumlahTiketHilang <- 0
    pendapatanMotor <- 0
    pendapatanMobil <- 0
    totalDenda <- 0
    totalPendapatan <- 0
    biayaTertinggi <- 0
    pilihan <- 'Y'

    WHILE pilihan = 'Y' DO

        { MODUL A: INPUT DATA KENDARAAN }
        output("=== PROGRAM PARKIR ===")

        output("Masukkan nomor kendaraan")
        input(nomorKendaraan)

        REPEAT
            output("Masukkan jenis kendaraan (M/C)")
            input(jenisKendaraan)

            IF (jenisKendaraan <> 'M' AND
                jenisKendaraan <> 'C') THEN
                output("Jenis kendaraan tidak valid")
            ENDIF
        UNTIL (jenisKendaraan = 'M' OR
               jenisKendaraan = 'C')

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

            IF (tiketHilang <> 'Y' AND
                tiketHilang <> 'N') THEN
                output("Input tidak valid, masukkan Y atau N")
            ENDIF
        UNTIL (tiketHilang = 'Y' OR
               tiketHilang = 'N')

        { Menghitung durasi parkir }
        durasiParkir <- ceil(lamaParkir)

        { Menghitung biaya parkir }
        IF (jenisKendaraan = 'M') THEN

            IF (durasiParkir <= 1) THEN
                biayaParkir <- 2000
            ELSE IF (durasiParkir <= 5) THEN
                biayaParkir <- 2000 +
                               (durasiParkir - 1) * 1000
            ELSE
                biayaParkir <- 2000 + (4 * 1000) +
                               (durasiParkir - 5) * 500
            ENDIF

        ELSE

            IF (durasiParkir <= 1) THEN
                biayaParkir <- 5000
            ELSE IF (durasiParkir <= 5) THEN
                biayaParkir <- 5000 +
                               (durasiParkir - 1) * 2000
            ELSE
                biayaParkir <- 5000 + (4 * 2000) +
                               (durasiParkir - 5) * 1000
            ENDIF

        ENDIF

        { Menghitung denda tiket hilang }
        denda <- 0

        IF (tiketHilang = 'Y') THEN
            IF (jenisKendaraan = 'M') THEN
                denda <- 20000
            ELSE
                denda <- 50000
            ENDIF
        ENDIF

        { Menghitung total pembayaran }
        totalBayar <- biayaParkir + denda

        { Menampilkan hasil Modul A }
        output("Nomor Kendaraan :", nomorKendaraan)
        output("Jenis Kendaraan :", jenisKendaraan)
        output("Durasi Parkir   :", durasiParkir, "jam")
        output("Biaya Parkir    :", biayaParkir)
        output("Denda           :", denda)
        output("Total Bayar     :", totalBayar)

        { MODUL B: MEMPERBARUI REKAPITULASI }

        IF (jenisKendaraan = 'M') THEN
            jumlahMotor <- jumlahMotor + 1
            pendapatanMotor <- pendapatanMotor + biayaParkir
        ELSE
            jumlahMobil <- jumlahMobil + 1
            pendapatanMobil <- pendapatanMobil + biayaParkir
        ENDIF

        IF (tiketHilang = 'Y') THEN
            jumlahTiketHilang <- jumlahTiketHilang + 1
            totalDenda <- totalDenda + denda
        ENDIF

        IF (totalBayar > biayaTertinggi) THEN
            biayaTertinggi <- totalBayar
        ENDIF

        { Menanyakan transaksi berikutnya }
        REPEAT
            output("Tambah transaksi? (Y/N)")
            input(pilihan)

            IF (pilihan <> 'Y' AND pilihan <> 'N') THEN
                output("Input tidak valid, masukkan Y atau N")
            ENDIF
        UNTIL (pilihan = 'Y' OR pilihan = 'N')

    ENDWHILE

    { Menghitung total pendapatan }
    totalPendapatan <- pendapatanMotor +
                       pendapatanMobil + totalDenda

    { Menampilkan rekapitulasi Modul B }
    output("=== REKAPITULASI PARKIR ===")
    output("Jumlah Motor       :", jumlahMotor)
    output("Jumlah Mobil       :", jumlahMobil)
    output("Jumlah Tiket Hilang:", jumlahTiketHilang)
    output("Pendapatan Motor   :", pendapatanMotor)
    output("Pendapatan Mobil   :", pendapatanMobil)
    output("Total Denda        :", totalDenda)
    output("Total Pendapatan   :", totalPendapatan)
    output("Transaksi Tertinggi:", biayaTertinggi)

SELESAI

## 3. Flowchart Final
![Flowchart Final](..\flowchart_besar_program_parkir.png)

## 4. Source Code dan Penjelasan
1. Source code : main.cpp
2. Penjelasan :
Merupakan hasil penggabungan Modul A dan Modul B ke dalam satu program menggunakan bahasa pemrograman C++. Program ini mencakup proses input dan validasi data kendaraan, perhitungan durasi serta biaya parkir berdasarkan jenis kendaraan, penentuan denda apabila tiket hilang, dan penampilan rincian pembayaran.

Selain itu, program dilengkapi dengan fitur perulangan untuk memproses beberapa transaksi kendaraan serta rekapitulasi jumlah motor, jumlah mobil, jumlah tiket hilang, pendapatan parkir, total denda, total pendapatan, dan pembayaran tertinggi.

## 5. Hasil Eksekusi

## 6.  Tabel Pengujian
### A. Pengujian Modul A

| No. | Skenario Pengujian | Input | Hasil yang Diharapkan | Hasil Aktual | Status |
|---|---|---|---|---|---|
| 1 | Motor parkir 3 jam tanpa kehilangan tiket | Jenis: M, durasi: 3 jam, tiket: N | Biaya parkir Rp4.000, denda Rp0, total Rp4.000 | Biaya Rp4.000, denda Rp0, total Rp4.000 | Berhasil |
| 2 | Motor parkir 4,6 jam tanpa kehilangan tiket | Jenis: M, durasi: 4,6 jam, tiket: N | Durasi dibulatkan menjadi 5 jam dan biaya Rp6.000 | Durasi 5 jam, biaya Rp6.000, total Rp6.000 | Berhasil |

### B. Pengujian Modul B

| No. | Skenario Pengujian | Hasil yang Diharapkan | Hasil Aktual | Status |
|---|---|---|---|---|
| 1 | Dua transaksi motor dan satu transaksi mobil | Jumlah motor 2 dan jumlah mobil 1 | Jumlah motor 2 dan jumlah mobil 1 | Berhasil |
| 2 | Dua kendaraan kehilangan tiket | Jumlah tiket hilang 2 dan total denda Rp70.000 | Jumlah tiket hilang 2 dan total denda Rp70.000 | Berhasil |
| 3 | Menghitung total pendapatan | Pendapatan motor Rp10.000, pendapatan mobil Rp60.000, total pendapatan Rp140.000 jika pendapatan motor dan mobil memasukkan denda sesuai hasil aktual | Pendapatan motor Rp30.000, pendapatan mobil Rp110.000, total pendapatan Rp140.000 | Perlu diperiksa |


### C. Pengujian Program Terintegrasi (`main.cpp`)

| No. | Skenario Pengujian | Hasil yang Diharapkan | Hasil Aktual | Status |
|---|---|---|---|---|
| 1 | Motor parkir 4,6 jam tanpa kehilangan tiket | Durasi 5 jam, biaya Rp6.000, denda Rp0, total Rp6.000 | Durasi 5 jam, biaya Rp6.000, denda Rp0, total Rp6.000 | Berhasil |
| 2 | Mobil parkir 2 jam dengan tiket hilang | Biaya Rp7.000, denda Rp50.000, total Rp57.000 | Biaya Rp7.000, denda Rp50.000, total Rp57.000 | Berhasil |
| 3 | Menghitung jumlah kendaraan | 1 motor dan 1 mobil | 1 motor dan 1 mobil | Berhasil |
| 4 | Menghitung jumlah tiket hilang | 1 tiket hilang | 1 tiket hilang | Berhasil |
| 5 | Menghitung total pendapatan | Rp63.000 | Rp63.000 | Berhasil |
| 6 | Menentukan pembayaran tertinggi | Rp57.000 | Rp57.000 | Berhasil |

## 7. Trace Table

### A. Trace Table Transaksi Pertama
Input: Nomor kendaraan `N112MM`, jenis MOTOR, lama parkir 4,6 jam, dan tiket tidak hilang.

| Langkah | `lamaParkir` | `durasiParkir` | `biayaParkir` | `denda` | `totalBayar` |
|---|---:|---:|---:|---:|---:|
| Input kendaraan | 4,6 | - | - | - | - |
| Pembulatan durasi | 4,6 | 5 | - | - | - |
| Menghitung biaya parkir | 4,6 | 5 | 6.000 | - | - |
| Memeriksa status tiket | 4,6 | 5 | 6.000 | 0 | - |
| Menghitung total pembayaran | 4,6 | 5 | 6.000 | 0 | 6.000 |

### B. Trace Table Transaksi Kedua
Input: Nomor kendaraan `M334JK`, jenis MOBIL, lama parkir 2 jam, dan tiket hilang.

| Langkah | `lamaParkir` | `durasiParkir` | `biayaParkir` | `denda` | `totalBayar` |
|---|---:|---:|---:|---:|---:|
| Input kendaraan | 2 | - | - | - | - |
| Pembulatan durasi | 2 | 2 | - | - | - |
| Menghitung biaya parkir | 2 | 2 | 7.000 | - | - |
| Memeriksa status tiket | 2 | 2 | 7.000 | 50.000 | - |
| Menghitung total pembayaran | 2 | 2 | 7.000 | 50.000 | 57.000 |

### C. Trace Table Rekapitulasi
| Variabel | Nilai Awal | Setelah Transaksi 1 | Setelah Transaksi 2 |
|---|---:|---:|---:|
| `jumlahMotor` | 0 | 1 | 1 |
| `jumlahMobil` | 0 | 0 | 1 |
| `jumlahTiketHilang` | 0 | 0 | 1 |
| `pendapatanMotor` | 0 | 6.000 | 6.000 |
| `pendapatanMobil` | 0 | 0 | 7.000 |
| `totalDenda` | 0 | 0 | 50.000 |
| `totalPendapatan` | 0 | 6.000 | 63.000 |
| `biayaTertinggi` | 0 | 6.000 | 57.000 |

## 8. Daftar Kesalahan dan Perbaikan
| No. | Kesalahan yang Ditemukan | Penyebab | Perbaikan |
|---|---|---|---|
| 1 | Pendapatan motor dan mobil pada Modul B tidak sesuai dengan rincian biaya parkir. | Nilai pendapatan kemungkinan sudah mencakup denda, sedangkan denda juga dicatat secara terpisah. | Memisahkan pencatatan biaya parkir dan denda agar tidak terjadi penghitungan ganda. |
| 2 | Nilai pendapatan mobil pada hasil `main.cpp` ditampilkan sebesar Rp57.000, bukan Rp7.000. | Nilai yang ditampilkan kemungkinan merupakan total pembayaran mobil yang sudah termasuk denda. | Memastikan variabel `pendapatanMobil` hanya mencatat biaya parkir, sedangkan denda dicatat pada `totalDenda`. |
