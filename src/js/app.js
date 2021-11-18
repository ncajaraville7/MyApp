function seleccionarTarea() {
    let consultaUsuario = prompt('Seleccione una tarea a realizar \n 1 -Depositar dinero a mi cuenta \n 2 -Realizar una transferencia \n 3-Realizar una cotización \n "ESC" - PARA FINALIZAR');
    let deposito = 0;
    let transferencia = 0;

    while(consultaUsuario.toUpperCase() != 'ESC') {
        switch(consultaUsuario) {
            case '1':
                deposito = parseInt(prompt('Escriba la cantidad que desea depositar.'));
                while(!deposito) {
                    alert('No ingresó ningún valor');
                    deposito = parseInt(prompt('Escriba la cantidad que desea depositar.'));
                }
                alert(`Deposito realizado con éxito. \n Monto depositado: $${deposito}`);
                break;
            case '2':
                transferencia = parseInt(prompt('Escriba la cantidad de dinero que desea transferir'));
                while(!transferencia) {
                    alert('No ingresó ningún valor');
                    transferencia = parseInt(prompt('Escriba la cantidad de dinero que desea transferir'));
                }
                if(deposito < transferencia) {
                    alert('No tienes esa cantidad de dinero para transferir.')
                } else {
                    alert(`Transferencia realizada con éxito. \n Transfirió $${transferencia}`);
                    deposito = deposito - transferencia;
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

    while(consultaUsuario.toUpperCase() != 'ESC') {
        switch(consultaUsuario) {
            case '1':
                let cotizaPesos = parseInt(prompt('Escriba la cantidad de pesos que quiere pasar a dolares'));
                while(!cotizaPesos) {
                    alert('No ingresó ningún valor');
                    cotizaPesos = parseInt(prompt('Escriba la cantidad de pesos que quiere pasar a dolares'));
                }
                alert(`U$D ${cotizaPesos / dolar}`);
                break;
            case '2':
                let cotizaDolar = parseInt(prompt('Escriba la cantidad de dolares que quiere pasar a pesos'));
                while(!cotizaDolar) {
                    alert('No ingresó ningún valor');
                    cotizaDolar = parseInt(prompt('Escriba la cantidad de dolares que quiere pasar a pesos'));
                }
                alert(`$ ${cotizaDolar * dolar}`);
                break;
            default:
                alert('Opción incorrecta');
        }
        consultaUsuario = prompt('Seleccione cotización \n 1 - DE PESOS A DOLARES \n 2 - DE DOLAR A PESOS \n "ESC" - PARA VOLVER ATRAS');
    }
}
