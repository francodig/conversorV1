

let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let specialCharacters =/[.,*!?¿¡/#$%&-_+{}]/;
let numbers = /[0-9]/g;
let formulario = document.getElementById("form")
formulario.addEventListener("submit", store)

let usuariosRegistrados = []

fetch('../users.json')
.then(response => response.json())
.then(data => {
    usuariosRegistrados = data;
});


function store(event){

    event.preventDefault()

    let name = document.getElementById('userNuevo');
    let pw = document.getElementById('passwordNuevo');
    let email = document.getElementById('emailNuevo');



    if(email.value.length == 0){
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Please fill in email!',
            timer: 5000
          })
          

    }else if(pw.value.length == 0){
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Please fill in password!',
            timer: 5000
          })

    }else if(name.value.length == 0){
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Please fill in User name!',
            timer: 5000
          })

    }else if(name.value.length == 0 && pw.value.length == 0){
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Please fill in email and password!',
            timer: 5000
          })

    }else if(pw.value.length < 6 || pw.value.length > 10){
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Min of 6 and Max of 10 characters!',
            timer: 5000
          })

    }else if(!pw.value.match(numbers)){
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'please add 1 number!',
            timer: 5000
          })

    }else if(!pw.value.match(upperCaseLetters)){
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'please add 1 uppercase letter!',
            timer: 5000
          })

    }else if(!pw.value.match(lowerCaseLetters)){
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'please add 1 lowercase letter!',
            timer: 5000
          })

    }else if(!pw.value.match(specialCharacters)){
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'please add 1 special character!',
            timer: 5000
          })

    }else if(usuariosRegistrados.some(usuario => usuario.email == email.value )){
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'the email is already in use!',
            timer: 5000
          })
    
    }else{
        localStorage.setItem('userNuevo', name.value);
        localStorage.setItem('passwordNuevo', pw.value);
        localStorage.setItem('emailNuevo', email.value);
        Swal.fire({
            icon: 'success',
            title: 'Welcome!',
            text: 'Your account has been created!',
            timer: 5000
          })

          setTimeout(() => window.location.href= "login.html", 4000);
    }
}


 requeriments = document.getElementById("passwordNuevo")
 requeriments.addEventListener( "click", display)

 function display(){
     document.getElementById("passRequirements").innerHTML = `
     <ul>
    <li>At least 8 characters long</li>
    <li>At least 1 lowercase letter</li>
    <li>At least 1 capital letter</li>
    <li>At least 1 non-alphabetical character</li>
    </ul> 
    `
 }

 requeriments.addEventListener( "blur", hide)

 function hide(){
     document.getElementById("passRequirements").innerHTML = ``
 }
