#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
    string nomorKendaraan;
    char jenisKendaraan, tiketHilang;
    double lamaParkir;
    int durasiParkir, biayaParkir = 0;
    int denda = 0, totalBayar;

    cout << "=== PROGRAM PARKIR ===" << endl;

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

    durasiParkir = ceil(lamaParkir);

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
    } else {
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

    totalBayar = biayaParkir + denda;

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

    return 0;
}#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
    string nomorKendaraan;
    char jenisKendaraan, tiketHilang;
    double lamaParkir;
    int durasiParkir, biayaParkir = 0;
    int denda = 0, totalBayar;

    cout << "=== PROGRAM PARKIR ===" << endl;

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

    durasiParkir = ceil(lamaParkir);

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
    } else {
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

    totalBayar = biayaParkir + denda;

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

    return 0;
}#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
    string nomorKendaraan;
    char jenisKendaraan, tiketHilang;
    double lamaParkir;
    int durasiParkir, biayaParkir = 0;
    int denda = 0, totalBayar;

    cout << "=== PROGRAM PARKIR ===" << endl;

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

    durasiParkir = ceil(lamaParkir);

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
    } else {
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

    totalBayar = biayaParkir + denda;

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

    return 0;
}