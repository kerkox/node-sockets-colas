const {
    io
} = require('../server');
const {
    TicketControl
} = require('../classes/ticket-control')

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('siguienteTicket', () => {
        let nextTicket = ticketControl.siguiente();
        console.log('El siguiente ticket es: ' + nextTicket);
        client.emit('siguienteTicket', nextTicket)
    })

    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket()
    })

    // emitir un evento 'estadoActual'

});