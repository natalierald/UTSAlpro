/**
 * app.js - Logika Interaktif Blog Studi Kasus Algoritma & Pemrograman C++
 * UTS Algoritma dan Pemrograman
 */

// State Aplikasi
let allCases = [];
let activeCategory = "Semua";
let activeDifficulty = "Semua";
let searchQuery = "";
let onlyBookmarks = false;
let currentActiveCase = null;

// Inisialisasi Aplikasi Saat Halaman Selesai Dimuat
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    loadProfileData();
    loadCases();
    setupEventListeners();
    updateStats();
});

// ==========================================
// 1. PENGELOLAAN DATA & INITIAL LOAD
// ==========================================
function loadCases() {
    allCases = getStoredCaseStudies();
    renderCategoryPills();
    renderCaseCards();
}

function getBookmarks() {
    try {
        return JSON.parse(localStorage.getItem("alpro_bookmarks")) || [];
    } catch {
        return [];
    }
}

function toggleBookmark(id, event) {
    if (event) event.stopPropagation();
    let bookmarks = getBookmarks();
    if (bookmarks.includes(id)) {
        bookmarks = bookmarks.filter(bId => bId !== id);
    } else {
        bookmarks.push(id);
    }
    localStorage.setItem("alpro_bookmarks", JSON.stringify(bookmarks));
    renderCaseCards();
    updateStats();
}

function isBookmarked(id) {
    return getBookmarks().includes(id);
}

// ==========================================
// 2. RENDERING KOMPONEN UI
// ==========================================
function renderCategoryPills() {
    const container = document.getElementById("categoryPillsContainer");
    if (!container) return;

    // Ambil kategori unik dari allCases
    const categories = ["Semua", ...new Set(allCases.map(c => c.category))];

    container.innerHTML = categories.map(cat => `
        <button class="filter-pill ${cat === activeCategory ? 'active' : ''}" onclick="selectCategory('${cat}')">
            ${cat}
        </button>
    `).join("");
}

function selectCategory(cat) {
    activeCategory = cat;
    renderCategoryPills();
    renderCaseCards();
}

