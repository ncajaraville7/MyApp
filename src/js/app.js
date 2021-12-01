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

const inputDepositar = document.getElementById('cantidadDepositar');
const formularioDeposito = document.getElementById('formularioDeposito');
const btnDepositar = document.getElementById('depositar');
let deposito = 0;

const inputTransferir = document.getElementById('cantidadTransferir');
const formularioTransferir = document.getElementById('formularioTransferencia');
const btnTransferir = document.getElementById('transferir');
let transferencia = 0;

const cuentaPesos = document.getElementById('cuentaPesos');


// EVENTOS

btnDepositar.addEventListener('click', realizarDeposito);
btnTransferir.addEventListener('click', realizarTransferencia);

// FUNCIONES


function realizarDeposito() {
  deposito = parseFloat(inputDepositar.value);

  if(!deposito) {
    Swal.fire({
      title: 'No ingresó ningún valor',
      icon: 'error',
      backdrop: true,
      showCloseButton: true,
      confirmButtonColor: '#004AAD'
    })
  } else {
    Swal.fire({
      title: 'Deposito realizado correctamente',
      icon: 'success',
      backdrop: true,
      showCloseButton: true,
      confirmButtonColor: '#004AAD'
    })
    cuentaPesos.innerHTML = `${deposito}`;
    formularioDeposito.reset();
  }
}

function realizarTransferencia() {
  transferencia = parseFloat(inputTransferir.value);

  if(!transferencia) {
    Swal.fire({
      title: 'No ingresó ningún valor',
      icon: 'error',
      backdrop: true,
      showCloseButton: true,
      confirmButtonColor: '#004AAD'
    })
  } else {
    Swal.fire({
      title: 'Transferencia realizada correctamente',
      icon: 'success',
      backdrop: true,
      showCloseButton: true,
      confirmButtonColor: '#004AAD'
    })

    if(deposito < transferencia) {
      Swal.fire({
        title: 'No tienes esa cantidad de dinero para transferir',
        icon: 'error',
        backdrop: true,
        showCloseButton: true,
        confirmButtonColor: '#004AAD'
      })
    } else {
      cuentaPesos.innerHTML = `$` + (`${deposito}` - `${transferencia}`);
      deposito = deposito - transferencia
    }
  }
}
