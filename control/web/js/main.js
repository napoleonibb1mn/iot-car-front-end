//alert('HOLA MUNDO');
let avanzar = document.getElementById('avanzar');
let izquierda = document.getElementById('izquierda');
let detener = document.getElementById('detener');
let derecha = document.getElementById('derecha');
let reversa = document.getElementById('reversa');

let mensaje = document.getElementById('mensaje');

function callApi(estatus){

    // Hacer una petición para un usuario con ID especifico
axios.get('https://3.17.4.88/iot-car-control/back-end/apis/setRegistro.php?valorEstatus='+estatus)
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
    callApi('w');
});
izquierda.addEventListener('click', function ()  {
    callApi('a');
});
detener.addEventListener('click', function ()  {
    callApi('p');
});
derecha.addEventListener('click', function ()  {
    callApi('d');
});
reversa.addEventListener('click', function ()  {
    callApi('s');
});

