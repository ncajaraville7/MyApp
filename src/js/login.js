// VARIABLES

const btnSignup = document.querySelector('.signup-btn');
const btnSignin = document.querySelector('.signin-btn');
const form = document.querySelector('.formBx');

const inputUsuario = document.querySelector('.usuario');
const inputContraseña = document.querySelector('.contraseña');
const inputIniciarSesion = document.querySelector('.login');

const error = document.querySelector('.error');

const irRegistrarse = document.querySelector('.signup-btn');

const regUsuario = document.querySelector('.regUsuario');
const regContraseña = document.querySelector('.regContraseña');
const confContraseña = document.querySelector('.confContraseña');

const irIniciarSesion = document.querySelector('.signin-btn');

const registrarse = document.querySelector('.registrarse');

// EVENTOS

btnSignup.addEventListener('click', ()=> form.classList.add('active'));

btnSignin.addEventListener('click', ()=> form.classList.remove('active'));

inputUsuario.addEventListener('blur', validarRegistro);
inputContraseña.addEventListener('blur', validarRegistro);

inputIniciarSesion.addEventListener('click', e => {
    e.preventDefault();

    if(!inputUsuario.value || !inputContraseña.value) {
        mostrarError('Usuario o contraseña invalidos');
    } else {

        window.location.href = "https://ncajaraville7.github.io/MyApp/src/pages/app.html"
    }
})

irRegistrarse.addEventListener('click', () => error.innerHTML = '');

regUsuario.addEventListener('blur', validarRegistro);
regContraseña.addEventListener('blur', validarRegistro);
confContraseña.addEventListener('blur', validarRegistro);

irIniciarSesion.addEventListener('click', () => error.innerHTML = '');

registrarse.addEventListener('click', () => {
    dataUsuarios.push(new Usuario ({
        usuario: regUsuario.value,
        contraseña: regContraseña.value
    }));
});

//---------------------------


const dataUsuarios = [];

class Usuario {
    constructor(data) {
        this.usuario = data.usuario;
        this.contraseña = data.contraseña;
        this.bienvenida = data.bienvenida
    }
}





// FUNCIONES

function validarRegistro(e) {
    if(!e.target.value) {
        e.target.classList.add('validacionEr');
        e.target.classList.remove('validacionOk');
        mostrarError('Debes completar todos los campos');
    } else {
        e.target.classList.add('validacionOk');
        e.target.classList.remove('validacionEr');
        error.innerHTML = '';
    }
}


function mostrarError(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta');
    error.appendChild(alerta);
}




