// HALAMAN LOGIN

document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  if (togglePassword) {
    togglePassword.addEventListener("click", function () {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      this.innerHTML =
        type === "password"
          ? '<i class="fas fa-eye"></i>'
          : '<i class="fas fa-eye-slash"></i>';
    });
  }

  // FORM LOGIN

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simulasi login (ganti dengan API call di production)
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Validasi sederhana
      if (!email || !password) {
        alert("Harap isi semua field!");
        return;
      }

      // Simulasi loading
      const submitBtn = loginForm.querySelector(".auth-btn");
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Memproses...';
      submitBtn.disabled = true;

      // Simulasi API call

      setTimeout(() => {
        alert("Login berhasil! Selamat datang di Mojang Laundry.");

        // Redirect ke dashboard (jika ada)
        // window.location.href = 'dashboard.html';

        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        loginForm.reset();
      }, 1500);
    });
  }

  // SOSIAL LOGIN BUTTON

  document.querySelectorAll(".social-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const platform = this.classList.contains("google")
        ? "Google"
        : "Facebook";
      alert(`Login dengan ${platform} (fitur dalam pengembangan)`);
    });
  });

  // LUPA PASSWORD (Dalam pengembanagan)

  document
    .querySelector(".forgot-password")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const email = prompt("Masukkan email Anda untuk reset password:");
      if (email) {
        alert(`Instruksi reset password telah dikirim ke ${email} (simulasi)`);
      }
    });

  // NAVBAR UNTUK MOBILE

  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", () => {
      navbarToggle.classList.toggle("active");
      navbarMenu.classList.toggle("active");
    });

    const navbarLinks = document.querySelectorAll(".navbar-menu a");
    navbarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbarToggle.classList.remove("active");
        navbarMenu.classList.remove("active");
      });
    });
  }

  // EFEK SCROLL

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });
});
