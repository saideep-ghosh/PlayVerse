const navLinks = document.querySelectorAll(".main-nav .nav-link");
    const indicator = document.querySelector(".nav-indicator");

    function updateIndicator(el)  {
      indicator.style.width = el.offsetWidth + "px";
      indicator.style.left = el.offsetLeft + "px";

      navLinks.forEach(link => link.classList.remove("active"));
      el.classList.add("active");
    }

    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        updateIndicator(e.target);
      });

      if (link.href === window.location.href) {
        window.addEventListener("load", () => updateIndicator(link));
      }
    });

    window.addEventListener("load", () => {
      const active = document.querySelector(".nav-link.active");
      if (active) updateIndicator(active);
    });