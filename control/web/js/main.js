//alert('HOLA MUNDO');
let avanzar = document.getElementById('avanzar');
let izquierda = document.getElementById('izquierda');
let detener = document.getElementById('detener');
let derecha = document.getElementById('derecha');
let reversa = document.getElementById('reversa');

let mensaje = document.getElementById('mensaje');

function callApi(estatus){

    // Hacer una petición para un usuario con ID especifico
axios.get('https://18.224.13.4/iot-car-control/back-end/apis/setRegistro.php?valorEstatus='+estatus)
.then(function (response) {
  // manejar respuesta exitosa
  console.log(response);
  mensaje.innerHTML = "Respuesta: <strong>" + response.data;
})
.catch(function (error) {
  // manejar error
  console.log(error);
})
.finally(function () {
  // siempre sera executado
});
}

avanzar.addEventListener('click', function ()  {
    callApi('f');
});
izquierda.addEventListener('click', function ()  {
    callApi('l');
});
detener.addEventListener('click', function ()  {
    callApi('b');
});
derecha.addEventListener('click', function ()  {
    callApi('r');
});
reversa.addEventListener('click', function ()  {
    callApi('s');
});

