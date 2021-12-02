// VARIABLES

const inputDepositar = document.getElementById('cantidadDepositar');
const formularioDeposito = document.getElementById('formularioDeposito');
const btnDepositar = document.getElementById('depositar');
let deposito = 0;
let depositoAnterior = 0;

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
  depositoAnterior = deposito + depositoAnterior;

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
    cuentaPesos.innerHTML =  `$${depositoAnterior}`;
    formularioDeposito.reset();
  }
}

function realizarTransferencia() {
  transferencia = parseFloat(inputTransferir.value);
  depositoAnterior = depositoAnterior - transferencia;

  if(!transferencia) {
    Swal.fire({
      title: 'No ingresó ningún valor',
      icon: 'error',
      backdrop: true,
      showCloseButton: true,
      confirmButtonColor: '#004AAD'
    })
  } else if(depositoAnterior < transferencia) {
    Swal.fire({
      title: 'No tienes esa cantidad de dinero para transferir',
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
    cuentaPesos.innerHTML = `$` + `${depositoAnterior}`;
    formularioTransferir.reset();
  }
}
