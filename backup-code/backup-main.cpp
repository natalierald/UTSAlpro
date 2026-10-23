#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
    // Variabel Modul A
    string nomorKendaraan;
    char jenisKendaraan, tiketHilang;
    double lamaParkir;
    int durasiParkir, biayaParkir, denda, totalBayar;

    // Variabel Modul B
    int jumlahMotor = 0;
    int jumlahMobil = 0;
    int jumlahTiketHilang = 0;
    int pendapatanMotor = 0;
    int pendapatanMobil = 0;
    int totalDenda = 0;
    int biayaTertinggi = 0;
    int totalPendapatan = 0;
    char pilihan = 'Y';

    cout << "=== PROGRAM PENGELOLAAN PARKIR KAMPUS ===" << endl;

    while (pilihan == 'Y' || pilihan == 'y') {
        // INPUT DATA KENDARAAN
        cout << endl;
        cout << "Masukkan nomor kendaraan: ";
        cin >> nomorKendaraan;

        cout << "Jenis kendaraan (M = Motor, C = Mobil): ";
        cin >> jenisKendaraan;

        while (jenisKendaraan != 'M' && jenisKendaraan != 'm' &&
               jenisKendaraan != 'C' && jenisKendaraan != 'c') {
            cout << "Input salah! Masukkan M atau C: ";
            cin >> jenisKendaraan;
        }

        cout << "Masukkan lama parkir (jam): ";
        cin >> lamaParkir;

        while (lamaParkir <= 0) {
            cout << "Lama parkir harus lebih dari 0 jam: ";
            cin >> lamaParkir;
        }

        cout << "Apakah tiket hilang? (Y = Ya, N = Tidak): ";
        cin >> tiketHilang;

        while (tiketHilang != 'Y' && tiketHilang != 'y' &&
               tiketHilang != 'N' && tiketHilang != 'n') {
            cout << "Input salah! Masukkan Y atau N: ";
            cin >> tiketHilang;
        }

        // MENGHITUNG DURASI PARKIR
        durasiParkir = ceil(lamaParkir);

        biayaParkir = 0;
        denda = 0;

        // MODUL A: MENGHITUNG BIAYA PARKIR MOTOR
        if (jenisKendaraan == 'M' || jenisKendaraan == 'm') {
            if (durasiParkir <= 1) {
                biayaParkir = 2000;
            } else if (durasiParkir <= 5) {
                biayaParkir = 2000 + (durasiParkir - 1) * 1000;
            } else {
                biayaParkir = 6000 + (durasiParkir - 5) * 500;
            }

            if (tiketHilang == 'Y' || tiketHilang == 'y') {
                denda = 20000;
            }
        }

        // MODUL A: MENGHITUNG BIAYA PARKIR MOBIL
        else {
            if (durasiParkir <= 1) {
                biayaParkir = 5000;
            } else if (durasiParkir <= 5) {
                biayaParkir = 5000 + (durasiParkir - 1) * 2000;
            } else {
                biayaParkir = 13000 + (durasiParkir - 5) * 1000;
            }

            if (tiketHilang == 'Y' || tiketHilang == 'y') {
                denda = 50000;
            }
        }

        // MENGHITUNG TOTAL PEMBAYARAN
        totalBayar = biayaParkir + denda;

        // MENAMPILKAN RINCIAN PEMBAYARAN
        cout << endl;
        cout << "=== RINCIAN PEMBAYARAN ===" << endl;
        cout << "Nomor kendaraan : " << nomorKendaraan << endl;

        if (jenisKendaraan == 'M' || jenisKendaraan == 'm') {
            cout << "Jenis kendaraan : Motor" << endl;
        } else {
            cout << "Jenis kendaraan : Mobil" << endl;
        }

        cout << "Lama parkir     : " << lamaParkir << " jam" << endl;
        cout << "Durasi dihitung : " << durasiParkir << " jam" << endl;
        cout << "Biaya parkir    : Rp" << biayaParkir << endl;
        cout << "Denda           : Rp" << denda << endl;
        cout << "Total pembayaran: Rp" << totalBayar << endl;

        // MODUL B: REKAPITULASI KENDARAAN
        if (jenisKendaraan == 'M' || jenisKendaraan == 'm') {
            jumlahMotor = jumlahMotor + 1;
            pendapatanMotor = pendapatanMotor + totalBayar;
        } else {
            jumlahMobil = jumlahMobil + 1;
            pendapatanMobil = pendapatanMobil + totalBayar;
        }

        if (tiketHilang == 'Y' || tiketHilang == 'y') {
            jumlahTiketHilang = jumlahTiketHilang + 1;
            totalDenda = totalDenda + denda;
        }

        if (totalBayar > biayaTertinggi) {
            biayaTertinggi = totalBayar;
        }

        totalPendapatan = pendapatanMotor + pendapatanMobil;

        // MENENTUKAN APAKAH ADA KENDARAAN BERIKUTNYA
        cout << endl;
        cout << "Tambah kendaraan lagi? (Y = Ya, N = Tidak): ";
        cin >> pilihan;
    }

    // MENAMPILKAN REKAPITULASI AKHIR
    cout << endl;
    cout << "======================================" << endl;
    cout << "       REKAPITULASI PARKIR KAMPUS" << endl;
    cout << "======================================" << endl;
    cout << "Jumlah motor         : " << jumlahMotor << endl;
    cout << "Jumlah mobil         : " << jumlahMobil << endl;
    cout << "Jumlah seluruh kendaraan: "
         << jumlahMotor + jumlahMobil << endl;
    cout << "Jumlah tiket hilang  : " << jumlahTiketHilang << endl;
    cout << "Pendapatan motor     : Rp" << pendapatanMotor << endl;
    cout << "Pendapatan mobil     : Rp" << pendapatanMobil << endl;
    cout << "Total denda          : Rp" << totalDenda << endl;
    cout << "Total pendapatan     : Rp" << totalPendapatan << endl;
    cout << "Pembayaran tertinggi : Rp" << biayaTertinggi << endl;
    cout << "======================================" << endl;

    cout << "Program selesai." << endl;

    return 0;
}