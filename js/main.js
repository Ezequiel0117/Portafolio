document.addEventListener("DOMContentLoaded", () => {
  const skills = [
    { name: "Python", icon: "python.svg" },
    { name: "Django", icon: "django.svg" },
    { name: "Flutter", icon: "flutter.svg" },
    { name: "HTML5", icon: "html5.svg" },
    { name: "CSS3", icon: "css.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "Git", icon: "git.svg" },
    { name: "GitHub", icon: "github.svg" },
    { name: "GitLab", icon: "gitlab.svg" },
    { name: "PostgreSQL", icon: "postgresql.svg" },
  ];

  const skillsList = document.getElementById("skills-list");
  if (skillsList) {
    skillsList.innerHTML = skills
      .map(
        ({ name, icon }) => `
      <li class="skill-item">
        <div class="skill-icon">
          <img src="assets/icons/${icon}" alt="" aria-hidden="true">
        </div>
        <h3>${name}</h3>
      </li>
    `,
      )
      .join("");
  }

  const themeToggle = document.getElementById("theme-toggle");
  const body = document.documentElement;
  const moonIcon = themeToggle.querySelector(".theme-icon-moon");
  const sunIcon = themeToggle.querySelector(".theme-icon-sun");

  const updateThemeIcon = (isDark) => {
    moonIcon.hidden = isDark;
    sunIcon.hidden = !isDark;
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Activar modo claro" : "Activar modo oscuro",
    );
  };

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    body.setAttribute("data-theme", "dark");
    updateThemeIcon(true);
  } else {
    updateThemeIcon(false);
  }

  themeToggle.addEventListener("click", () => {
    if (body.hasAttribute("data-theme")) {
      body.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      updateThemeIcon(false);
    } else {
      body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      updateThemeIcon(true);
    }
  });

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return;
      }

      if (!email.includes("@")) {
        alert("Por favor, ingresa un correo válido.");
        return;
      }

      if (mensaje.length < 10) {
        alert("El mensaje es demasiado corto.");
        return;
      }

      formStatus.style.display = "block";
      contactForm.reset();

      setTimeout(() => {
        formStatus.style.display = "none";
      }, 4000);
    });
  }
});
