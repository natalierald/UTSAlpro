/**
 * data.js - Koleksi Data Studi Kasus Algoritma & Pemrograman C++
 * UTS Algoritma dan Pemrograman
 */

// Data awal dimulai dari 0 sesuai permintaan pengguna
const DEFAULT_CASE_STUDIES = [];

// Helper untuk mengambil data dari LocalStorage atau default kosong
function getStoredCaseStudies() {
    // Flag reset untuk memastikan browser beralih ke state 0
    const isResetDone = localStorage.getItem("alpro_reset_to_zero");
    if (!isResetDone) {
        localStorage.setItem("alpro_case_studies", JSON.stringify([]));
        localStorage.setItem("alpro_reset_to_zero", "true");
        return [];
    }

    const data = localStorage.getItem("alpro_case_studies");
    if (!data) {
        localStorage.setItem("alpro_case_studies", JSON.stringify([]));
        return [];
    }

    try {
        return JSON.parse(data);
    } catch (e) {
        console.error("Gagal membaca LocalStorage:", e);
        return [];
    }
}

// Menyimpan perubahan data ke LocalStorage
function saveCaseStudies(studies) {
    localStorage.setItem("alpro_case_studies", JSON.stringify(studies));
}
