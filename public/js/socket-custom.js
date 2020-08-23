var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('estadoActual', function (estadoActual) {
    label.text(estadoActual.actual)
})

// escuchar
socket.on('disconnect', function () {

    console.log('Perdimos conexión con el servidor');

});

$('button').on('click', function () {
    socket.emit('siguienteTicket', {}, function (info) {
        console.log("info", info);
    })
    socket.on('siguienteTicket', function (ticket) {
        console.log('Siguiente ticket es: ', ticket);
        label.text(ticket);
    })
})


// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Paul',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function (mensaje) {

    console.log('Servidor:', mensaje);

});