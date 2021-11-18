function seleccionarTarea() {
    let consultaUsuario = prompt('Seleccione una tarea a realizar \n 1 -Depositar dinero a mi cuenta \n 2 -Realizar una transferencia \n 3-Realizar una cotización \n "ESC" - PARA FINALIZAR');

    while(consultaUsuario != 'ESC' && consultaUsuario != 'Esc' && consultaUsuario != 'esc') {
        switch(consultaUsuario) {
            case '1':
                let deposito = parseInt(prompt('Escriba la cantidad que desea depositar.'));
                alert(`Deposito realizado con éxito. \n Monto depositado: $${deposito}`);
                break;
            case '2':
                let transferencia = parseInt(prompt('Escriba la cantidad de dinero que desea transferir'));
                if(deposito < transferencia) {
                    alert('No tienes esa cantidad de dinero para transferir.')
                } else {
                    alert(`Transferencia realizada con éxito. \n Transfirió $${transferencia}`);
                }
                break;
            case '3':
                cotizar();
                break;
            default:
                alert('Opción incorrecta');
        }
        consultaUsuario = prompt('Seleccione una tarea a realizar \n 1 -Depositar dinero a mi cuenta \n 2 -Realizar una transferencia \n 3-Realizar una cotización \n "ESC" - PARA FINALIZAR');
    }
}

seleccionarTarea();

function cotizar() {
    let consultaUsuario = prompt('Seleccione cotización \n 1 - DE PESOS A DOLARES \n 2 - DE DOLAR A PESOS \n "ESC" - PARA VOLVER ATRAS');
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
        consultaUsuario = prompt('Seleccione cotización \n 1 - DE PESOS A DOLARES \n 2 - DE DOLAR A PESOS \n "ESC" - PARA VOLVER ATRAS');
    }
}

