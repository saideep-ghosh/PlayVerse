function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
  }

  function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  }

  function handleLogin(event) {
    event.preventDefault();
    alert('Login clicked!');
  }

  function handleSignup(event) {
    event.preventDefault();
    alert('Signup clicked!');
  }

  const fabBtn = document.getElementById('fabBtn');
  const fabNav = document.getElementById('fabNav');

  fabBtn?.addEventListener('click', () => {
    fabNav.classList.toggle('active');
  });

  // Hide FAB on index.html only
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    document.querySelector(".fab-container")?.remove();
  }