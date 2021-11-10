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

    while(consultaUsuario != 'ESC' && consultaUsuario != 'Esc' && consultaUsuario != 'esc') {
        switch(consultaUsuario) {
            case '1':
                let cotizaPesos = prompt('Escriba la cantidad de pesos que quiere pasar a dolares');
                if(!cotizaPesos) {
                    alert('No ingreso ningún dato');
                } else {
                    alert(`U$D ${parseInt(cotizaPesos) / dolar}`);
                }
                break;
            case '2':
                let cotizaDolar = parseInt(prompt('Escriba la cantidad de dolares que quiere pasar a pesos'));
                if(!cotizaDolar) {
                    alert('No ingreso ningún dato');
                } else {
                    alert(`U$D ${parseInt(cotizaDolar) * dolar}`);
                }
                break;
            default:
                alert('Opción incorrecta');
        }
        consultaUsuario = prompt('Seleccione cotización \n 1 - DE PESOS A DOLARES \n 2 - DE DOLAR A PESOS \n "ESC" - PARA FINALIZAR');
    }
}

bienvenida();
cotizar();