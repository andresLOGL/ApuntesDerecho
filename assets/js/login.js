const form = document.getElementById('form-login')
if (form) {
    form.addEventListener('submit', (Event) =>{
        Event.preventDefault()
        const email = Event.target.elements.email.value;
        const password = Event.target.elements.password.value;
        console.log(email);

        console.log(password);

        // email = apuntes@gmail.com password = iurisprudences
        if (email == 'apuntes@gmail.com' && password =='iurisprudences'){
            localStorage.setItem('login','true') 
            window.location = '../views/Apuntes.html'  
        }
    })
}