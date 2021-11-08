function bienvenida() {
    let usuarioNombre = prompt('Ingrese su nombre');

    while(usuarioNombre === '') {
        alert('¡Error! No ingresó ningún nombre');
        usuarioNombre = prompt('Ingrese su nombre');
    }

    alert(`¡Bienvenid@! ${usuarioNombre}`);
}

function cotizar() {
    let consultaUsuario = prompt('Seleccione cotización \n 1 - DE PESOS A DOLARES \n 2 - DE DOLAR A PESOS \n "ESC" - PARA FINALIZAR');
    const dolar = 199;

    while(consultaUsuario != 'ESC') {
        switch(consultaUsuario) {
            case '1':
                let cotizaPesos = parseInt(prompt('Escriba la cantidad de pesos que quiere pasar a dolares'));
                alert(`U$D ${cotizaPesos / dolar}`);
                break;
            case '2':
                let cotizaDolar = parseInt(prompt('Escriba la cantidad de dolares que quiere pasar a pesos'));
                alert(`$ ${cotizaDolar * dolar}`);
                break;
            default:
                alert('Opción incorrecta');
        }
        consultaUsuario = prompt('Seleccione cotización \n 1 - DE PESOS A DOLARES \n 2 - DE DOLAR A PESOS \n "ESC" - PARA FINALIZAR');
    }
}

bienvenida();
cotizar();