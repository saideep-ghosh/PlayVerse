 // FAB toggle logic
 const fabBtn = document.getElementById('fabBtn');
 const fabNav = document.getElementById('fabNav');

 fabBtn?.addEventListener('click', () => {
   fabNav.classList.toggle('active');
 });

 // Hide FAB on index.html
 if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
   const fabContainer = document.querySelector(".fab-container");
   fabContainer?.remove();
 }