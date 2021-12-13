// VARIABLES

const btnSignup = document.querySelector('.signup-btn');
const btnSignin = document.querySelector('.signin-btn');
const boxFormulario = document.querySelector('.formBx');

const inputUsuario = document.querySelector('.usuario');
const inputContraseña = document.querySelector('.contraseña');
const inputIniciarSesion = document.querySelector('.login');

const alertas = document.querySelector('.alertas');

const irRegistrarse = document.querySelector('.signup-btn');

const regUsuario = document.querySelector('.regUsuario');
const regContraseña = document.querySelector('.regContraseña');
const confContraseña = document.querySelector('.confContraseña');

const irIniciarSesion = document.querySelector('.signin-btn');

const registrarse = document.querySelector('.registrarse');

const formulario = document.querySelector('.formulario')

//---------------------------

const dataUsuarios = [];

class Usuario {
    constructor(data) {
        this.usuario = data.usuario;
        this.contraseña = data.contraseña;
    }
}


// EVENTOS

btnSignup.addEventListener('click', ()=> boxFormulario.classList.add('active'));

btnSignin.addEventListener('click', ()=> boxFormulario.classList.remove('active'));

inputUsuario.addEventListener('blur', validar);
inputContraseña.addEventListener('blur', validar);

inputIniciarSesion.addEventListener('click', e => {
    e.preventDefault();

    if(!inputUsuario.value || !inputContraseña.value) {
        mostrarError('Usuario o contraseña invalidos');
    } else {

        window.location.href = "https://ncajaraville7.github.io/MyApp/src/pages/app.html"
    }
})

irRegistrarse.addEventListener('click', () => alertas.innerHTML = '');

regUsuario.addEventListener('blur', validar);
regContraseña.addEventListener('blur', validar);
confContraseña.addEventListener('blur', validar);

irIniciarSesion.addEventListener('click', () => alertas.innerHTML = '');

registrarse.addEventListener('click', e => {
    e.preventDefault();
    if(regContraseña.value != confContraseña.value) {
        mostrarError('Las contraseñas no coinciden');
    } else {
        mostrarConfirmacion('Usuario creado con exito');
    
        dataUsuarios.push(new Usuario ({
            usuario: regUsuario.value,
            contraseña: regContraseña.value
        }));

        formulario.reset()
    }
});


// FUNCIONES

function validar(e) {
    if(!e.target.value) {
        e.target.classList.add('validacionEr');
        e.target.classList.remove('validacionOk');
        mostrarError('Debes completar todos los campos');
    } else {
        e.target.classList.add('validacionOk');
        e.target.classList.remove('validacionEr');
        alertas.innerHTML = '';
    }
}


function mostrarError(mensaje) {
    const alertaError = document.createElement('p');
    alertaError.textContent = mensaje;
    alertaError.classList.add('error');
    alertas.appendChild(alertaError);
}

function mostrarConfirmacion(mensaje) {
    const confirmacion = document.createElement('p');
    confirmacion.textContent = mensaje;
    confirmacion.classList.add('confirmacion');
    alertas.appendChild(confirmacion);
}





