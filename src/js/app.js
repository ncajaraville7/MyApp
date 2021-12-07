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
let compraAnterior = 0

const btnVender = document.getElementById('venderDolares');
const inputVender = document.getElementById('cantidadVender');
const formularioVender = document.getElementById('formularioVender');
const dolarVenta = 198.20;
const ventaAnterior = 0;

// EVENTOS

$(formularioDeposito).submit(realizarDeposito);
$(formularioTransferir).submit(realizarTransferencia);

$( document ).ready(function() {
  console.log(localStorage.getItem('valorCuenta'));
});

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
    cuentaPesos.innerHTML = `$${depositoAnterior}`;
    
    formularioDeposito.reset();
  }
  localStorage.setItem('valorCuenta', depositoAnterior);
}

function realizarTransferencia(e) {
  e.preventDefault();
  transferencia = parseFloat(inputTransferir.value);

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
    depositoAnterior = depositoAnterior - transferencia;
    transferenciaAnterior = transferenciaAnterior + transferencia;
    cuentaPesos.innerHTML = `$` + `${depositoAnterior}`;
    formularioTransferir.reset();
  }
  localStorage.setItem('valorCuenta', depositoAnterior);
}
