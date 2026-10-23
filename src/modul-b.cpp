#include <iostream>
using namespace std;

int main() {
    int jumlahMotor = 0;
    int jumlahMobil = 0;
    int jumlahTiketHilang = 0;

    int pendapatanMotor = 0;
    int pendapatanMobil = 0;
    int totalDenda = 0;
    int totalPendapatan = 0;
    int biayaTertinggi = 0;

    char jenisKendaraan;
    char tiketHilang;
    char pilihan = 'Y';

    int biayaParkir;
    int denda;
    int totalBayar;

    cout << "=== REKAPITULASI PARKIR ===" << endl;

    while (pilihan == 'Y') {
        // Input jenis kendaraan
        do {
            cout << "\nJenis kendaraan (M = Motor, C = Mobil): ";
            cin >> jenisKendaraan;

            if (jenisKendaraan != 'M' &&
                jenisKendaraan != 'm' &&
                jenisKendaraan != 'C' &&
                jenisKendaraan != 'c') {
                cout << "Jenis kendaraan tidak valid!\n";
            }
        } while (jenisKendaraan != 'M' &&
                 jenisKendaraan != 'm' &&
                 jenisKendaraan != 'C' &&
                 jenisKendaraan != 'c');

        if (jenisKendaraan == 'm') jenisKendaraan = 'M';
        if (jenisKendaraan == 'c') jenisKendaraan = 'C';

        // Input status tiket
        do {
            cout << "Apakah tiket hilang? (Y/N): ";
            cin >> tiketHilang;

            if (tiketHilang == 'y') tiketHilang = 'Y';
            if (tiketHilang == 'n') tiketHilang = 'N';

            if (tiketHilang != 'Y' && tiketHilang != 'N') {
                cout << "Input tidak valid!\n";
            }
        } while (tiketHilang != 'Y' && tiketHilang != 'N');

        // Input biaya parkir
        do {
            cout << "Masukkan biaya parkir: Rp";
            cin >> biayaParkir;

            if (biayaParkir < 0) {
                cout << "Biaya tidak boleh negatif!\n";
            }
        } while (biayaParkir < 0);

        // Input denda
        do {
            cout << "Masukkan denda: Rp";
            cin >> denda;

            if (denda < 0) {
                cout << "Denda tidak boleh negatif!\n";
            }
        } while (denda < 0);

        // Menghitung total pembayaran
        totalBayar = biayaParkir + denda;

        // Memperbarui rekapitulasi
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
            cout << "Tambah data kendaraan? (Y/N): ";
            cin >> pilihan;

            if (pilihan == 'y') pilihan = 'Y';
            if (pilihan == 'n') pilihan = 'N';

            if (pilihan != 'Y' && pilihan != 'N') {
                cout << "Input tidak valid!\n";
            }
        } while (pilihan != 'Y' && pilihan != 'N');
    }

    // Menghitung total pendapatan tanpa menghitung denda dua kali
    totalPendapatan = pendapatanMotor
                    + pendapatanMobil
                    + totalDenda;

    // Menampilkan rekapitulasi
    cout << "\n=== REKAPITULASI PARKIR ===\n";
    cout << "Jumlah motor        : " << jumlahMotor << endl;
    cout << "Jumlah mobil        : " << jumlahMobil << endl;
    cout << "Jumlah seluruh kendaraan: "
         << jumlahMotor + jumlahMobil << endl;
    cout << "Jumlah tiket hilang : "
         << jumlahTiketHilang << endl;
    cout << "Pendapatan motor    : Rp"
         << pendapatanMotor << endl;
    cout << "Pendapatan mobil    : Rp"
         << pendapatanMobil << endl;
    cout << "Total denda         : Rp"
         << totalDenda << endl;
    cout << "Total pendapatan    : Rp"
         << totalPendapatan << endl;
    cout << "Pembayaran tertinggi: Rp"
         << biayaTertinggi << endl;

    return 0;
}