function renderCaseCards() {
    const container = document.getElementById("casesGridContainer");
    const emptyState = document.getElementById("emptyStateContainer");
    if (!container) return;

    const bookmarks = getBookmarks();

    // Filter data
    const filtered = allCases.filter(item => {
        const matchCategory = activeCategory === "Semua" || item.category === activeCategory;
        const matchDifficulty = activeDifficulty === "Semua" || item.difficulty === activeDifficulty;
        const matchBookmark = !onlyBookmarks || bookmarks.includes(item.id);
        const matchSearch = !searchQuery || 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchCategory && matchDifficulty && matchBookmark && matchSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = "";
        if (emptyState) emptyState.classList.remove("d-none");
        return;
    }

    if (emptyState) emptyState.classList.add("d-none");

    container.innerHTML = filtered.map(item => {
        const bookmarked = bookmarks.includes(item.id);
        let diffClass = "badge-diff-mudah";
        if (item.difficulty === "Sedang") diffClass = "badge-diff-sedang";
        if (item.difficulty === "Mahir") diffClass = "badge-diff-mahir";

        const tagsHtml = item.tags ? item.tags.slice(0, 3).map(t => `<span class="tag-badge">#${t}</span>`).join("") : "";

        return `
        <div class="col-md-6 col-lg-4 d-flex">
            <div class="case-card w-100" onclick="openCaseModal('${item.id}')">
                <div class="case-card-header">
                    <div class="d-flex align-items-center gap-2 flex-wrap">
                        <span class="badge ${diffClass} rounded-pill px-3 py-1 fw-semibold">
                            <i class="bi bi-speedometer2 me-1"></i>${item.difficulty}
                        </span>
                        <span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill px-2 py-1 small">
                            ${item.category}
                        </span>
                    </div>
                    <button class="btn-bookmark ${bookmarked ? 'bookmarked' : ''}" 
                            title="${bookmarked ? 'Hapus dari Favorit' : 'Simpan ke Favorit'}"
                            onclick="toggleBookmark('${item.id}', event)">
                        <i class="bi ${bookmarked ? 'bi-bookmark-star-fill text-warning' : 'bi-bookmark'}"></i>
                    </button>
                </div>
                
                <div class="case-card-body">
                    <h5 class="case-card-title">${item.title}</h5>
                    <p class="case-card-summary">${item.summary}</p>
                    <div class="case-tags-container">
                        ${tagsHtml}
                    </div>
                </div>

                <div class="case-card-footer">
                    <div class="complexity-pill" title="Kompleksitas Waktu">
                        <i class="bi bi-clock-history"></i> ${item.complexity ? item.complexity.time : 'O(1)'}
                    </div>
                    <button class="btn btn-sm btn-outline-primary rounded-pill px-3" onclick="openCaseModal('${item.id}')">
                        Buka Studi Kasus <i class="bi bi-arrow-right ms-1"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join("");
}

function updateStats() {
    const totalCountEl = document.getElementById("statTotalCases");
    const categoryCountEl = document.getElementById("statCategories");
    const bookmarkCountEl = document.getElementById("statBookmarks");

    if (totalCountEl) totalCountEl.textContent = allCases.length;
    if (categoryCountEl) {
        const uniqueCategories = new Set(allCases.map(c => c.category));
        categoryCountEl.textContent = uniqueCategories.size;
    }
    if (bookmarkCountEl) {
        bookmarkCountEl.textContent = getBookmarks().length;
    }
}

// ==========================================
// 3. DETAIL MODAL & TABS LOGIC
// ==========================================
function openCaseModal(id) {
    const item = allCases.find(c => c.id === id);
    if (!item) return;

    currentActiveCase = item;

    document.getElementById("modalCaseTitle").textContent = item.title;
    document.getElementById("modalCaseCategory").textContent = item.category;
    document.getElementById("modalCaseDifficulty").textContent = item.difficulty;
    document.getElementById("modalCaseComplexityTime").textContent = item.complexity?.time || "O(1)";
    document.getElementById("modalCaseComplexitySpace").textContent = item.complexity?.space || "O(1)";
    document.getElementById("modalCaseProblem").innerHTML = item.problem.replace(/\\n/g, "<br>");
    
    // Pseudocode
    document.getElementById("modalCasePseudocode").textContent = item.pseudocode || "// Belum ada pseudocode";

    // C++ Code
    const codeEl = document.getElementById("modalCaseCode");
    codeEl.textContent = item.code;
    
    // Sample IO
    document.getElementById("modalCaseSampleInput").textContent = item.sampleInput || "-";
    document.getElementById("modalCaseSampleOutput").textContent = item.sampleOutput || "-";

    // Setup interactive runner
    setupCaseSimulator(item);

    // Re-highlight with Prism.js
    if (window.Prism) {
        Prism.highlightAll();
    }

    // Reset to tab 1
    const firstTabTrigger = document.querySelector('#caseModalTabs button[data-bs-target="#tab-problem"]');
    if (firstTabTrigger) {
        bootstrap.Tab.getInstance(firstTabTrigger)?.show() || new bootstrap.Tab(firstTabTrigger).show();
    }

    // Show modal
    const modalEl = document.getElementById("caseDetailModal");
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
}

// Copy Code Helper
function copyCaseCode() {
    if (!currentActiveCase) return;
    navigator.clipboard.writeText(currentActiveCase.code).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Tersalin!',
            text: 'Source code C++ berhasil disalin ke clipboard.',
            timer: 1500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
        });
    }).catch(err => {
        console.error("Gagal menyalin:", err);
    });
}

// Download .cpp File
function downloadCaseCode() {
    if (!currentActiveCase) return;
    const filename = `${currentActiveCase.id}-${currentActiveCase.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.cpp`;
    const blob = new Blob([currentActiveCase.code], { type: "text/x-c++src;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

// ==========================================
// 4. INTERACTIVE TERMINAL SIMULATOR
// ==========================================
function setupCaseSimulator(item) {
    const formContainer = document.getElementById("simulatorInputForm");
    const terminalOutput = document.getElementById("simulatorTerminalOutput");
    if (!formContainer || !terminalOutput) return;

    terminalOutput.textContent = `[GCC / g++ 13.2.0 - Target: x86_64-w64-mingw32]\nKompilasi sukses: ${item.id}.cpp -> ${item.id}.exe\nMenunggu eksekusi input pengguna...\n`;

    let formHtml = "";

    switch (item.simulatorType) {
        case "kasir":
            formHtml = `
                <div class="row g-2">
                    <div class="col-md-4">
                        <label class="form-label small text-muted">Nama Pelanggan</label>
                        <input type="text" id="sim_nama" class="form-control form-control-sm" value="Budi Santoso">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label small text-muted">Total Belanja (Rp)</label>
                        <input type="number" id="sim_belanja" class="form-control form-control-sm" value="600000">
                    </div>
                    <div class="col-md-2">
                        <label class="form-label small text-muted">Member VIP?</label>
                        <select id="sim_member" class="form-select form-select-sm">
                            <option value="Y">Ya (Y)</option>
                            <option value="T">Tidak (T)</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label class="form-label small text-muted">Uang Bayar (Rp)</label>
                        <input type="number" id="sim_bayar" class="form-control form-control-sm" value="600000">
                    </div>
                </div>
            `;
            break;

        case "diamond":
            formHtml = `
                <div class="row g-2 align-items-end">
                    <div class="col-md-6">
                        <label class="form-label small text-muted">Setengah Tinggi Berlian (n) [1 - 15]</label>
                        <input type="number" id="sim_diamond_n" class="form-control form-control-sm" value="5" min="1" max="15">
                    </div>
                </div>
            `;
            break;

        case "statistik":
            formHtml = `
                <div class="row g-2">
                    <div class="col-12">
                        <label class="form-label small text-muted">Daftar Nilai Mahasiswa (Pisahkan dengan koma atau spasi)</label>
                        <input type="text" id="sim_stat_nilai" class="form-control form-control-sm" value="85, 90, 65, 78, 92, 55, 88">
                    </div>
                </div>
            `;
            break;

        case "matriks":
            formHtml = `
                <div class="row g-2">
                    <div class="col-md-6">
                        <label class="form-label small text-muted">Matriks A (2x2) [Format: a11 a12; a21 a22]</label>
                        <input type="text" id="sim_mat_a" class="form-control form-control-sm" value="1 2; 3 4">
                    </div>
                    <div class="col-md-6">
                        <label class="form-label small text-muted">Matriks B (2x2) [Format: b11 b12; b21 b22]</label>
                        <input type="text" id="sim_mat_b" class="form-control form-control-sm" value="5 6; 7 8">
                    </div>
                </div>
            `;
            break;

        case "sorting":
            formHtml = `
                <div class="row g-2">
                    <div class="col-md-9">
                        <label class="form-label small text-muted">Elemen Array (Pisahkan dengan koma atau spasi)</label>
                        <input type="text" id="sim_sort_arr" class="form-control form-control-sm" value="64, 34, 25, 12, 22, 11, 90, 45, 78, 3">
                    </div>
                    <div class="col-md-3">
                        <button type="button" class="btn btn-outline-secondary btn-sm w-100 mt-4" onclick="randomizeSortData()">
                            <i class="bi bi-dice-5 me-1"></i>Acak Angka
                        </button>
                    </div>
                </div>
            `;
            break;

        case "search":
            formHtml = `
                <div class="row g-2">
                    <div class="col-md-8">
                        <label class="form-label small text-muted">Array Terurut (Read-only)</label>
                        <input type="text" id="sim_search_arr" class="form-control form-control-sm" value="4, 9, 15, 23, 38, 42, 57, 68, 71, 84, 95" readonly>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label small text-muted">Nilai Target yang Dicari</label>
                        <input type="number" id="sim_search_target" class="form-control form-control-sm" value="42">
                    </div>
                </div>
            `;
            break;

        case "hanoi":
            formHtml = `
                <div class="row g-2">
                    <div class="col-md-6">
                        <label class="form-label small text-muted">Jumlah Cakram Menara Hanoi (1 - 7)</label>
                        <input type="number" id="sim_hanoi_n" class="form-control form-control-sm" value="3" min="1" max="7">
                    </div>
                </div>
            `;
            break;

        case "akademik":
            formHtml = `
                <div class="alert alert-info py-2 small mb-2">
                    <i class="bi bi-info-circle me-1"></i> Data 4 Mahasiswa siap diuji untuk kalkulasi nilai akhir (30% Tugas + 35% UTS + 35% UAS) dan ranking kelas otomatis.
                </div>
            `;
            break;

        default:
            formHtml = `<p class="text-muted small mb-0">Klik tombol "Jalankan Simulasi" untuk mengeksekusi program.</p>`;
            break;
    }

    formContainer.innerHTML = formHtml;
}

function randomizeSortData() {
    const input = document.getElementById("sim_sort_arr");
    if (!input) return;
    const randomArr = Array.from({ length: 8 }, () => Math.floor(Math.random() * 99) + 1);
    input.value = randomArr.join(", ");
}

function runSimulation() {
    if (!currentActiveCase) return;
    const terminalOutput = document.getElementById("simulatorTerminalOutput");
    if (!terminalOutput) return;

    let outputText = `$ ./${currentActiveCase.id}.exe\n\n`;
    const type = currentActiveCase.simulatorType;

    try {
        if (type === "kasir") {
            const nama = document.getElementById("sim_nama")?.value || "Pelanggan";
            const belanja = parseFloat(document.getElementById("sim_belanja")?.value) || 0;
            const isMember = document.getElementById("sim_member")?.value === "Y";
            const bayar = parseFloat(document.getElementById("sim_bayar")?.value) || 0;

            let persentaseDiskon = 0;
            if (belanja >= 500000) persentaseDiskon = 0.15;
            else if (belanja >= 250000) persentaseDiskon = 0.10;
            else if (belanja >= 100000) persentaseDiskon = 0.05;

            const diskon = belanja * persentaseDiskon;
            const setelahDiskon = belanja - diskon;
            const diskonMember = isMember ? setelahDiskon * 0.05 : 0;
            const dpp = setelahDiskon - diskonMember;
            const ppn = dpp * 0.11;
            const totalBayar = dpp + ppn;
            const kembalian = bayar - totalBayar;

            outputText += "========================================\n";
            outputText += "        STRUK KASIR ALPRO MART          \n";
            outputText += "========================================\n";
            outputText += `Nama Pelanggan       : ${nama}\n`;
            outputText += `Total Belanja Awal   : Rp ${belanja.toLocaleString('id-ID', { minimumFractionDigits: 2 })}\n`;
            outputText += `Diskon Belanja (${persentaseDiskon * 100}%) : Rp ${diskon.toLocaleString('id-ID', { minimumFractionDigits: 2 })}\n`;
            outputText += `Diskon Member (5%)   : Rp ${diskonMember.toLocaleString('id-ID', { minimumFractionDigits: 2 })}\n`;
            outputText += `Dasar Pengenaan Pajak: Rp ${dpp.toLocaleString('id-ID', { minimumFractionDigits: 2 })}\n`;
            outputText += `PPN 11%              : Rp ${ppn.toLocaleString('id-ID', { minimumFractionDigits: 2 })}\n`;
            outputText += "----------------------------------------\n";
            outputText += `TOTAL HARUS DIBAYAR  : Rp ${totalBayar.toLocaleString('id-ID', { minimumFractionDigits: 2 })}\n`;
            outputText += `Uang Pembayaran      : Rp ${bayar.toLocaleString('id-ID', { minimumFractionDigits: 2 })}\n`;
            outputText += "----------------------------------------\n";
            if (kembalian >= 0) {
                outputText += `Uang Kembalian       : Rp ${kembalian.toLocaleString('id-ID', { minimumFractionDigits: 2 })}\n`;
                outputText += `\n[STATUS: TRANSAKSI BERHASIL - Terima kasih telah berbelanja, ${nama}!]\n`;
            } else {
                outputText += `[PERINGATAN: Uang pembayaran KURANG sebesar Rp ${Math.abs(kembalian).toLocaleString('id-ID', { minimumFractionDigits: 2 })}]\n`;
            }

        } else if (type === "diamond") {
            const n = parseInt(document.getElementById("sim_diamond_n")?.value) || 5;
            if (n < 1 || n > 20) {
                outputText += "Error: Ukuran n harus antara 1 sampai 20.\n";
            } else {
                outputText += `=== POLA HOLLOW DIAMOND (n = ${n}, total baris = ${2 * n - 1}) ===\n\n`;
                // Top half
                for (let i = 1; i <= n; i++) {
                    let line = " ".repeat(n - i);
                    for (let j = 1; j <= 2 * i - 1; j++) {
                        if (j === 1 || j === 2 * i - 1) line += "*";
                        else line += " ";
                    }
                    outputText += line + "\n";
                }
                // Bottom half
                for (let i = n - 1; i >= 1; i--) {
                    let line = " ".repeat(n - i);
                    for (let j = 1; j <= 2 * i - 1; j++) {
                        if (j === 1 || j === 2 * i - 1) line += "*";
                        else line += " ";
                    }
                    outputText += line + "\n";
                }
                outputText += "\n[STATUS: Pola geometris berhasil dirender sempurna]\n";
            }

        } else if (type === "statistik") {
            const raw = document.getElementById("sim_stat_nilai")?.value || "";
            const numbers = raw.split(/[\s,]+/).map(x => parseFloat(x)).filter(x => !isNaN(x));

            if (numbers.length === 0) {
                outputText += "Error: Masukkan sekurang-kurangnya satu angka nilai!\n";
            } else {
                const total = numbers.reduce((acc, curr) => acc + curr, 0);
                const mean = total / numbers.length;
                const maxVal = Math.max(...numbers);
                const minVal = Math.min(...numbers);
                const lulus = numbers.filter(x => x >= 70).length;
                const persenLulus = (lulus / numbers.length) * 100;

                let stdDev = 0;
                if (numbers.length > 1) {
                    const variance = numbers.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / (numbers.length - 1);
                    stdDev = Math.sqrt(variance);
                }

                outputText += "----------- HASIL ANALISIS STATISTIK NILAI -----------\n";
                outputText += `Data Nilai          : [ ${numbers.join(", ")} ]\n`;
                outputText += `Jumlah Mahasiswa (N): ${numbers.length} orang\n`;
                outputText += `Nilai Rata-rata     : ${mean.toFixed(2)}\n`;
                outputText += `Nilai Tertinggi     : ${maxVal.toFixed(2)}\n`;
                outputText += `Nilai Terendah      : ${minVal.toFixed(2)}\n`;
                outputText += `Standar Deviasi (s) : ${stdDev.toFixed(2)}\n`;
                outputText += `Tingkat Kelulusan   : ${persenLulus.toFixed(2)}% (${lulus}/${numbers.length} mahasiswa >= 70)\n`;
                outputText += "-----------------------------------------------------\n";
            }

        } else if (type === "matriks") {
            const rawA = document.getElementById("sim_mat_a")?.value || "1 2; 3 4";
            const rawB = document.getElementById("sim_mat_b")?.value || "5 6; 7 8";

            const parseMatrix = (str) => {
                return str.split(";").map(row => 
                    row.trim().split(/[\s,]+/).map(v => parseInt(v)).filter(v => !isNaN(v))
                ).filter(r => r.length > 0);
            };

            const A = parseMatrix(rawA);
            const B = parseMatrix(rawB);

            const r1 = A.length, c1 = A[0]?.length || 0;
            const r2 = B.length, c2 = B[0]?.length || 0;

            if (c1 !== r2) {
                outputText += `[GAGAL] Matriks tidak dapat dikalikan! Kolom A (${c1}) != Baris B (${r2})\n`;
            } else {
                // Multiply A x B
                const C = Array.from({ length: r1 }, () => Array(c2).fill(0));
                for (let i = 0; i < r1; i++) {
                    for (let j = 0; j < c2; j++) {
                        for (let k = 0; k < c1; k++) {
                            C[i][j] += A[i][k] * B[k][j];
                        }
                    }
                }

                outputText += `Matriks A (${r1}x${c1}):\n`;
                A.forEach(row => outputText += "  " + row.map(v => v.toString().padStart(5)).join(" ") + "\n");

                outputText += `\nMatriks B (${r2}x${c2}):\n`;
                B.forEach(row => outputText += "  " + row.map(v => v.toString().padStart(5)).join(" ") + "\n");

                outputText += `\nHasil Perkalian Matriks C = A x B (${r1}x${c2}):\n`;
                C.forEach(row => outputText += "  " + row.map(v => v.toString().padStart(5)).join(" ") + "\n");

                outputText += `\nTranspos Matriks C (C^T berordo ${c2}x${r1}):\n`;
                for (let j = 0; j < c2; j++) {
                    let line = "  ";
                    for (let i = 0; i < r1; i++) {
                        line += C[i][j].toString().padStart(5) + " ";
                    }
                    outputText += line + "\n";
                }
            }

        } else if (type === "sorting") {
            const raw = document.getElementById("sim_sort_arr")?.value || "";
            const arr = raw.split(/[\s,]+/).map(x => parseInt(x)).filter(x => !isNaN(x));

            if (arr.length === 0) {
                outputText += "Error: Masukkan sekurang-kurangnya 2 angka untuk diurutkan!\n";
            } else {
                // Bubble sort simulation
                let arrBubble = [...arr];
                let bComps = 0, bSwaps = 0;
                for (let i = 0; i < arrBubble.length - 1; i++) {
                    let swapped = false;
                    for (let j = 0; j < arrBubble.length - i - 1; j++) {
                        bComps++;
                        if (arrBubble[j] > arrBubble[j + 1]) {
                            let temp = arrBubble[j];
                            arrBubble[j] = arrBubble[j + 1];
                            arrBubble[j + 1] = temp;
                            bSwaps++;
                            swapped = true;
                        }
                    }
                    if (!swapped) break;
                }

                // Quick sort simulation
                let arrQuick = [...arr];
                let qComps = 0, qSwaps = 0;
                function qSort(items, left, right) {
                    if (left < right) {
                        let pivot = items[right];
                        let i = left - 1;
                        for (let j = left; j < right; j++) {
                            qComps++;
                            if (items[j] < pivot) {
                                i++;
                                let t = items[i]; items[i] = items[j]; items[j] = t;
                                qSwaps++;
                            }
                        }
                        let t = items[i + 1]; items[i + 1] = items[right]; items[right] = t;
                        qSwaps++;
                        let pi = i + 1;

                        qSort(items, left, pi - 1);
                        qSort(items, pi + 1, right);
                    }
                }
                qSort(arrQuick, 0, arrQuick.length - 1);

                outputText += `Data Awal (${arr.length} elemen): [ ${arr.join(", ")} ]\n\n`;
                outputText += `Data Terurut: [ ${arrBubble.join(", ")} ]\n\n`;
                outputText += `================ METRIK PERFORMA ================\n`;
                outputText += `[Bubble Sort]\n`;
                outputText += `  - Jumlah Perbandingan : ${bComps} kali\n`;
                outputText += `  - Jumlah Pertukaran   : ${bSwaps} kali\n`;
                outputText += `[Quick Sort (Divide and Conquer)]\n`;
                outputText += `  - Jumlah Perbandingan : ${qComps} kali\n`;
                outputText += `  - Jumlah Pertukaran   : ${qSwaps} kali\n`;
                outputText += `=================================================\n`;
            }

        } else if (type === "search") {
            const arr = [4, 9, 15, 23, 38, 42, 57, 68, 71, 84, 95];
            const target = parseInt(document.getElementById("sim_search_target")?.value);

            if (isNaN(target)) {
                outputText += "Error: Masukkan nilai target berupa angka!\n";
            } else {
                outputText += `Target Pencarian: ${target}\n`;
                outputText += `Array: [ ${arr.map((val, idx) => `[${idx}]:${val}`).join("  ")} ]\n\n`;
                outputText += `Step | Low | High | Mid | arr[Mid] | Evaluasi Logika\n`;
                outputText += `----------------------------------------------------\n`;

                let low = 0;
                let high = arr.length - 1;
                let step = 1;
                let foundIndex = -1;

                while (low <= high) {
                    let mid = Math.floor(low + (high - low) / 2);
                    let line = `  ${step++}  |  ${low}  |  ${high}   |  ${mid}  |    ${arr[mid]}    | `;

                    if (arr[mid] === target) {
                        line += `COCOK! Target Ditemukan pada indeks [${mid}].`;
                        outputText += line + "\n";
                        foundIndex = mid;
                        break;
                    } else if (arr[mid] < target) {
                        line += `Target lebih besar -> Geser Low = ${mid + 1}`;
                        low = mid + 1;
                    } else {
                        line += `Target lebih kecil -> Geser High = ${mid - 1}`;
                        high = mid - 1;
                    }
                    outputText += line + "\n";
                }

                outputText += `----------------------------------------------------\n`;
                if (foundIndex !== -1) {
                    outputText += `[HASIL: SUKSES] Nilai ${target} BERHASIL DITEMUKAN pada indeks array [${foundIndex}] dalam ${step - 1} langkah.\n`;
                } else {
                    outputText += `[HASIL: TIDAK DITEMUKAN] Nilai ${target} tidak berada di dalam array.\n`;
                }
            }

        } else if (type === "hanoi") {
            const n = parseInt(document.getElementById("sim_hanoi_n")?.value) || 3;
            if (n < 1 || n > 7) {
                outputText += "Error: Untuk simulasi web, batas cakram 1 hingga 7.\n";
            } else {
                outputText += `=== SIMULASI MENARA HANOI (${n} Cakram) ===\n`;
                outputText += `Tiang Asal = A, Tiang Tujuan = C, Tiang Bantu = B\n\n`;
                let step = 0;
                function solveHanoi(count, from, to, aux) {
                    if (count === 1) {
                        step++;
                        outputText += `Langkah ${step.toString().padStart(2, ' ')}: Pindahkan cakram 1 dari tiang ${from} ke tiang ${to}\n`;
                        return;
                    }
                    solveHanoi(count - 1, from, aux, to);
                    step++;
                    outputText += `Langkah ${step.toString().padStart(2, ' ')}: Pindahkan cakram ${count} dari tiang ${from} ke tiang ${to}\n`;
                    solveHanoi(count - 1, aux, to, from);
                }
                solveHanoi(n, 'A', 'C', 'B');
                outputText += `\nTotal Langkah Selesai: ${step} langkah (sesuai rumus 2^n - 1 = ${Math.pow(2, n) - 1})\n`;
            }

        } else if (type === "akademik") {
            const dataMhs = [
                { nim: "240101", nama: "Ahmad Fauzi", tugas: 85.0, uts: 90.0, uas: 88.0 },
                { nim: "240102", nama: "Siti Rahma", tugas: 92.0, uts: 80.0, uas: 85.0 },
                { nim: "240103", nama: "Dedi Kurniawan", tugas: 70.0, uts: 65.0, uas: 72.0 },
                { nim: "240104", nama: "Putri Lestari", tugas: 88.0, uts: 95.0, uas: 92.0 }
            ];

            const getHuruf = (na) => {
                if (na >= 85) return 'A';
                if (na >= 75) return 'B';
                if (na >= 60) return 'C';
                if (na >= 50) return 'D';
                return 'E';
            };

            const processed = dataMhs.map(m => {
                const akhir = (0.30 * m.tugas) + (0.35 * m.uts) + (0.35 * m.uas);
                return { ...m, akhir, huruf: getHuruf(akhir) };
            });

            // Urutkan ranking berdasarkan Nilai Akhir
            processed.sort((a, b) => b.akhir - a.akhir);

            outputText += "====================================================================\n";
            outputText += "Rank  NIM         Nama                   Tugas   UTS   UAS   Akhir  Grd\n";
            outputText += "====================================================================\n";

            processed.forEach((m, idx) => {
                const rankStr = `#${idx + 1}`.padEnd(6);
                const nimStr = m.nim.padEnd(12);
                const namaStr = m.nama.padEnd(23);
                const tStr = m.tugas.toFixed(1).padStart(6);
                const uStr = m.uts.toFixed(1).padStart(6);
                const uaStr = m.uas.toFixed(1).padStart(6);
                const akStr = m.akhir.toFixed(1).padStart(7);
                const grStr = m.huruf.padStart(4);
                outputText += `${rankStr}${nimStr}${namaStr}${tStr}${uStr}${uaStr}${akStr}   ${grStr}\n`;
            });
            outputText += "====================================================================\n";
            outputText += `Mahasiswa Terbaik (Juara 1): ${processed[0].nama} dengan Nilai Akhir ${processed[0].akhir.toFixed(2)} [Grade ${processed[0].huruf}]\n`;
        }

        outputText += "\nProcess finished with exit code 0.\n";
        terminalOutput.textContent = outputText;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;

    } catch (e) {
        terminalOutput.textContent += `\n[RUNTIME EXCEPTION]: ${e.message}\n`;
    }
}

