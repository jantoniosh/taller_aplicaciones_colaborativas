let express = require('express');
let socket = require('socket.io');
let app = express();
let port = process.env.PORT || 4000;
let server = app.listen(port);
let io = socket(server);
app.use(express.static('public'));

console.log("Servidor Corriendo");

io.on('connection', newConnection);

function newConnection(socket) {

    function random_color() {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let r = Number(x).toString(16);
        let g = Number(y).toString(16);
        let b = Number(z).toString(16);
        if (r.length == 1) {
            r = '0' + r;
        }
        if (g.length == 1) {
            g = '0' + g;
        }
        if (b.length == 1) {
            b = '0' + b;
        }
        return '#' + r + g + b;
    }

    let color = random_color();

    console.log(color);
    socket.emit('color', color);
    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        console.log(data);
        socket.broadcast.emit('datos', data);
    }
}