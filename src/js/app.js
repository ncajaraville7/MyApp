// function seleccionarTarea() {
//     let consultaUsuario = prompt('Seleccione una tarea a realizar \n 1 -Depositar dinero a mi cuenta \n 2 -Realizar una transferencia \n 3-Realizar una cotización \n "ESC" - PARA FINALIZAR');
//     let deposito = 0;
//     let transferencia = 0;

//     while(consultaUsuario.toUpperCase() != 'ESC') {
//         switch(consultaUsuario) {
//             case '1':
//                 deposito = parseInt(prompt('Escriba la cantidad que desea depositar.'));
//                 while(!deposito) {
//                     alert('No ingresó ningún valor');
//                     deposito = parseInt(prompt('Escriba la cantidad que desea depositar.'));
//                 }
//                 alert(`Deposito realizado con éxito. \n Monto depositado: $${deposito}`);
//                 break;
//             case '2':
//                 transferencia = parseInt(prompt('Escriba la cantidad de dinero que desea transferir'));
//                 while(!transferencia) {
//                     alert('No ingresó ningún valor');
//                     transferencia = parseInt(prompt('Escriba la cantidad de dinero que desea transferir'));
//                 }
//                 if(deposito < transferencia) {
//                     alert('No tienes esa cantidad de dinero para transferir.')
//                 } else {
//                     alert(`Transferencia realizada con éxito. \n Transfirió $${transferencia}`);
//                     deposito = deposito - transferencia;
//                 }
//                 break;
//             case '3':
//                 cotizar();
//                 break;
//             default:
//                 alert('Opción incorrecta');
//         }
//         consultaUsuario = prompt('Seleccione una tarea a realizar \n 1 -Depositar dinero a mi cuenta \n 2 -Realizar una transferencia \n 3-Realizar una cotización \n "ESC" - PARA FINALIZAR');
//     }
// }

// seleccionarTarea();

// function cotizar() {
//     let consultaUsuario = prompt('Seleccione cotización \n 1 - DE PESOS A DOLARES \n 2 - DE DOLAR A PESOS \n "ESC" - PARA VOLVER ATRAS');
//     const dolar = 199;

//     while(consultaUsuario.toUpperCase() != 'ESC') {
//         switch(consultaUsuario) {
//             case '1':
//                 let cotizaPesos = parseInt(prompt('Escriba la cantidad de pesos que quiere pasar a dolares'));
//                 while(!cotizaPesos) {
//                     alert('No ingresó ningún valor');
//                     cotizaPesos = parseInt(prompt('Escriba la cantidad de pesos que quiere pasar a dolares'));
//                 }
//                 alert(`U$D ${cotizaPesos / dolar}`);
//                 break;
//             case '2':
//                 let cotizaDolar = parseInt(prompt('Escriba la cantidad de dolares que quiere pasar a pesos'));
//                 while(!cotizaDolar) {
//                     alert('No ingresó ningún valor');
//                     cotizaDolar = parseInt(prompt('Escriba la cantidad de dolares que quiere pasar a pesos'));
//                 }
//                 alert(`$ ${cotizaDolar * dolar}`);
//                 break;
//             default:
//                 alert('Opción incorrecta');
//         }
//         consultaUsuario = prompt('Seleccione cotización \n 1 - DE PESOS A DOLARES \n 2 - DE DOLAR A PESOS \n "ESC" - PARA VOLVER ATRAS');
//     }
// }


// VARIABLES


const btnDepositar = document.getElementById('depositar');
const btnTransferir = document.getElementById('transferir');
const btnComprarDolares = document.getElementById('comprarDolares');
const btnVenderDolares = document.getElementById('venderDolares');





// console.log(btnTransferir)




// EVENTOS

btnDepositar.addEventListener('click', realizarDeposito);
btnTransferir.addEventListener('click', realizarTransferencia);
btnComprarDolares.addEventListener('click', comprarDolares);
btnVenderDolares.addEventListener('click', venderDolares);









// FUNCIONES

