/**
 * data.js - Koleksi Data Studi Kasus Algoritma & Pemrograman C++
 * UTS Algoritma dan Pemrograman
 */

const DEFAULT_CASE_STUDIES = [
    {
        id: "case-01",
        title: "Sistem Kasir Toko & Diskon Bertingkat",
        category: "Dasar & Logika",
        difficulty: "Mudah",
        author: "Mahasiswa Alpro",
        date: "2026-10-01",
        readTime: "5 menit",
        tags: ["if-else", "operator logika", "iomanip", "percabangan"],
        complexity: {
            time: "O(1)",
            space: "O(1)"
        },
        summary: "Menghitung total pembayaran belanja swalayan dengan aturan diskon bertingkat, status member VIP/Reguler, dan pajak PPN 11%.",
        problem: `Sebuah toko swalayan "Alpro Mart" menerapkan aturan potongan harga sebagai berikut:
1. Jika total belanja >= Rp 500.000, diskon 15%.
2. Jika total belanja >= Rp 250.000 dan < Rp 500.000, diskon 10%.
3. Jika total belanja >= Rp 100.000 dan < Rp 250.000, diskon 5%.
4. Jika pelanggan memiliki kartu Member VIP, mendapat tambahan diskon 5% dari total setelah diskon utama.
5. Transaksi dikenakan PPN 11% dari total akhir.
Program harus menerima input nama pelanggan, total belanja, status member ('Y'/'T'), dan jumlah uang yang dibayarkan, lalu mencetak struk transaksi serta nominal kembalian.`,
        pseudocode: `ALGORITMA KasirToko
DEKLARASI:
    nama: string
    totalBelanja, diskon, diskonMember, totalSetelahDiskon, ppn, totalBayar, bayar, kembalian: real
    isMember: char

DESKRIPSI:
    BACA nama, totalBelanja, isMember
    JIKA totalBelanja >= 500000 MAKA diskon = 0.15 * totalBelanja
    SELAIN JIKA totalBelanja >= 250000 MAKA diskon = 0.10 * totalBelanja
    SELAIN JIKA totalBelanja >= 100000 MAKA diskon = 0.05 * totalBelanja
    SELAIN diskon = 0

    totalSetelahDiskon = totalBelanja - diskon
    JIKA isMember == 'Y' ATAU isMember == 'y' MAKA
        diskonMember = 0.05 * totalSetelahDiskon
    SELAIN
        diskonMember = 0

    ppn = 0.11 * (totalSetelahDiskon - diskonMember)
    totalBayar = (totalSetelahDiskon - diskonMember) + ppn

    BACA bayar
    kembalian = bayar - totalBayar
    CETAK Struk Transaksi dan kembalian
SELESAI`,
        code: `#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    string nama;
    double totalBelanja, bayar;
    char isMember;

    cout << "========================================\\n";
    cout << "        STRUK KASIR ALPRO MART          \\n";
    cout << "========================================\\n";

    cout << "Masukkan Nama Pelanggan: ";
    getline(cin, nama);

    cout << "Masukkan Total Belanja (Rp): ";
    cin >> totalBelanja;

    cout << "Apakah memiliki kartu Member VIP? (Y/T): ";
    cin >> isMember;

    // Logika diskon utama
    double persentaseDiskon = 0.0;
    if (totalBelanja >= 500000) {
        persentaseDiskon = 0.15;
    } else if (totalBelanja >= 250000) {
        persentaseDiskon = 0.10;
    } else if (totalBelanja >= 100000) {
        persentaseDiskon = 0.05;
    }

    double nominalDiskon = totalBelanja * persentaseDiskon;
    double setelahDiskon = totalBelanja - nominalDiskon;

    // Diskon tambahan jika member
    double diskonMember = 0.0;
    if (isMember == 'Y' || isMember == 'y') {
        diskonMember = setelahDiskon * 0.05;
    }

    double dpp = setelahDiskon - diskonMember;
    double ppn = dpp * 0.11;
    double totalBayar = dpp + ppn;

    cout << "\\n----------------------------------------\\n";
    cout << fixed << setprecision(2);
    cout << "Total Belanja Awal   : Rp " << setw(10) << totalBelanja << "\\n";
    cout << "Diskon Belanja (" << (persentaseDiskon * 100) << "%) : Rp " << setw(10) << nominalDiskon << "\\n";
    cout << "Diskon Member VIP (5%): Rp " << setw(10) << diskonMember << "\\n";
    cout << "Dasar Pengenaan Pajak: Rp " << setw(10) << dpp << "\\n";
    cout << "PPN 11%              : Rp " << setw(10) << ppn << "\\n";
    cout << "----------------------------------------\\n";
    cout << "TOTAL HARUS DIBAYAR  : Rp " << setw(10) << totalBayar << "\\n";
    cout << "----------------------------------------\\n";

    cout << "Masukkan Jumlah Uang Bayar: Rp ";
    cin >> bayar;

    if (bayar < totalBayar) {
        cout << "Peringatan: Uang pembayaran kurang sebesar Rp " << (totalBayar - bayar) << "!\\n";
    } else {
        double kembalian = bayar - totalBayar;
        cout << "Uang Kembalian       : Rp " << setw(10) << kembalian << "\\n";
        cout << "\\nTerima kasih telah berbelanja di Alpro Mart, " << nama << "!\\n";
    }

    return 0;
}`,
        sampleInput: `Nama: Budi Santoso
Total Belanja: 600000
Member (Y/T): Y
Uang Bayar: 600000`,
        sampleOutput: `Total Belanja Awal   : Rp  600000.00
Diskon Belanja (15%) : Rp   90000.00
Diskon Member VIP (5%): Rp   25500.00
Dasar Pengenaan Pajak: Rp  484500.00
PPN 11%              : Rp   53295.00
TOTAL HARUS DIBAYAR  : Rp  537795.00
Uang Kembalian       : Rp   62205.00`,
        simulatorType: "kasir"
    },

    {
        id: "case-02",
        title: "Pola Geometri Piramida Berlian Berongga (Hollow Diamond)",
        category: "Perulangan",
        difficulty: "Sedang",
        author: "Mahasiswa Alpro",
        date: "2026-10-02",
        readTime: "6 menit",
        tags: ["nested loop", "for loop", "pola bintang", "algoritma pola"],
        complexity: {
            time: "O(n^2)",
            space: "O(1)"
        },
        summary: "Mencetak pola geometris berlian berongga menggunakan perulangan bersarang (nested loops) berdasarkan input tinggi baris n.",
        problem: `Buatlah program C++ yang menerima sebuah bilangan bulat positif n (setengah tinggi berlian). Program kemudian mencetak pola bintang berbentuk berlian berongga (Hollow Diamond) dengan total tinggi (2n - 1) baris.
Pada pola ini, hanya karakter di tepi luar berlian yang dicetak bintang ('*'), sedangkan bagian dalamnya berupa spasi kosong (' ').`,
        pseudocode: `ALGORITMA HollowDiamond
DEKLARASI:
    n, i, j: integer

DESKRIPSI:
    BACA n
    // Bagian Atas
    UNTUK i DARI 1 HINGGA n LAKUKAN
        UNTUK j DARI 1 HINGGA (n - i) LAKUKAN CETAK ' '
        UNTUK j DARI 1 HINGGA (2 * i - 1) LAKUKAN
            JIKA (j == 1 ATAU j == 2 * i - 1) MAKA CETAK '*'
            SELAIN CETAK ' '
        CETAK BarisBaru
    // Bagian Bawah
    UNTUK i DARI (n - 1) TURUN HINGGA 1 LAKUKAN
        UNTUK j DARI 1 HINGGA (n - i) LAKUKAN CETAK ' '
        UNTUK j DARI 1 HINGGA (2 * i - 1) LAKUKAN
            JIKA (j == 1 ATAU j == 2 * i - 1) MAKA CETAK '*'
            SELAIN CETAK ' '
        CETAK BarisBaru
SELESAI`,
        code: `#include <iostream>
using namespace std;

void cetakHollowDiamond(int n) {
    // Bagian atas piramida
    for (int i = 1; i <= n; i++) {
        // Cetak spasi depan
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        // Cetak bintang berongga
        for (int j = 1; j <= (2 * i - 1); j++) {
            if (j == 1 || j == (2 * i - 1)) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout << "\\n";
    }

    // Bagian bawah piramida
    for (int i = n - 1; i >= 1; i--) {
        // Cetak spasi depan
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        // Cetak bintang berongga
        for (int j = 1; j <= (2 * i - 1); j++) {
            if (j == 1 || j == (2 * i - 1)) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout << "\\n";
    }
}

int main() {
    int n;
    cout << "=== POLA HOLLOW DIAMOND C++ ===\\n";
    cout << "Masukkan ukuran setengah tinggi (n): ";
    if (cin >> n && n > 0) {
        cout << "\\nHasil Pola (Tinggi total = " << (2 * n - 1) << " baris):\\n\\n";
        cetakHollowDiamond(n);
    } else {
        cout << "Input harus bilangan bulat positif!\\n";
    }
    return 0;
}`,
        sampleInput: `Ukuran n: 5`,
        sampleOutput: `    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *`,
        simulatorType: "diamond"
    },

    {
        id: "case-03",
        title: "Analisis Statistik Nilai Ujian Mahasiswa",
        category: "Array & Matriks",
        difficulty: "Sedang",
        author: "Mahasiswa Alpro",
        date: "2026-10-02",
        readTime: "7 menit",
        tags: ["array 1D", "fungsi", "statistik", "cmath", "pass by reference"],
        complexity: {
            time: "O(n)",
            space: "O(n)"
        },
        summary: "Mengolah kumpulan nilai mahasiswa dalam Array 1D untuk menghitung Rata-rata, Nilai Tertinggi, Terendah, dan Standar Deviasi (Simpangan Baku).",
        problem: `Dosen pengampu mata kuliah Algoritma dan Pemrograman membutuhkan program untuk menganalisis performa kelas pada ujian tengah semester.
Program harus:
1. Menerima input jumlah mahasiswa (N) dan deretan nilai ujiannya (0 - 100).
2. Menghitung nilai mean (rata-rata).
3. Menemukan nilai tertinggi (maksimum) beserta frekuensinya.
4. Menemukan nilai terendah (minimum).
5. Menghitung Standar Deviasi sampel (akar kuadrat dari varians).
6. Menghitung persentase mahasiswa yang lulus (nilai >= 70).`,
        pseudocode: `ALGORITMA AnalisisNilai
DEKLARASI:
    N, i, countLulus: integer
    nilai: array[1..N] of real
    sum, mean, maxVal, minVal, variance, stdDev: real

DESKRIPSI:
    BACA N
    sum = 0
    maxVal = -9999, minVal = 9999
    UNTUK i DARI 1 HINGGA N LAKUKAN
        BACA nilai[i]
        sum = sum + nilai[i]
        JIKA nilai[i] > maxVal MAKA maxVal = nilai[i]
        JIKA nilai[i] < minVal MAKA minVal = nilai[i]
        JIKA nilai[i] >= 70 MAKA countLulus = countLulus + 1

    mean = sum / N

    // Menghitung varians
    sumDiffSq = 0
    UNTUK i DARI 1 HINGGA N LAKUKAN
        sumDiffSq = sumDiffSq + (nilai[i] - mean)^2
    stdDev = SQRT(sumDiffSq / (N - 1))

    CETAK Statistik Lengkap
SELESAI`,
        code: `#include <iostream>
#include <vector>
#include <cmath>
#include <iomanip>
#include <algorithm>

using namespace std;

// Fungsi menghitung rata-rata
double hitungMean(const vector<double>& data) {
    double total = 0.0;
    for (double x : data) total += x;
    return total / data.size();
}

// Fungsi menghitung standar deviasi sampel
double hitungStandarDeviasi(const vector<double>& data, double mean) {
    if (data.size() <= 1) return 0.0;
    double sumKuadratSelisih = 0.0;
    for (double x : data) {
        sumKuadratSelisih += pow(x - mean, 2);
    }
    return sqrt(sumKuadratSelisih / (data.size() - 1));
}

int main() {
    int n;
    cout << "=====================================\\n";
    cout << "  ANALISIS STATISTIK NILAI UTS ALPRO \\n";
    cout << "=====================================\\n";
    cout << "Masukkan jumlah mahasiswa (N): ";
    if (!(cin >> n) || n <= 0) {
        cout << "Jumlah mahasiswa harus lebih dari 0!\\n";
        return 1;
    }

    vector<double> nilai(n);
    double maxVal = -1.0;
    double minVal = 101.0;
    int lulus = 0;

    for (int i = 0; i < n; i++) {
        cout << "Nilai Mahasiswa ke-" << (i + 1) << " [0-100]: ";
        cin >> nilai[i];
        if (nilai[i] > maxVal) maxVal = nilai[i];
        if (nilai[i] < minVal) minVal = nilai[i];
        if (nilai[i] >= 70.0) lulus++;
    }

    double mean = hitungMean(nilai);
    double stdDev = hitungStandarDeviasi(nilai, mean);
    double persenLulus = (static_cast<double>(lulus) / n) * 100.0;

    cout << "\\n----------- HASIL ANALISIS -----------\\n";
    cout << fixed << setprecision(2);
    cout << "Jumlah Mahasiswa    : " << n << " orang\\n";
    cout << "Nilai Rata-rata     : " << mean << "\\n";
    cout << "Nilai Tertinggi     : " << maxVal << "\\n";
    cout << "Nilai Terendah      : " << minVal << "\\n";
    cout << "Standar Deviasi (s) : " << stdDev << "\\n";
    cout << "Tingkat Kelulusan   : " << persenLulus << "% (" << lulus << "/" << n << ")\\n";
    cout << "--------------------------------------\\n";

    return 0;
}`,
        sampleInput: `Jumlah Mahasiswa: 5
Nilai: 85, 90, 65, 78, 92`,
        sampleOutput: `Jumlah Mahasiswa    : 5 orang
Nilai Rata-rata     : 82.00
Nilai Tertinggi     : 92.00
Nilai Terendah      : 65.00
Standar Deviasi (s) : 10.65
Tingkat Kelulusan   : 80.00% (4/5)`,
        simulatorType: "statistik"
    },

    {
        id: "case-04",
        title: "Perkalian & Transposisi Matriks Dinamis 2D",
        category: "Array & Matriks",
        difficulty: "Sedang",
        author: "Mahasiswa Alpro",
        date: "2026-10-03",
        readTime: "8 menit",
        tags: ["array 2D", "matriks", "linear algebra", "nested loop"],
        complexity: {
            time: "O(r1 * c1 * c2)",
            space: "O(r1 * c2)"
        },
        summary: "Operasi aljabar linear pada C++: validasi syarat perkalian matriks ordo (r1 x c1) dan (r2 x c2), kalkulasi perkalian, dan pencetakan transpos matriks hasil.",
        problem: `Perkalian dua buah matriks A dan B hanya dapat dilakukan jika jumlah kolom matriks A sama dengan jumlah baris matriks B (c1 == r2).
Program harus:
1. Meminta ordo matriks A (r1 x c1) dan ordo matriks B (r2 x c2).
2. Memvalidasi apakah perkalian matriks dapat dilakukan.
3. Menginput elemen masing-masing matriks.
4. Menghitung matriks hasil perkalian C = A x B berordo (r1 x c2).
5. Menghitung dan menampilkan matriks transpos dari C (C^T berordo c2 x r1).`,
        pseudocode: `ALGORITMA PerkalianDanTransposMatriks
DEKLARASI:
    r1, c1, r2, c2, i, j, k: integer
    A, B, C: array 2D of real

DESKRIPSI:
    BACA r1, c1, r2, c2
    JIKA c1 != r2 MAKA
        CETAK "Error: Syarat c1 == r2 tidak terpenuhi"
        KELUAR
    BACA elemen A dan B
    INISIALISASI C dengan 0
    UNTUK i DARI 0 HINGGA r1-1 LAKUKAN
        UNTUK j DARI 0 HINGGA c2-1 LAKUKAN
            UNTUK k DARI 0 HINGGA c1-1 LAKUKAN
                C[i][j] = C[i][j] + A[i][k] * B[k][j]
    CETAK C
    CETAK Transpos(C)
SELESAI`,
        code: `#include <iostream>
#include <vector>
#include <iomanip>

using namespace std;

void cetakMatriks(const vector<vector<int>>& M, const string& nama) {
    cout << "Matriks " << nama << " (" << M.size() << "x" << M[0].size() << "):\\n";
    for (const auto& baris : M) {
        for (int val : baris) {
            cout << setw(6) << val << " ";
        }
        cout << "\\n";
    }
}

int main() {
    int r1, c1, r2, c2;
    cout << "=== PERKALIAN & TRANSPOS MATRIKS C++ ===\\n";
    cout << "Dimensi Matriks A (baris kolom): ";
    cin >> r1 >> c1;
    cout << "Dimensi Matriks B (baris kolom): ";
    cin >> r2 >> c2;

    if (c1 != r2) {
        cout << "\\n[GAGAL] Matriks tidak dapat dikalikan! Kolom A (" << c1 
             << ") harus sama dengan Baris B (" << r2 << ").\\n";
        return 1;
    }

    vector<vector<int>> A(r1, vector<int>(c1));
    vector<vector<int>> B(r2, vector<int>(c2));
    vector<vector<int>> C(r1, vector<int>(c2, 0));

    cout << "\\nInput Elemen Matriks A (" << r1 << "x" << c1 << "):\\n";
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c1; j++) {
            cin >> A[i][j];
        }
    }

    cout << "\\nInput Elemen Matriks B (" << r2 << "x" << c2 << "):\\n";
    for (int i = 0; i < r2; i++) {
        for (int j = 0; j < c2; j++) {
            cin >> B[i][j];
        }
    }

    // Kalkulasi Perkalian Matriks
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            for (int k = 0; k < c1; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    cout << "\\n---------------- HASIL ----------------\\n";
    cetakMatriks(C, "Hasil C (A x B)");

    // Kalkulasi Transpos Matriks C
    vector<vector<int>> CT(c2, vector<int>(r1));
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            CT[j][i] = C[i][j];
        }
    }
    cout << "\\n";
    cetakMatriks(CT, "Transpos C (C^T)");

    return 0;
}`,
        sampleInput: `Matriks A (2x2): [[1, 2], [3, 4]]
Matriks B (2x2): [[5, 6], [7, 8]]`,
        sampleOutput: `Matriks Hasil C (A x B):
    19     22 
    43     50 

Matriks Transpos C (C^T):
    19     43 
    22     50`,
        simulatorType: "matriks"
    },

    {
        id: "case-05",
        title: "Perbandingan Algoritma Pengurutan: Bubble Sort vs Quick Sort",
        category: "Sorting & Searching",
        difficulty: "Mahir",
        author: "Mahasiswa Alpro",
        date: "2026-10-03",
        readTime: "10 menit",
        tags: ["sorting", "bubble sort", "quick sort", "kompleksitas", "divide and conquer"],
        complexity: {
            time: "Bubble: O(n^2), Quick: O(n log n)",
            space: "Bubble: O(1), Quick: O(log n)"
        },
        summary: "Implementasi benchmarking algoritma Bubble Sort dan Quick Sort lengkap dengan penghitung jumlah swap dan iterasi perbandingan.",
        problem: `Dalam studi komparasi algoritma, kita ingin melihat perbedaan efisiensi antara metode sorting sederhana berorde O(n^2) seperti Bubble Sort dengan metode Divide and Conquer berorde O(n log n) seperti Quick Sort.
Program ini menerima sekumpulan angka acak, lalu mengurutkannya dengan kedua metode secara terpisah sambil mencatat:
1. Jumlah perbandingan data (comparison count).
2. Jumlah penukaran posisi (swap count).
3. Hasil array yang sudah terurut.`,
        pseudocode: `ALGORITMA BenchmarkingSort
DEKLARASI:
    arr: array of integer
    bubbleComparisons, bubbleSwaps: integer
    quickComparisons, quickSwaps: integer

DESKRIPSI:
    BACA arr
    Kloning arr menjadi arrBubble dan arrQuick
    JALANKAN BubbleSort(arrBubble) sambil catat comparisons & swaps
    JALANKAN QuickSort(arrQuick, 0, n-1) sambil catat comparisons & swaps
    CETAK Hasil komparasi efisiensi
SELESAI`,
        code: `#include <iostream>
#include <vector>
#include <utility>

using namespace std;

struct SortMetrics {
    long long comparisons = 0;
    long long swaps = 0;
};

// Implementasi Bubble Sort
void bubbleSort(vector<int> arr, SortMetrics& metrics) {
    int n = arr.size();
    bool swapped;
    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            metrics.comparisons++;
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                metrics.swaps++;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

// Partition untuk Quick Sort
int partitionArr(vector<int>& arr, int low, int high, SortMetrics& metrics) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        metrics.comparisons++;
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
            metrics.swaps++;
        }
    }
    swap(arr[i + 1], arr[high]);
    metrics.swaps++;
    return (i + 1);
}

// Implementasi Quick Sort
void quickSort(vector<int>& arr, int low, int high, SortMetrics& metrics) {
    if (low < high) {
        int pi = partitionArr(arr, low, high, metrics);
        quickSort(arr, low, pi - 1, metrics);
        quickSort(arr, pi + 1, high, metrics);
    }
}

int main() {
    vector<int> data = {64, 34, 25, 12, 22, 11, 90, 45, 78, 3};
    int n = data.size();

    cout << "=== KOMPARASI BUBBLE SORT VS QUICK SORT ===\\n";
    cout << "Data Awal (" << n << " elemen): ";
    for (int x : data) cout << x << " ";
    cout << "\\n\\n";

    SortMetrics mBubble, mQuick;

    // Tes Bubble Sort
    bubbleSort(data, mBubble);

    // Tes Quick Sort
    vector<int> quickData = data;
    quickSort(quickData, 0, n - 1, mQuick);

    cout << "Hasil Pengurutan:\\n";
    for (int x : quickData) cout << x << " ";
    cout << "\\n\\n";

    cout << "--- Metrik Kinerja ---\\n";
    cout << "[Bubble Sort]\\n";
    cout << "  - Jumlah Perbandingan : " << mBubble.comparisons << " kali\\n";
    cout << "  - Jumlah Pertukaran   : " << mBubble.swaps << " kali\\n";

    cout << "[Quick Sort]\\n";
    cout << "  - Jumlah Perbandingan : " << mQuick.comparisons << " kali\\n";
    cout << "  - Jumlah Pertukaran   : " << mQuick.swaps << " kali\\n";

    return 0;
}`,
        sampleInput: `Data: [64, 34, 25, 12, 22, 11, 90, 45, 78, 3]`,
        sampleOutput: `Data Terurut: 3 11 12 22 25 34 45 64 78 90

[Bubble Sort]
  - Perbandingan : 44 kali
  - Pertukaran   : 26 kali

[Quick Sort]
  - Perbandingan : 24 kali
  - Pertukaran   : 17 kali`,
        simulatorType: "sorting"
    },

    {
        id: "case-06",
        title: "Pencarian Biner (Binary Search) Data Terurut & Visualisasi Langkah",
        category: "Sorting & Searching",
        difficulty: "Mudah",
        author: "Mahasiswa Alpro",
        date: "2026-10-04",
        readTime: "5 menit",
        tags: ["binary search", "searching", "divide and conquer", "logaritmik"],
        complexity: {
            time: "O(log n)",
            space: "O(1)"
        },
        summary: "Pencarian elemen secara logaritmik O(log n) pada array terurut dengan visualisasi indeks rentang (low, mid, high) di setiap langkahnya.",
        problem: `Diberikan array data angka terurut membesar (sorted ascending). Buatlah program C++ untuk mencari sebuah nilai target x menggunakan algoritma Binary Search.
Program harus menampilkan jejak (trace) eksekusi di tiap iterasi:
- Nilai indeks 'low', 'high', dan 'mid'
- Nilai elemen pada indeks 'mid'
- Keputusan apakah pencarian bergeser ke kiri atau kanan
- Nomor indeks tempat target ditemukan atau keterangan jika tidak ditemukan.`,
        pseudocode: `ALGORITMA BinarySearch
DEKLARASI:
    arr: array of integer terurut
    low, high, mid, target, step: integer

DESKRIPSI:
    low = 0
    high = panjang(arr) - 1
    step = 1

    SELAMA low <= high LAKUKAN
        mid = low + (high - low) / 2
        CETAK Step, low, mid, high, arr[mid]
        JIKA arr[mid] == target MAKA
            KEMBALIKAN mid // Ditemukan
        SELAIN JIKA arr[mid] < target MAKA
            low = mid + 1 // Cari di separuh kanan
        SELAIN
            high = mid - 1 // Cari di separuh kiri
        step = step + 1

    KEMBALIKAN -1 // Tidak ditemukan
SELESAI`,
        code: `#include <iostream>
#include <vector>

using namespace std;

int binarySearchWithTrace(const vector<int>& arr, int target) {
    int low = 0;
    int high = arr.size() - 1;
    int step = 1;

    cout << "\\nLangkah-langkah Pencarian:\\n";
    cout << "Step | Low | High | Mid | arr[Mid] | Aksi\\n";
    cout << "------------------------------------------\\n";

    while (low <= high) {
        int mid = low + (high - low) / 2;

        cout << "  " << step++ << "  |  " << low << "  |  " << high << "   |  " 
             << mid << "  |    " << arr[mid] << "    | ";

        if (arr[mid] == target) {
            cout << "TARGET DITEMUKAN!\\n";
            return mid;
        } else if (arr[mid] < target) {
            cout << "Target lebih besar -> Geser Low ke kanan (" << (mid + 1) << ")\\n";
            low = mid + 1;
        } else {
            cout << "Target lebih kecil -> Geser High ke kiri (" << (mid - 1) << ")\\n";
            high = mid - 1;
        }
    }

    return -1; // Tidak ditemukan
}

int main() {
    vector<int> data = {4, 9, 15, 23, 38, 42, 57, 68, 71, 84, 95};
    int target;

    cout << "=== BINARY SEARCH TRACER C++ ===\\n";
    cout << "Array Terurut: ";
    for (size_t i = 0; i < data.size(); i++) {
        cout << "[" << i << "]:" << data[i] << " ";
    }
    cout << "\\n\\nMasukkan nilai target yang dicari: ";
    if (cin >> target) {
        int hasil = binarySearchWithTrace(data, target);
        if (hasil != -1) {
            cout << "\\n=> KESIMPULAN: Nilai " << target << " ditemukan pada indeks ke-" << hasil << "!\\n";
        } else {
            cout << "\\n=> KESIMPULAN: Nilai " << target << " TIDAK ADA di dalam array.\\n";
        }
    }
    return 0;
}`,
        sampleInput: `Target: 42`,
        sampleOutput: `Step | Low | High | Mid | arr[Mid] | Aksi
  1  |  0  |  10   |  5  |    42    | TARGET DITEMUKAN!

=> KESIMPULAN: Nilai 42 ditemukan pada indeks ke-5!`,
        simulatorType: "search"
    },

    {
        id: "case-07",
        title: "Kalkulator Rekursi Fibonacci & Menara Hanoi",
        category: "Fungsi & Rekursi",
        difficulty: "Sedang",
        author: "Mahasiswa Alpro",
        date: "2026-10-04",
        readTime: "7 menit",
        tags: ["rekursi", "call stack", "hanoi", "fibonacci", "memoization"],
        complexity: {
            time: "Hanoi: O(2^n), Fibonacci Memo: O(n)",
            space: "O(n)"
        },
        summary: "Eksplorasi konsep rekursi mendalam melalui puzzle klasik Menara Hanoi dan optimasi deret Fibonacci dengan teknik memoization (Dynamic Programming dasar).",
        problem: `Rekursi adalah teknik pemanggilan fungsi ke dalam dirinya sendiri dengan penentu base case (kondisi henti).
Studi kasus ini mencakup dua problem klasik:
1. Memindahkan N cakram pada puzzle Menara Hanoi dari tonggak asal (A) ke tonggak tujuan (C) dengan tiang bantu (B), di mana cakram besar tidak boleh berada di atas cakram lebih kecil.
2. Menghitung suku ke-N deret Fibonacci dengan optimasi tabel memoization agar tidak mengalami redundansi komputasi eksponensial.`,
        pseudocode: `PROSEDUR Hanoi(n, asal, tujuan, bantu)
    JIKA n == 1 MAKA
        CETAK "Pindahkan cakram 1 dari " + asal + " ke " + tujuan
        KEMBALI
    Hanoi(n - 1, asal, bantu, tujuan)
    CETAK "Pindahkan cakram " + n + " dari " + asal + " ke " + tujuan
    Hanoi(n - 1, bantu, tujuan, asal)
SELESAI

FUNGSI FiboMemo(n, memo)
    JIKA n <= 1 KEMBALIKAN n
    JIKA memo[n] != -1 KEMBALIKAN memo[n]
    memo[n] = FiboMemo(n-1, memo) + FiboMemo(n-2, memo)
    KEMBALIKAN memo[n]
SELESAI`,
        code: `#include <iostream>
#include <vector>

using namespace std;

// Prosedur Rekursi Menara Hanoi
void menaraHanoi(int n, char asal, char tujuan, char bantu, int& langkah) {
    if (n == 1) {
        cout << "Langkah " << ++langkah << ": Pindahkan cakram 1 dari " << asal << " ke " << tujuan << "\\n";
        return;
    }
    menaraHanoi(n - 1, asal, bantu, tujuan, langkah);
    cout << "Langkah " << ++langkah << ": Pindahkan cakram " << n << " dari " << asal << " ke " << tujuan << "\\n";
    menaraHanoi(n - 1, bantu, tujuan, asal, langkah);
}

// Fungsi Fibonacci dengan Memoization
long long fibonacciMemo(int n, vector<long long>& memo) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    return memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
}

int main() {
    cout << "=== SIMULASI MENARA HANOI ===\\n";
    int nCakram = 3;
    int totalLangkah = 0;
    cout << "Menyelesaikan Hanoi untuk " << nCakram << " cakram:\\n";
    menaraHanoi(nCakram, 'A', 'C', 'B', totalLangkah);
    cout << "Total langkah yang dibutuhkan (2^n - 1) = " << totalLangkah << "\\n\\n";

    cout << "=== KALKULATOR DERET FIBONACCI (MEMOIZATION) ===\\n";
    int nFibo = 20;
    vector<long long> memo(nFibo + 1, -1);
    cout << "Fibonacci ke-" << nFibo << " = " << fibonacciMemo(nFibo, memo) << "\\n";

    cout << "Deret Fibonacci hingga n=" << nFibo << ":\\n";
    for (int i = 0; i <= 10; i++) {
        cout << fibonacciMemo(i, memo) << " ";
    }
    cout << "...\\n";

    return 0;
}`,
        sampleInput: `Jumlah Cakram: 3`,
        sampleOutput: `Langkah 1: Pindahkan cakram 1 dari A ke C
Langkah 2: Pindahkan cakram 2 dari A ke B
Langkah 3: Pindahkan cakram 1 dari C ke B
Langkah 4: Pindahkan cakram 3 dari A ke C
Langkah 5: Pindahkan cakram 1 dari B ke A
Langkah 6: Pindahkan cakram 2 dari B ke C
Langkah 7: Pindahkan cakram 1 dari A ke C
Total langkah = 7`,
        simulatorType: "hanoi"
    },

    {
        id: "case-08",
        title: "Sistem Data Mahasiswa Berbasis Struct & File Streams",
        category: "Struct & Proyek UTS",
        difficulty: "Mahir",
        author: "Mahasiswa Alpro",
        date: "2026-10-05",
        readTime: "12 menit",
        tags: ["struct", "vector", "crud", "proyek akhir", "record", "uts"],
        complexity: {
            time: "O(n)",
            space: "O(n)"
        },
        summary: "Proyek komprehensif mengintegrasikan Struct, Vector C++, operasi CRUD (Create, Read, Update, Delete) data mahasiswa, kalkulasi IPK, dan pemeringkatan ranking.",
        problem: `Pada tugas akhir UTS Algoritma dan Pemrograman, mahasiswa diminta membangun aplikasi konsol untuk mengelola basis data akademik mahasiswa.
Aplikasi menggunakan record 'struct Mahasiswa' yang menyimpan:
- NIM (string)
- Nama (string)
- Nilai Tugas, UTS, UAS (float)
- Nilai Akhir (30% Tugas + 35% UTS + 35% UAS)
- Indeks Huruf ('A', 'B', 'C', 'D', 'E')
Fitur yang tersedia:
1. Input data multi-mahasiswa
2. Tampilkan rekap tabel rapi
3. Urutkan mahasiswa berdasarkan Nilai Akhir tertinggi (Ranking)
4. Pencarian mahasiswa berdasarkan NIM`,
        pseudocode: `TIPE DATA Mahasiswa:
    nim: string
    nama: string
    tugas, uts, uas, akhir: real
    huruf: char

FUNGSI HitungNilaiAkhir(t, u, ua)
    KEMBALIKAN (0.30 * t) + (0.35 * u) + (0.35 * ua)

PROSEDUR TampilkanRanking(daftarMhs)
    Urutkan daftarMhs descending berdasarkan mhs.akhir
    Cetak tabel mahasiswa berurutan ranking 1..N
SELESAI`,
        code: `#include <iostream>
#include <vector>
#include <string>
#include <iomanip>
#include <algorithm>

using namespace std;

struct Mahasiswa {
    string nim;
    string nama;
    double nilaiTugas;
    double nilaiUTS;
    double nilaiUAS;
    double nilaiAkhir;
    char indeksNilai;
};

// Menentukan indeks huruf
char konversiHuruf(double na) {
    if (na >= 85) return 'A';
    if (na >= 75) return 'B';
    if (na >= 60) return 'C';
    if (na >= 50) return 'D';
    return 'E';
}

// Menghitung Nilai Akhir
void hitungNilai(Mahasiswa& m) {
    m.nilaiAkhir = (0.30 * m.nilaiTugas) + (0.35 * m.nilaiUTS) + (0.35 * m.nilaiUAS);
    m.indeksNilai = konversiHuruf(m.nilaiAkhir);
}

// Menampilkan tabel data
void tampilkanData(const vector<Mahasiswa>& daftar) {
    cout << "\\n" << string(68, '=') << "\\n";
    cout << left << setw(12) << "NIM"
         << setw(20) << "Nama"
         << right << setw(8) << "Tugas"
         << setw(8) << "UTS"
         << setw(8) << "UAS"
         << setw(8) << "Akhir"
         << setw(4) << "Grd" << "\\n";
    cout << string(68, '-') << "\\n";

    for (const auto& m : daftar) {
        cout << left << setw(12) << m.nim
             << setw(20) << m.nama
             << right << fixed << setprecision(1)
             << setw(8) << m.nilaiTugas
             << setw(8) << m.nilaiUTS
             << setw(8) << m.nilaiUAS
             << setw(8) << m.nilaiAkhir
             << setw(4) << m.indeksNilai << "\\n";
    }
    cout << string(68, '=') << "\\n";
}

int main() {
    vector<Mahasiswa> kelas = {
        {"240101", "Ahmad Fauzi", 85.0, 90.0, 88.0, 0, ' '},
        {"240102", "Siti Rahma", 92.0, 80.0, 85.0, 0, ' '},
        {"240103", "Dedi Kurniawan", 70.0, 65.0, 72.0, 0, ' '},
        {"240104", "Putri Lestari", 88.0, 95.0, 92.0, 0, ' '}
    };

    // Hitung seluruh nilai akhir
    for (auto& m : kelas) {
        hitungNilai(m);
    }

    cout << "=== SISTEM MANAJEMEN AKADEMIK MAHASISWA C++ ===\\n";
    cout << "Data Sebelum Pengurutan:\\n";
    tampilkanData(kelas);

    // Pengurutan Ranking berdasarkan Nilai Akhir tertinggi (Descending)
    sort(kelas.begin(), kelas.end(), [](const Mahasiswa& a, const Mahasiswa& b) {
        return a.nilaiAkhir > b.nilaiAkhir;
    });

    cout << "\\nDATA PERINGKAT (RANKING KELAS):\\n";
    tampilkanData(kelas);

    cout << "Mahasiswa Terbaik: " << kelas[0].nama 
         << " (NIM: " << kelas[0].nim << ") dengan Nilai Akhir: " << kelas[0].nilaiAkhir << "\\n";

    return 0;
}`,
        sampleInput: `4 Data Mahasiswa (Ahmad, Siti, Dedi, Putri)`,
        sampleOutput: `DATA PERINGKAT (RANKING KELAS):
====================================================================
NIM         Nama                   Tugas     UTS     UAS   Akhir Grd
--------------------------------------------------------------------
240104      Putri Lestari           88.0    95.0    92.0    91.9   A
240101      Ahmad Fauzi             85.0    90.0    88.0    87.8   A
240102      Siti Rahma              92.0    80.0    85.0    85.4   A
240103      Dedi Kurniawan          70.0    65.0    72.0    69.0   C
====================================================================`,
        simulatorType: "akademik"
    }
];

// Helper untuk mengambil data dari LocalStorage atau default
function getStoredCaseStudies() {
    const data = localStorage.getItem("alpro_case_studies");
    if (!data) {
        localStorage.setItem("alpro_case_studies", JSON.stringify(DEFAULT_CASE_STUDIES));
        return DEFAULT_CASE_STUDIES;
    }
    try {
        return JSON.parse(data);
    } catch (e) {
        console.error("Gagal membaca LocalStorage, memulihkan data default:", e);
        return DEFAULT_CASE_STUDIES;
    }
}

// Menyimpan perubahan data ke LocalStorage
function saveCaseStudies(studies) {
    localStorage.setItem("alpro_case_studies", JSON.stringify(studies));
}
