const btn = document.getElementById('boton')
if (btn) {
    btn.addEventListener('click', (Event) =>{
        Event.preventDefault()
    })
}