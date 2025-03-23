// Fungsi untuk menyalin teks ke clipboard
function copyToClipboard() {
    const command = document.getElementById("adbCommand").innerText;
    navigator.clipboard.writeText(command).then(() => {
        const notif = document.getElementById("notif");
        const button = document.getElementById("copyButton");
        
        notif.classList.add("show");
        button.style.backgroundColor = "#2ea043";
        button.style.transform = "scale(0.95)";
        
        setTimeout(() => {
            button.style.backgroundColor = "#1f6feb";
            button.style.transform = "scale(1)";
        }, 100);
        
        setTimeout(() => {
            notif.classList.remove("show");
        }, 2000);
    }).catch(err => {
        alert("Failed to copy command: " + err);
    });
}

// Fungsi untuk mengganti tema
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-mode");

    // Sesuaikan warna tombol toggle theme
    const button = document.querySelector(".theme-toggle");
    if (body.classList.contains("light-mode")) {
        button.style.backgroundColor = "black";
        button.style.color = "white";
    } else {
        button.style.backgroundColor = "white";
        button.style.color = "black";
    }
}

// Fungsi untuk memeriksa tema saat halaman dimuat
function checkThemeOnLoad() {
    const body = document.body;
    const button = document.querySelector(".theme-toggle");

    // Jika tema light mode aktif, sesuaikan warna tombol
    if (body.classList.contains("light-mode")) {
        button.style.backgroundColor = "black";
        button.style.color = "white";
    } else {
        button.style.backgroundColor = "white";
        button.style.color = "black";
    }
}

// Event listener untuk tombol copy
document.getElementById("copyButton").addEventListener("click", copyToClipboard);

// Event listener untuk tombol toggle theme
document.querySelector(".theme-toggle").addEventListener("click", toggleTheme);

// Event listener untuk tombol download
document.querySelector(".download-button").addEventListener("click", () => {
    window.open("https://developer.android.com/tools/releases/platform-tools", "_blank");
});

// Panggil fungsi saat halaman dimuat
window.onload = checkThemeOnLoad;