function clearSimulator() {
    if (!currentActiveCase) return;
    setupCaseSimulator(currentActiveCase);
}

// ==========================================
// 5. TAMBAH STUDI KASUS BARU (CRUD)
// ==========================================
function saveNewCaseStudy(e) {
    e.preventDefault();

    const title = document.getElementById("newCaseTitle").value.trim();
    const category = document.getElementById("newCaseCategory").value.trim();
    const difficulty = document.getElementById("newCaseDifficulty").value;
    const timeComp = document.getElementById("newCaseTimeComp").value.trim() || "O(1)";
    const spaceComp = document.getElementById("newCaseSpaceComp").value.trim() || "O(1)";
    const tagsRaw = document.getElementById("newCaseTags").value.trim();
    const summary = document.getElementById("newCaseSummary").value.trim();
    const problem = document.getElementById("newCaseProblem").value.trim();
    const pseudocode = document.getElementById("newCasePseudocode").value.trim();
    const code = document.getElementById("newCaseCode").value.trim();
    const sampleInput = document.getElementById("newCaseInput").value.trim();
    const sampleOutput = document.getElementById("newCaseOutput").value.trim();

    if (!title || !category || !code) {
        Swal.fire({
            icon: 'warning',
            title: 'Data Belum Lengkap',
            text: 'Harap isi setidaknya Judul, Kategori, dan Source Code C++!'
        });
        return;
    }

    const tags = tagsRaw.split(/[\s,]+/).map(t => t.replace('#', '').trim()).filter(Boolean);

    const newCase = {
        id: "custom-" + Date.now(),
        title,
        category,
        difficulty,
        author: "Mahasiswa",
        date: new Date().toISOString().split("T")[0],
        readTime: "5 menit",
        tags: tags.length > 0 ? tags : ["c++", "algoritma"],
        complexity: {
            time: timeComp,
            space: spaceComp
        },
        summary,
        problem,
        pseudocode,
        code,
        sampleInput,
        sampleOutput,
        simulatorType: "custom"
    };

    allCases.unshift(newCase);
    saveCaseStudies(allCases);

    // Reset Form & Tutup Modal
    document.getElementById("addCaseForm").reset();
    const modalEl = document.getElementById("addCaseModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    // Re-render
    renderCategoryPills();
    renderCaseCards();
    updateStats();

    Swal.fire({
        icon: 'success',
        title: 'Berhasil Ditambahkan!',
        text: `Studi kasus "${title}" berhasil disimpan ke blog.`,
        timer: 2000,
        showConfirmButton: false
    });
}

function resetToDefaultData() {
    Swal.fire({
        title: 'Reset ke Data Default?',
        text: 'Semua studi kasus buatan Anda akan dihapus dan dikembalikan ke materi standar UTS Alpro.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        cancelButtonColor: '#6b7280',
        confirmButtonText: 'Ya, Reset Data',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("alpro_case_studies");
            loadCases();
            updateStats();
            Swal.fire('Data Direset!', 'Koleksi studi kasus telah kembali ke konfigurasi awal.', 'success');
        }
    });
}

