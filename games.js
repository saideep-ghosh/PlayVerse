const navLinks = document.querySelectorAll(".main-nav .nav-link");
  const indicator = document.querySelector(".nav-indicator");
  const nav = document.querySelector(".main-nav");

  function updateIndicator(el) {
    indicator.style.width = el.offsetWidth + "px";
    indicator.style.left = el.offsetLeft + "px";

    navLinks.forEach(link => link.classList.remove("active"));
    el.classList.add("active");
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      updateIndicator(e.target);
    });

    // On page load, mark correct link active
    if (link.href === window.location.href) {
      window.addEventListener("load", () => updateIndicator(link));
    }
  });

  // Initial placement
  window.addEventListener("load", () => {
    const active = document.querySelector(".nav-link.active");
    if (active) updateIndicator(active);
  });