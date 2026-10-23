#include <iostream>
using namespace std;

int main() {
    // Deklarasi variabel rekapitulasi
    int jumlahMotor = 0;
    int jumlahMobil = 0;
    int jumlahTiketHilang = 0;
    int pendapatanMotor = 0;
    int pendapatanMobil = 0;
    int totalDenda = 0;
    int biayaTertinggi = 0;

    char pilihan = 'Y';
    char jenisKendaraan, tiketHilang;
    int biayaParkir, denda, totalBayar;

    cout << "=== REKAPITULASI PARKIR ===" << endl;

    while (pilihan == 'Y' || pilihan == 'y') {
        // Menerima data hasil perhitungan Modul A
        cout << "\nJenis kendaraan (M = Motor, C = Mobil): ";
        cin >> jenisKendaraan;

        while (jenisKendaraan != 'M' && jenisKendaraan != 'm' &&
               jenisKendaraan != 'C' && jenisKendaraan != 'c') {
            cout << "Input salah! Masukkan M atau C: ";
            cin >> jenisKendaraan;
        }
        // harus dalam bentuk huruf kapital M atau C

        cout << "Apakah tiket hilang? (Y = Ya, N = Tidak): ";
        cin >> tiketHilang;

        cout << "Masukkan biaya parkir: Rp";
        cin >> biayaParkir;
        // harus dalam bentuk angka

        cout << "Masukkan denda: Rp";
        cin >> denda;
        // harus dalam bentuk angka

        totalBayar = biayaParkir + denda;

        // Menghitung jumlah kendaraan dan pendapatan
        if (jenisKendaraan == 'M' || jenisKendaraan == 'm') {
            jumlahMotor = jumlahMotor + 1;
            pendapatanMotor = pendapatanMotor + totalBayar;
        } else {
            jumlahMobil = jumlahMobil + 1;
            pendapatanMobil = pendapatanMobil + totalBayar;
        }

        // Menghitung tiket hilang dan total denda
        if (tiketHilang == 'Y' || tiketHilang == 'y') {
            jumlahTiketHilang = jumlahTiketHilang + 1;
            totalDenda = totalDenda + denda;
        }

        // Mencari pembayaran tertinggi
        if (totalBayar > biayaTertinggi) {
            biayaTertinggi = totalBayar;
        }

        cout << "\nTambah data kendaraan? (Y = Ya, N = Tidak): ";
        cin >> pilihan;
    }

    // Menghitung total pendapatan
    int totalPendapatan = pendapatanMotor + pendapatanMobil;

    // Menampilkan rekapitulasi
    cout << "\n=== REKAPITULASI PARKIR ===" << endl;
    cout << "Jumlah motor          : " << jumlahMotor << endl;
    cout << "Jumlah mobil          : " << jumlahMobil << endl;
    cout << "Jumlah tiket hilang   : " << jumlahTiketHilang << endl;
    cout << "Pendapatan motor      : Rp" << pendapatanMotor << endl;
    cout << "Pendapatan mobil      : Rp" << pendapatanMobil << endl;
    cout << "Total denda           : Rp" << totalDenda << endl;
    cout << "Total pendapatan      : Rp" << totalPendapatan << endl;
    cout << "Pembayaran tertinggi  : Rp" << biayaTertinggi << endl;

    return 0;
}