/* =========================================
   MAIN.JS – SITIO DEVOCIONAL CRISTIANO
   Autor: Tú 😄
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     1. MENÚ STICKY + CAMBIO AL HACER SCROLL
  ========================================= */
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }
  });


  /* =========================================
     2. SCROLL SUAVE ENTRE SECCIONES
  ========================================= */
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId.length > 1) {
        e.preventDefault();
        const target = document.querySelector(targetId);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });


  /* =========================================
     3. ANIMACIONES AL APARECER (SCROLL)
     (Intersection Observer)
  ========================================= */
  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.2
  });

  animatedElements.forEach(el => observer.observe(el));


  /* =========================================
     4. TARJETAS DE DEVOCIONALES (CLICK)
     Redirección a página del devocional
  ========================================= */
  const devotionals = document.querySelectorAll(".devocional-card");

  devotionals.forEach(card => {
    card.addEventListener("click", () => {
      const link = card.getAttribute("data-link");

      if (link) {
        window.location.href = link;
      }
    });
  });


  /* =========================================
     5. VIDEO HERO (PLAY / PAUSE)
  ========================================= */
  const heroVideo = document.querySelector("#heroVideo");
  const videoBtn = document.querySelector("#videoControl");

  if (heroVideo && videoBtn) {
    videoBtn.addEventListener("click", () => {
      if (heroVideo.paused) {
        heroVideo.play();
        videoBtn.innerHTML = "⏸";
      } else {
        heroVideo.pause();
        videoBtn.innerHTML = "▶";
      }
    });
  }


  /* =========================================
     6. PODCAST DE LA SEMANA (PLAYER SIMPLE)
  ========================================= */
  const podcastButtons = document.querySelectorAll(".podcast-play");

  podcastButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const audioId = btn.getAttribute("data-audio");
      const audio = document.getElementById(audioId);

      if (!audio) return;

      // Pausar otros audios
      document.querySelectorAll("audio").forEach(a => {
        if (a !== audio) a.pause();
      });

      if (audio.paused) {
        audio.play();
        btn.innerHTML = "⏸ Pausar";
      } else {
        audio.pause();
        btn.innerHTML = "▶ Reproducir";
      }
    });
  });


  /* =========================================
     7. EFECTO PARALLAX SUAVE (HERO)
  ========================================= */
  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    if (hero) {
      hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
    }
  });


  /* =========================================
     8. MENÚ MOBILE (CERRAR AL CLICK)
  ========================================= */
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    });
  });


  /* =========================================
     9. ANIMACIÓN TEXTO HERO (ESCRITURA)
  ========================================= */
  const typingText = document.querySelector(".typing");

  if (typingText) {
    const text = typingText.dataset.text;
    let index = 0;

    const typeEffect = () => {
      if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
      }
    };

    typeEffect();
  }


  /* =========================================
     10. BOTÓN VOLVER ARRIBA
  ========================================= */
  const backTop = document.querySelector("#backToTop");

  window.addEventListener("scroll", () => {
    if (backTop) {
      backTop.classList.toggle("show", window.scrollY > 400);
    }
  });

  if (backTop) {
    backTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

document.querySelectorAll('.slider-container').forEach(container => {
  const track = container.querySelector('.slider-track');
  const prev = container.querySelector('.prev');
  const next = container.querySelector('.next');

  next.addEventListener('click', () => {
    track.scrollLeft += 300;
  });

  prev.addEventListener('click', () => {
    track.scrollLeft -= 300;
  });
});
  

});