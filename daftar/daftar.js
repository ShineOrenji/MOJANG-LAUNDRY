// HALAMAN SIGN UP

document.addEventListener("DOMContentLoaded", function () {
  // Toggle password visibility
  const togglePassword = document.getElementById("togglePassword");
  const toggleConfirmPassword = document.getElementById(
    "toggleConfirmPassword"
  );
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const strengthMeter = document.getElementById("strengthMeter");
  const passwordHint = document.getElementById("passwordHint");
  const confirmHint = document.getElementById("confirmHint");

  function setupTogglePassword(button, input) {
    button.addEventListener("click", function () {
      const type =
        input.getAttribute("type") === "password" ? "text" : "password";
      input.setAttribute("type", type);
      this.innerHTML =
        type === "password"
          ? '<i class="fas fa-eye"></i>'
          : '<i class="fas fa-eye-slash"></i>';
    });
  }

  if (togglePassword) setupTogglePassword(togglePassword, passwordInput);
  if (toggleConfirmPassword)
    setupTogglePassword(toggleConfirmPassword, confirmPasswordInput);

  function checkPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength += 20;
    if (password.match(/[a-z]/)) strength += 20;
    if (password.match(/[A-Z]/)) strength += 20;
    if (password.match(/[0-9]/)) strength += 20;
    if (password.match(/[^a-zA-Z0-9]/)) strength += 20;

    return Math.min(strength, 100);
  }

  // UPDATE STRENGTH METER PW

  if (passwordInput && strengthMeter) {
    passwordInput.addEventListener("input", function () {
      const password = this.value;
      const strength = checkPasswordStrength(password);

      // Update meter
      strengthMeter.style.width = `${strength}%`;

      // Update color and hint
      if (strength < 40) {
        strengthMeter.style.backgroundColor = "#ff4757";
        passwordHint.textContent = "Password lemah";
        passwordHint.style.color = "#ff4757";
      } else if (strength < 70) {
        strengthMeter.style.backgroundColor = "#ffa502";
        passwordHint.textContent = "Password cukup";
        passwordHint.style.color = "#ffa502";
      } else {
        strengthMeter.style.backgroundColor = "#2ed573";
        passwordHint.textContent = "Password kuat";
        passwordHint.style.color = "#2ed573";
      }

      // Check password match
      checkPasswordMatch();
    });
  }

  // Check password match
  function checkPasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!confirmPassword) {
      confirmHint.textContent = "";
      return;
    }

    if (password === confirmPassword) {
      confirmHint.textContent = "✓ Password cocok";
      confirmHint.style.color = "#2ed573";
    } else {
      confirmHint.textContent = "✗ Password tidak cocok";
      confirmHint.style.color = "#ff4757";
    }
  }

  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener("input", checkPasswordMatch);
  }

  // Form submission
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const terms = document.getElementById("terms").checked;

      // Validasi
      if (!firstName || !email || !phone || !password || !confirmPassword) {
        alert("Harap isi semua field yang wajib!");
        return;
      }

      if (!terms) {
        alert("Anda harus menyetujui Syarat & Ketentuan");
        return;
      }

      if (password !== confirmPassword) {
        alert("Password dan konfirmasi password tidak cocok!");
        return;
      }

      // Simulasi loading
      const submitBtn = signupForm.querySelector(".auth-btn");
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Membuat akun...';
      submitBtn.disabled = true;

      // Simulasi API call
      setTimeout(() => {
        alert(
          `Pendaftaran berhasil!\nSelamat datang ${firstName} ${lastName} di Mojang Laundry.`
        );

        // Redirect ke halaman login
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1000);

        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        signupForm.reset();
      }, 2000);
    });
  }

  // Social signup buttons
  document.querySelectorAll(".social-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const platform = this.classList.contains("google")
        ? "Google"
        : "Facebook";
      alert(`Daftar dengan ${platform} (fitur dalam pengembangan)`);
    });
  });

  // Responsive navbar
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

  // Navbar scroll effect
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
