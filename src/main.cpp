
#include <iostream>
#include <string>
#include <cmath>
#include <cctype>
using namespace std;

int main() {
    // Variabel Modul A
    string nomorKendaraan;
    char jenisKendaraan;
    double lamaParkir;
    char tiketHilang;
    int durasiParkir;
    int biayaParkir;
    int denda;
    int totalBayar;

    // Variabel Modul B
    int jumlahMotor = 0;
    int jumlahMobil = 0;
    int jumlahTiketHilang = 0;
    int jumlahSeluruhKendaraan = 0;

    int pendapatanMotor = 0;
    int pendapatanMobil = 0;
    int totalDenda = 0;
    int totalPendapatan = 0;
    int biayaTertinggi = 0;

    char pilihan = 'Y';

    cout << "=== PROGRAM PENGELOLAAN PARKIR KAMPUS ===\n";

    while (pilihan == 'Y') {
        // MODUL A: INPUT DATA KENDARAAN
        cout << "\nMasukkan nomor kendaraan: ";
        cin >> nomorKendaraan;

        // Validasi jenis kendaraan
        do {
            cout << "Jenis kendaraan (M = Motor, C = Mobil): ";
            cin >> jenisKendaraan;
            jenisKendaraan = toupper(jenisKendaraan);

            if (jenisKendaraan != 'M' &&
                jenisKendaraan != 'C') {
                cout << "Jenis kendaraan tidak valid!\n";
            }
        } while (jenisKendaraan != 'M' &&
                 jenisKendaraan != 'C');

        // Validasi lama parkir
        do {
            cout << "Masukkan lama parkir (jam): ";
            cin >> lamaParkir;

            if (cin.fail()) {
                cin.clear();
                cin.ignore(10000, '\n');
                lamaParkir = 0;
            }

            if (lamaParkir <= 0) {
                cout << "Input tidak valid. "
                     << "Lama parkir harus lebih dari 0.\n";
            }
        } while (lamaParkir <= 0);

        // Validasi status tiket
        do {
            cout << "Apakah tiket hilang? (Y = Ya, N = Tidak): ";
            cin >> tiketHilang;
            tiketHilang = toupper(tiketHilang);

            if (tiketHilang != 'Y' &&
                tiketHilang != 'N') {
                cout << "Input tidak valid!\n";
            }
        } while (tiketHilang != 'Y' &&
                 tiketHilang != 'N');

        // Menghitung durasi parkir
        durasiParkir = static_cast<int>(ceil(lamaParkir));

        // Menghitung biaya parkir berdasarkan jenis kendaraan
        if (jenisKendaraan == 'M') {
            if (durasiParkir <= 1) {
                biayaParkir = 2000;
            } else if (durasiParkir <= 5) {
                biayaParkir = 2000
                            + (durasiParkir - 1) * 1000;
            } else {
                biayaParkir = 2000 + (4 * 1000)
                            + (durasiParkir - 5) * 500;
            }
        } else {
            if (durasiParkir <= 1) {
                biayaParkir = 5000;
            } else if (durasiParkir <= 5) {
                biayaParkir = 5000
                            + (durasiParkir - 1) * 2000;
            } else {
                biayaParkir = 5000 + (4 * 2000)
                            + (durasiParkir - 5) * 1000;
            }
        }

        // Menghitung denda
        denda = 0;

        if (tiketHilang == 'Y') {
            if (jenisKendaraan == 'M') {
                denda = 20000;
            } else {
                denda = 50000;
            }
        }

        // Menghitung total pembayaran
        totalBayar = biayaParkir + denda;

        // Menampilkan rincian pembayaran
        cout << "\n=== RINCIAN PEMBAYARAN ===\n";
        cout << "Nomor kendaraan : " << nomorKendaraan << endl;

        cout << "Jenis kendaraan : ";
        if (jenisKendaraan == 'M') {
            cout << "Motor\n";
        } else {
            cout << "Mobil\n";
        }

        cout << "Lama parkir     : " << lamaParkir << " jam\n";
        cout << "Durasi dihitung : " << durasiParkir << " jam\n";
        cout << "Biaya parkir    : Rp" << biayaParkir << endl;
        cout << "Denda           : Rp" << denda << endl;
        cout << "Total pembayaran: Rp" << totalBayar << endl;

        // MODUL B: MEMPERBARUI REKAPITULASI
        jumlahSeluruhKendaraan++;

        if (jenisKendaraan == 'M') {
            jumlahMotor++;
            pendapatanMotor += biayaParkir;
        } else {
            jumlahMobil++;
            pendapatanMobil += biayaParkir;
        }

        if (tiketHilang == 'Y') {
            jumlahTiketHilang++;
            totalDenda += denda;
        }

        if (totalBayar > biayaTertinggi) {
            biayaTertinggi = totalBayar;
        }

        // Menanyakan transaksi berikutnya
        do {
            cout << "\nTambah kendaraan lagi? (Y = Ya, N = Tidak): ";
            cin >> pilihan;
            pilihan = toupper(pilihan);

            if (pilihan != 'Y' && pilihan != 'N') {
                cout << "Input tidak valid!\n";
            }
        } while (pilihan != 'Y' && pilihan != 'N');
    }

    // Menghitung total pendapatan
    totalPendapatan = pendapatanMotor
                    + pendapatanMobil
                    + totalDenda;

    // Menampilkan rekapitulasi akhir
    cout << "\n=== REKAPITULASI PARKIR KAMPUS ===\n";
    cout << "Jumlah motor           : " << jumlahMotor << endl;
    cout << "Jumlah mobil           : " << jumlahMobil << endl;
    cout << "Jumlah seluruh kendaraan: "
         << jumlahSeluruhKendaraan << endl;
    cout << "Jumlah tiket hilang    : "
         << jumlahTiketHilang << endl;
    cout << "Pendapatan motor       : Rp"
         << pendapatanMotor << endl;
    cout << "Pendapatan mobil       : Rp"
         << pendapatanMobil << endl;
    cout << "Total denda            : Rp"
         << totalDenda << endl;
    cout << "Total pendapatan       : Rp"
         << totalPendapatan << endl;
    cout << "Pembayaran tertinggi   : Rp"
         << biayaTertinggi << endl;

    cout << "\n=== PROGRAM SELESAI ===\n";

    return 0;
}
