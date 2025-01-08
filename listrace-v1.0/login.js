document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Mencegah form dari submit default

        alert("Anda sudah Login");

        // Simulasi redirect ke halaman beranda
        window.location.href = "beranda.html";
    });
});