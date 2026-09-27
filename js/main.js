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

  const projects = [
    {
      title: "EcoSoft",
      image: "assets/img/EcoSoft/Inicio.png",
      imageAlt: "Vista del sistema EcoSoft para clasificación de residuos",
      type: "Proyecto académico | Aplicación web inteligente",
      summary:
        "Sistema para detectar y clasificar residuos mediante inteligencia artificial, con historial de análisis, métricas, autenticación, dashboard y mapa de puntos de reciclaje. Permite identificar plástico, papel, vidrio y metal a partir de imágenes, consultar resultados por usuario y visualizar estadísticas para apoyar la toma de decisiones ambientales.",
      technologies: [
        { name: "Python", icon: "python.svg" },
        { name: "Django", icon: "django.svg" },
        { name: "PostgreSQL", icon: "postgresql.svg" },
        { name: "HTML5", icon: "html5.svg" },
        { name: "JavaScript", icon: "javascript.svg" },
      ],
      gallery: [
        { src: "assets/img/EcoSoft/Inicio.png", alt: "Inicio de EcoSoft" },
        {
          src: "assets/img/EcoSoft/Claasificador.png",
          alt: "Clasificador de residuos de EcoSoft",
        },
        {
          src: "assets/img/EcoSoft/Historial.png",
          alt: "Historial de análisis de EcoSoft",
        },
      ],
      repository:
        "https://github.com/Ezequiel0117/proyecto-final-Ezequiel-Jaramillo.git",
    },
    {
      title: "Juego de Memoria con Cartas",
      image: "assets/img/JuegoCartas/Jugador.jpeg",
      imageAlt: "Juego de memoria con cartas",
      type: "Proyecto académico | Desarrollo web interactivo",
      summary:
        "Juego de memoria con tres niveles de dificultad, modos individual y multijugador, puntuación por movimientos, temporizador, sonidos, pausa, reinicio y cartas aleatorizadas con Fisher-Yates. Su diseño responsivo se adapta a distintos dispositivos e incluye animaciones y efectos de sonido para mejorar la experiencia de juego y hacer más clara la interacción del usuario.",
      technologies: [
        { name: "HTML5", icon: "html5.svg" },
        { name: "CSS3", icon: "css.svg" },
        { name: "JavaScript", icon: "javascript.svg" },
      ],
      gallery: [
        {
          src: "assets/img/JuegoCartas/Inicio.jpeg",
          alt: "Inicio del juego de cartas",
        },
        {
          src: "assets/img/JuegoCartas/Menu_Jugador.jpeg",
          alt: "Menú del modo jugador",
        },
        {
          src: "assets/img/JuegoCartas/Jugador.jpeg",
          alt: "Modo jugador del juego de cartas",
        },
        {
          src: "assets/img/JuegoCartas/Menu_Multijugador.jpeg",
          alt: "Menú del modo multijugador",
        },
        {
          src: "assets/img/JuegoCartas/Multijugador.jpeg",
          alt: "Modo multijugador del juego de cartas",
        },
      ],
      repository: "https://github.com/Ezequiel0117/Juego-Tecnica.git",
    },
    {
      title: "Sistema Integral de Gestión Médica",
      image: "assets/img/Sistema_Medico/Inicio.jpeg",
      imageAlt: "Sistema integral de gestión médica",
      type: "Proyecto académico | Aplicación web empresarial",
      summary:
        "Sistema para gestionar pacientes, citas, historias clínicas, consultas, facturación y pagos con PayPal. Incluye autenticación, auditoría, panel administrativo, documentos PDF y 14 modelos principales optimizados con relaciones y validaciones personalizadas.",
      technologies: [
        { name: "Python", icon: "python.svg" },
        { name: "Django", icon: "django.svg" },
        { name: "PostgreSQL", icon: "postgresql.svg" },
        { name: "HTML5", icon: "html5.svg" },
        { name: "JavaScript", icon: "javascript.svg" },
      ],
      gallery: [
        {
          src: "assets/img/Sistema_Medico/Inicio.jpeg",
          alt: "Inicio del sistema médico",
        },
        {
          src: "assets/img/Sistema_Medico/Empleados.jpeg",
          alt: "Gestión de empleados",
        },
        {
          src: "assets/img/Sistema_Medico/cargos.jpeg",
          alt: "Gestión de cargos",
        },
        {
          src: "assets/img/Sistema_Medico/Tipo de Sangre.jpeg",
          alt: "Gestión de tipos de sangre",
        },
        {
          src: "assets/img/Sistema_Medico/Auditorias.jpeg",
          alt: "Auditorías del sistema médico",
        },
      ],
      repository: "https://github.com/Ezequiel0117/sistema_medico.git",
    },
  ];

  const projectsList = document.getElementById("projects-list");
  if (projectsList) {
    projectsList.innerHTML = projects
      .map(
        ({
          title,
          image,
          imageAlt,
          type,
          summary,
          technologies,
          gallery,
          repository,
        }) => `
      <article class="card">
        <img src="${image}" alt="${imageAlt}" class="card-img">
        <div class="card-content">
          <h3 class="card-title">${title}</h3>
          <p class="project-type"><strong>${type}</strong></p>
          <p class="project-summary">${summary}</p>
          <div class="project-technologies">
            <h4 class="project-tech-title">Tecnologías</h4>
            <div class="project-tags">
              ${technologies
                .map(
                  ({ name, icon }) => `
                <span class="badge">
                  <img src="assets/icons/${icon}" alt="" class="badge-icon" aria-hidden="true">
                  ${name}
                </span>
              `,
                )
                .join("")}
            </div>
          </div>
          <div class="project-actions">
            <a href="${repository}" class="btn btn-secondary project-action" target="_blank" rel="noopener noreferrer">Ver repositorio</a>
            ${gallery ? `<button class="btn btn-primary gallery-action" type="button" data-gallery="${title}">Ver imágenes</button>` : ""}
          </div>
        </div>
      </article>
    `,
      )
      .join("");

    const galleryDialog = document.createElement("dialog");
    galleryDialog.className = "gallery-dialog";
    galleryDialog.innerHTML = `
      <div class="gallery-header">
        <div>
          <h2 id="gallery-title">Galería del proyecto</h2>
        </div>
        <button class="gallery-close" type="button" aria-label="Cerrar galería">×</button>
      </div>
      <div class="gallery-viewer">
        <button class="gallery-nav gallery-previous" type="button" aria-label="Imagen anterior">‹</button>
        <img class="gallery-image" alt="">
        <button class="gallery-nav gallery-next" type="button" aria-label="Imagen siguiente">›</button>
      </div>
      <p class="gallery-counter" aria-live="polite"></p>
    `;
    document.body.append(galleryDialog);

    const galleryButtons = projectsList.querySelectorAll(".gallery-action");
    const galleryClose = galleryDialog.querySelector(".gallery-close");
    const galleryTitle = galleryDialog.querySelector("#gallery-title");
    const galleryImage = galleryDialog.querySelector(".gallery-image");
    const galleryCounter = galleryDialog.querySelector(".gallery-counter");
    const previousButton = galleryDialog.querySelector(".gallery-previous");
    const nextButton = galleryDialog.querySelector(".gallery-next");
    let gallery = [];
    let currentImage = 0;

    const updateGallery = () => {
      const image = gallery[currentImage];
      galleryImage.src = image.src;
      galleryImage.alt = image.alt;
      galleryCounter.textContent = `${currentImage + 1} / ${gallery.length}`;
    };

    const showPrevious = () => {
      currentImage = (currentImage - 1 + gallery.length) % gallery.length;
      updateGallery();
    };

    const showNext = () => {
      currentImage = (currentImage + 1) % gallery.length;
      updateGallery();
    };

    galleryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const project = projects.find(
          ({ title }) => title === button.dataset.gallery,
        );
        gallery = project.gallery;
        galleryTitle.textContent = `Galería de ${project.title}`;
        currentImage = 0;
        updateGallery();
        galleryDialog.showModal();
      });
    });
    previousButton.addEventListener("click", showPrevious);
    nextButton.addEventListener("click", showNext);
    galleryClose.addEventListener("click", () => galleryDialog.close());
    galleryDialog.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    });
    galleryDialog.addEventListener("click", (event) => {
      if (event.target === galleryDialog) {
        galleryDialog.close();
      }
    });
  }

  const themeToggle = document.getElementById("theme-toggle");
  const body = document.documentElement;
  if (themeToggle) {
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
  }

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      menuToggle.textContent = "☰";
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú",
      );
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

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
