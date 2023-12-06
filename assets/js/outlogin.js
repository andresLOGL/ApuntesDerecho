const login = JSON.parse(localStorage.getItem('login'))
const outlogin = document.getElementById('out_login')

if (!login) {
    window.location = '../../index.html'
}

if (outlogin) {
    outlogin.addEventListener('click', () => {
    localStorage.removeItem('login')
    })
}