let express = require('express');
let socket = require('socket.io');
let app = express();
let server = app.listen(3000);
let io = socket(server);
app.use(express.static('public'));

console.log("Está funcionando el servidor");

io.on('connection', newConnection);

function newConnection(socket) {
    console.log('Usuario Conectado: ' + socket.id);

    socket.on('mouse', mouseMsg);
}

function mouseMsg(data) {
    console.log(data);
}