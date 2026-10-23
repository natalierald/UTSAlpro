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