function realizarDeposito() {
    (async () => {
      const { value: cuentas } = await Swal.fire({
        title: 'Realizar Deposito',
        text: '¿A que cuenta desea realizar un deposito?',
        iconColor: '#004AAD',
        backdrop: true,
        customClass: {
            confirmButton: 'btn p-2',
        },
        input: 'select',
        inputOptions: {
          'Cuentas': {
            cuentaPesos: 'Cuenta Pesos',
            cuentaDolares: 'Cuenta Dolares'
          },
        },
        inputPlaceholder: 'Seleccione una cuenta',
        buttonsStyling: false,
        confirmButtonText: 'Confirmar',
        showCloseButton: true
      });

      if(cuentas[0]) {
        Swal.fire({
          title: 'Realizar Deposito',
          text: 'Ingrese la cantidad a depositar',
          backdrop: true,
          customClass: {
            confirmButton: 'btn p-2',
          },
          input: 'number',
          buttonsStyling: false,
          confirmButtonText: 'Confirmar',
          showCloseButton: true
        })
      } else if (cuentas[1]) {
        Swal.fire({
          title: 'Realizar Deposito',
          text: 'Ingrese la cantidad a depositar',
          backdrop: true,
          customClass: {
            confirmButton: 'btn p-2',
          },
          input: 'number',
          buttonsStyling: false,
          confirmButtonText: 'Confirmar',
          showCloseButton: true
        })
      } else {
        Swal.fire({
          title: 'No seleccionó ninguna opción',
          icon: 'error',
          backdrop: true,
          showCloseButton: true,
          confirmButtonColor: '#004AAD'
        })
      }
    })()
}

function realizarTransferencia() {
    (async () => {
      const { value: transferencias } = await Swal.fire({
        title: 'Realizar Transferencia',
        iconColor: '#004AAD',
        backdrop: true,
        customClass: {
            confirmButton: 'btn p-2',
        },
        inputLabel: 'Indique el monto a transferir',
        input: 'number',
        buttonsStyling: false,
        confirmButtonText: 'Confirmar',
        showCloseButton: true
      });
    })()
}

function comprarDolares() {
  (async () => {
    const { value: monedaExtranjera } = await Swal.fire({
      title: 'Compra moneda extranjera',
      text: '¿Que moneda desea comprar?',
      iconColor: '#004AAD',
      backdrop: true,
      customClass: {
          confirmButton: 'btn p-2',
      },
      input: 'select',
      inputOptions: {
        'Monedas': {
          dolares: 'Dolares',
          euros: 'Euros'
        },
      },
      inputPlaceholder: 'Seleccione una moneda',
      buttonsStyling: false,
      confirmButtonText: 'Confirmar',
      showCloseButton: true
    });

    if(monedaExtranjera[0]) {
      Swal.fire({
        title: 'Comprar dolares',
        text: 'Ingrese la cantidad que desea comprar',
        backdrop: true,
        customClass: {
          confirmButton: 'btn p-2',
        },
        input: 'number',
        buttonsStyling: false,
        confirmButtonText: 'Confirmar',
        showCloseButton: true
      })
    } else if (monedaExtranjera[1]) {
      Swal.fire({
        title: '¡Error!',
        text: 'No es posible realizar la operación en este momento, intente de nuevo más tarde',
        icon: 'error',
        backdrop: true,
        showCloseButton: true,
        confirmButtonColor: '#004AAD'
      })
    } else {
      Swal.fire({
        title: 'No seleccionó ninguna opción',
        icon: 'error',
        backdrop: true,
        showCloseButton: true,
        confirmButtonColor: '#004AAD'
      })
    }
  })()
}

function venderDolares() {
  (async () => {
    const { value: monedaExtranjera } = await Swal.fire({
      title: 'Venta moneda extranjera',
      text: '¿Que moneda desea vender?',
      iconColor: '#004AAD',
      backdrop: true,
      customClass: {
          confirmButton: 'btn p-2',
      },
      input: 'select',
      inputOptions: {
        'Monedas': {
          dolares: 'Dolares',
          euros: 'Euros'
        },
      },
      inputPlaceholder: 'Seleccione una moneda',
      buttonsStyling: false,
      confirmButtonText: 'Confirmar',
      showCloseButton: true
    });

    if(monedaExtranjera[0]) {
      Swal.fire({
        title: 'Comprar dolares',
        text: 'Ingrese la cantidad que desea vender',
        backdrop: true,
        customClass: {
          confirmButton: 'btn p-2',
        },
        input: 'number',
        buttonsStyling: false,
        confirmButtonText: 'Confirmar',
        showCloseButton: true
      })
    } else if (monedaExtranjera[1]) {
      Swal.fire({
        title: '¡Error!',
        text: 'No es posible realizar la operación en este momento, intente de nuevo más tarde',
        icon: 'error',
        backdrop: true,
        showCloseButton: true,
        confirmButtonColor: '#004AAD'
      })
    } else {
      Swal.fire({
        title: 'No seleccionó ninguna opción',
        icon: 'error',
        backdrop: true,
        showCloseButton: true,
        confirmButtonColor: '#004AAD'
      })
    }
  })()
}

