

let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let specialCharacters =/[.,*!?¿¡/#$%&-_+{}]/;
let numbers = /[0-9]/g;
let formulario = document.getElementById("form")
formulario.addEventListener("submit", store)

function store(){
    let name = document.getElementById('userNuevo');
    let pw = document.getElementById('passwordNuevo');
    let email = document.getElementById('emailNuevo');

    if(email.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0){
        alert('Please fill in User name');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length < 6 || pw.value.length > 10){
        alert('Min of 6 and Max of 10 characters');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lowercase letter');

    }else if(!pw.value.match(specialCharacters)){
        alert('please add 1 special character');

    }else{
        localStorage.setItem('userNuevo', name.value);
        localStorage.setItem('passwordNuevo', pw.value);
        localStorage.setItem('emailNuevo', email.value);
        window.location.href= "login.html";
        alert('Your account has been created');
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
