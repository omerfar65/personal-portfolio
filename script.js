// Yıl bilgisini otomatik yaz (footer)
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Demo iletişim formu butonu – gerçek backend yok, sadece uyarı göstereceğiz
const sendMessageBtn = document.getElementById("sendMessageBtn");
if (sendMessageBtn) {
    sendMessageBtn.addEventListener("click", () => {
        alert("Bu iletişim formu şu anda demo modunda. Backend eklediğinde burayı güncelleyebilirsin 🙂");
    });
}

// Mobil menü aç/kapat
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

// Tema değiştir (dark / light)
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    // Kullanıcı daha önce tercih ettiyse localStorage'dan oku
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        themeToggle.textContent = "🌙"; // dark mode'a geçmek için
    } else {
        themeToggle.textContent = "☀️"; // light mode'a geçmek için
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const isLight = document.body.classList.contains("light-theme");

        if (isLight) {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "light");
        } else {
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        }
    });
}

// Nav linklerine tıklandığında yumuşak kaydırma (smooth scroll)
const navLinks = document.querySelectorAll(".nav a[href^='#']");

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            window.scrollTo({
                top: targetEl.offsetTop - 70, // header yüksekliği kadar yukarıdan
                behavior: "smooth"
            });
        }
        // Mobilde menüyü geri kapat
        if (nav.classList.contains("show")) {
            nav.classList.remove("show");
        }
    });
});
