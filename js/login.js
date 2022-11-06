// -----------ingreso login---------------------




// let usuariosRegistrados = []

// fetch('../users.json')
//   .then(response => response.json())
//   .then(data => console.log(data));


// let id = usuariosRegistrados.length + 1




let userEmail = document.getElementById('emailLogin');
let userPw = document.getElementById('passwordLogin');

userEmail.value = localStorage.getItem('emailNuevo');
userPw.value = localStorage.getItem('passwordNuevo');

let formulario2 = document.getElementById("form2")
formulario2.addEventListener("submit", check)

//checking
function check(){

    let valid_email = localStorage.getItem('emailNuevo')
    let valid_password = localStorage.getItem('passwordNuevo')


    if (userEmail.value === '' &&  userPw.value === '') {
        alert('Data not valid ❌')
        return false
    }

    if (valid_email != userEmail.value || valid_password != userPw.value)
    {
        alert('Your account not found! Register Now!!')
        return false
    } 
    else {
        localStorage.setItem('emailLogin', userEmail.value)
        localStorage.setItem('passwordLogin', userPw.value)
        window.location.href= "conversor.html";
        alert('Login successfuly ✅')
        usuariosRegistrados.push(newUser)

}
}

