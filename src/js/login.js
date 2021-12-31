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

let dataUsuarios = [];
let dataUsuariosJson = [];

class Usuario {
    constructor(data) {
        this.usuario = data.usuario;
        this.contraseña = data.contraseña;
    }
}

document.addEventListener('DOMContentLoaded', ()=> {
    const URL = "http://127.0.0.1:5500/src/js/usuarios.json"
    $.get(URL, function(respuesta, estado){
        if (estado === "success") {
            localStorage.setItem('usuariojson', JSON.stringify(respuesta));
        }
    })

    dataUsuarios = JSON.parse(localStorage.getItem('usuario')) || [];
    dataUsuariosJson = JSON.parse(localStorage.getItem('usuariojson')) || [];
});

btnSignup.addEventListener('click', ()=> boxFormulario.classList.add('active'));
btnSignin.addEventListener('click', ()=> boxFormulario.classList.remove('active'));

inputUsuario.addEventListener('blur', validar);
inputContraseña.addEventListener('blur', validar);

inputIniciarSesion.addEventListener('click', e => {
    e.preventDefault();

    if(!inputUsuario.value || !inputContraseña.value) {
        mostrarError('Usuario o contraseña invalidos');
    } else {
        const usuarioEncontrado = dataUsuarios.find( usuario => usuario.usuario === inputUsuario.value && usuario.contraseña === inputContraseña.value);
        const usuarioEncontradoJson = dataUsuariosJson.find( usuario => usuario.usuario === inputUsuario.value && usuario.contraseña === inputContraseña.value);

        if (usuarioEncontrado || usuarioEncontradoJson) {
            window.location.href = "https://ncajaraville7.github.io/MyApp/src/pages/app.html"
        }else{
            mostrarError('El usuario no existe');
        }  
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
    } else if(!regUsuario.value || !regContraseña.value || !confContraseña.value) {
        mostrarError('Debes completar todos los campos')
    } else {
        mostrarConfirmacion('Usuario creado con exito');
        dataUsuarios.push(new Usuario ({
            usuario: regUsuario.value,
            contraseña: regContraseña.value
        }));

        localStorage.setItem('usuario', JSON.stringify(dataUsuarios));
        formulario.reset()
    }
});

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





