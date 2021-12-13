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

const formularioPrestamos = document.querySelector('.loan-app__form');
// EVENTOS

$(formularioDeposito).submit(realizarDeposito);
$(formularioTransferir).submit(realizarTransferencia);
$(formularioComprar).submit(comprarDolares);
$(formularioVender).submit(venderDolares);
$(formularioPrestamos).submit(pedirPrestamo);


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

function comprarDolares(e) {
  e.preventDefault();

  let compra = dolarCompra * inputComprar.value;

  if(!inputComprar.value) {
    Swal.fire({
      title: 'No ingresó ningún valor',
      icon: 'error',
      backdrop: true,
      showCloseButton: true,
      confirmButtonColor: '#004AAD'
    })
  } else if (compra > depositoAnterior) {
    Swal.fire({
      title: 'No tienes suficiente dinero',
      icon: 'error',
      backdrop: true,
      showCloseButton: true,
      confirmButtonColor: '#004AAD'
    })
  } else {
    Swal.fire({
      title: 'La compra se realizó correctamente',
      icon: 'success',
      backdrop: true,
      showCloseButton: true,
      confirmButtonColor: '#004AAD'
    })

    depositoAnterior = depositoAnterior - compra;
    compraAnterior = compraAnterior + parseFloat(inputComprar.value);
    cuentaPesos.innerHTML = `$${depositoAnterior}`;
    cuentaDolar.innerHTML = `U$D${compraAnterior}`;
  }
  formularioComprar.reset();
}

function venderDolares(e) {
  e.preventDefault();

  let venta = dolarVenta * inputVender.value;

  if(!inputVender.value) {
    Swal.fire({
      title: 'No ingresó ningún valor',
      icon: 'error',
      backdrop: true,
      showCloseButton: true,
      confirmButtonColor: '#004AAD'
    })
  } else if (compraAnterior < inputVender.value) {
    Swal.fire({
      title: 'No tienes suficiente dinero',
      icon: 'error',
      backdrop: true,
      showCloseButton: true,
      confirmButtonColor: '#004AAD'
    })
  } else {
    Swal.fire({
      title: 'La compra se realizó correctamente',
      icon: 'success',
      backdrop: true,
      showCloseButton: true,
      confirmButtonColor: '#004AAD'
    })
    depositoAnterior = depositoAnterior + venta;
    cuentaPesos.innerHTML = `$${depositoAnterior}`;
    compraAnterior = compraAnterior - parseFloat(inputVender.value);
    cuentaDolar.innerHTML = `U$D${compraAnterior}`;
  }
  formularioVender.reset();
}

function pedirPrestamo(e) {
  e.preventDefault();

  const prestamoNombre = document.getElementById('prestamoNombre').value;
  const prestamoTelefono = document.getElementById('prestamoTelefono').value;
  const prestamoEmail = document.getElementById('prestamoEmail').value;
  const prestamoImporte = document.getElementById('prestamoMonto').value;

  if(!prestamoNombre || !prestamoTelefono || !prestamoEmail || !prestamoImporte) {
    mostrarAlerta('Debes completar todos los campos', 'error');
  } else {
    mostrarAlerta('Prestamo confirmado, verifique su cuenta')
    depositoAnterior = depositoAnterior + parseInt(prestamoImporte);
    cuentaPesos.innerHTML = `$${depositoAnterior}`;
  }
  formularioPrestamos.reset();
}

function mostrarAlerta(mensaje, tipo) {
  const alertas = document.querySelector('.alertas');

  const div = document.createElement('div');
  

  if(tipo === 'error') {
    div.classList.add('err');
  } else {
    div.classList.add('confirm');
  }

  alertas.innerHTML = ''
  div.textContent = mensaje
  alertas.appendChild(div);

  setTimeout( ()=> div.remove(), 3000);
}