// -----------ingreso login---------------------




let usuariosRegistrados = []

fetch('../users.json')
.then(response => response.json())
.then(data => {
    usuariosRegistrados = data;
});


let userEmail = document.getElementById('emailLogin');
let userPw = document.getElementById('passwordLogin');

userEmail.value = localStorage.getItem('emailNuevo');
userPw.value = localStorage.getItem('passwordNuevo');

let formulario2 = document.getElementById("form2")
formulario2.addEventListener("submit", check)

//checking
function check(event){

    event.preventDefault()

    let valid_email = localStorage.getItem('emailNuevo')
    let valid_password = localStorage.getItem('passwordNuevo')


    if (userEmail.value === '' &&  userPw.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Data not valid!',
            timer: 5000
          })
        return false
    }

    if (valid_email != userEmail.value || valid_password != userPw.value)
    {
        Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text: 'Your account not found! Register Now!!',
            timer: 5000
          })
        return false
    } 
    else {
        localStorage.setItem('emailLogin', userEmail.value)
        localStorage.setItem('passwordLogin', userPw.value)
        Swal.fire({
            icon: 'success',
            title: 'Welcome!',
            text: 'Login successfuly!',
            timer: 5000
          })
          setTimeout(() => window.location.href= "conversor.html", 4000);

        usuariosRegistrados.push(newUser)

}
}

