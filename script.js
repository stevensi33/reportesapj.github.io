document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'apj2023' && password === 'medellin2023') {
        window.location.href = 'boletin.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
