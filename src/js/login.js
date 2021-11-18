const btnSignup = document.querySelector('.signup-btn');
const btnSignin = document.querySelector('.signin-btn');
const form = document.querySelector('.formBx');

btnSignup.addEventListener('click', function() {
    form.classList.add('active')
});

btnSignin.addEventListener('click', function() {
    form.classList.remove('active')
});


const dataUsuarios = [];
let nombreUsuario;

function nameUsuario() {
    nombreUsuario = prompt('Ingrese su nombre de usuario');

    while(!nombreUsuario) {
        alert('No ingresó ningún nombre de usuario.')
        nombreUsuario = prompt('Ingrese su nombre de usuario');
    }

    return nombreUsuario
}

function saludo() {
    alert(`Bienvenid@ ${nombreUsuario}`);
}

function passUsuario() {
    let contraseñaUsuario = prompt('Ingrese su contraseña');

    while(!contraseñaUsuario) {
        alert('No ingresó ninguna contraseña.')
        contraseñaUsuario = prompt('Ingrese su contraseña');
    }

    window.location.href = "http://127.0.0.1:5500/src/pages/app.html"
    return contraseñaUsuario;
}

class Usuario {
    constructor(data) {
        this.usuario = data.usuario;
        this.contraseña = data.contraseña;
        this.bienvenida = data.bienvenida
    }
}

dataUsuarios.push(new Usuario ({
    usuario: nameUsuario(),
    contraseña: passUsuario(),
    bienvenida: saludo()
}));

console.log(dataUsuarios);