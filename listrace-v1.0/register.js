document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Mencegah form dari submit default

        // Ambil data email dan password yang dimasukkan pengguna
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simpan data ke localStorage (opsional, untuk simulasi login nanti)
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Selamat, Anda sudah mendaftar");

        // Redirect ke halaman login
        window.location.href = "login.html";
    });
});