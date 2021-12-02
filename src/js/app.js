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
let transferenciaAnterior = 0;

const cuentaPesos = document.getElementById('cuentaPesos');
const cuentaDolar = document.getElementById('cuentaDolar');

const btnComprar = document.getElementById('comprarDolares');
const inputComprar = document.getElementById('cantidadComprar');
const formularioComprar = document.getElementById('formularioComprar');
const dolarCompra = 201.50;

const btnVender = document.getElementById('venderDolares');


// EVENTOS

btnDepositar.addEventListener('click', realizarDeposito);
btnTransferir.addEventListener('click', realizarTransferencia);

btnComprar.addEventListener('click', comprarDolares);


// FUNCIONES


function realizarDeposito(e) {
  e.preventDefault();
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

function realizarTransferencia(e) {
  e.preventDefault();
  transferencia = parseFloat(inputTransferir.value);
  depositoAnterior = depositoAnterior - transferencia;
  transferenciaAnterior = transferenciaAnterior + transferencia;

  if(!transferencia) {
    Swal.fire({
      title: 'No ingresó ningún valor',
      icon: 'error',
      backdrop: true,
      showCloseButton: true,
      confirmButtonColor: '#004AAD'
    })
  } else if(depositoAnterior < 0) {
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

// function comprarDolares() {
//   let descontar = inputComprar.value * dolarCompra;
//   depositoAnterior = depositoAnterior - descontar;

//   if(!inputComprar.value) {
//     Swal.fire({
//       title: 'No ingresó ningún valor',
//       icon: 'error',
//       backdrop: true,
//       showCloseButton: true,
//       confirmButtonColor: '#004AAD'
//     })
//   } else if(depositoAnterior > dolarCompra) {
//     console.log('compraste dolares');
  
//     cuentaPesos.innerHTML = `$${depositoAnterior}`
//     cuentaDolar.innerHTML = `U$D${inputComprar.value}`
//   } else {
//     Swal.fire({
//       title: 'No tienes dinero suficiente para comprar esa cantidad',
//       icon: 'error',
//       backdrop: true,
//       showCloseButton: true,
//       confirmButtonColor: '#004AAD'
//     })
//   }
// } 