// Export Data ke JSON
function exportDataJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allCases, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `UTS_Alpro_Studi_Kasus_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// ==========================================
// 6. PROFIL MAHASISWA & PERSISTENCE
// ==========================================
function loadProfileData() {
    const profile = JSON.parse(localStorage.getItem("alpro_student_profile")) || {
        nama: "Arya Pratama",
        nim: "24101152630001",
        kelas: "IF-1 / Teknik Informatika",
        matkul: "Algoritma & Pemrograman (UTS)",
        dosen: "Bpk. Dosen Alpro, M.Kom"
    };

    document.querySelectorAll(".profile-val-nama").forEach(el => el.textContent = profile.nama);
    document.querySelectorAll(".profile-val-nim").forEach(el => el.textContent = profile.nim);
    document.querySelectorAll(".profile-val-kelas").forEach(el => el.textContent = profile.kelas);
    document.querySelectorAll(".profile-val-matkul").forEach(el => el.textContent = profile.matkul);
    document.querySelectorAll(".profile-val-dosen").forEach(el => el.textContent = profile.dosen);
}

function openEditProfileModal() {
    const profile = JSON.parse(localStorage.getItem("alpro_student_profile")) || {
        nama: "Arya Pratama",
        nim: "24101152630001",
        kelas: "IF-1 / Teknik Informatika",
        matkul: "Algoritma & Pemrograman (UTS)",
        dosen: "Bpk. Dosen Alpro, M.Kom"
    };

    document.getElementById("editProfNama").value = profile.nama;
    document.getElementById("editProfNim").value = profile.nim;
    document.getElementById("editProfKelas").value = profile.kelas;
    document.getElementById("editProfMatkul").value = profile.matkul;
    document.getElementById("editProfDosen").value = profile.dosen;

    const modal = new bootstrap.Modal(document.getElementById("editProfileModal"));
    modal.show();
}

function saveProfileData(e) {
    e.preventDefault();
    const profile = {
        nama: document.getElementById("editProfNama").value.trim(),
        nim: document.getElementById("editProfNim").value.trim(),
        kelas: document.getElementById("editProfKelas").value.trim(),
        matkul: document.getElementById("editProfMatkul").value.trim(),
        dosen: document.getElementById("editProfDosen").value.trim()
    };

    localStorage.setItem("alpro_student_profile", JSON.stringify(profile));
    loadProfileData();

    const modalEl = document.getElementById("editProfileModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    Swal.fire({
        icon: 'success',
        title: 'Profil Diperbarui',
        text: 'Informasi identitas UTS Alpro Anda berhasil disimpan.',
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
}

// ==========================================
// 7. THEME & EVENT LISTENERS
// ==========================================
function initTheme() {
    const savedTheme = localStorage.getItem("alpro_theme") || "dark";
    setTheme(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-bs-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("alpro_theme", theme);
    const themeIcon = document.getElementById("themeToggleIcon");
    if (themeIcon) {
        if (theme === "dark") {
            themeIcon.className = "bi bi-sun-fill text-warning";
        } else {
            themeIcon.className = "bi bi-moon-stars-fill text-primary";
        }
    }
}

function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            renderCaseCards();
        });
    }

    // Difficulty filter
    const diffSelect = document.getElementById("difficultySelect");
    if (diffSelect) {
        diffSelect.addEventListener("change", (e) => {
            activeDifficulty = e.target.value;
            renderCaseCards();
        });
    }

    // Bookmark toggle button
    const bookmarkFilterBtn = document.getElementById("btnFilterBookmarks");
    if (bookmarkFilterBtn) {
        bookmarkFilterBtn.addEventListener("click", () => {
            onlyBookmarks = !onlyBookmarks;
            if (onlyBookmarks) {
                bookmarkFilterBtn.classList.remove("btn-outline-warning");
                bookmarkFilterBtn.classList.add("btn-warning");
            } else {
                bookmarkFilterBtn.classList.remove("btn-warning");
                bookmarkFilterBtn.classList.add("btn-outline-warning");
            }
            renderCaseCards();
        });
    }

    // Scroll to Top
    const btnScrollTop = document.getElementById("btnScrollTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnScrollTop?.classList.remove("d-none");
        } else {
            btnScrollTop?.classList.add("d-none");
        }
    });

    btnScrollTop?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
