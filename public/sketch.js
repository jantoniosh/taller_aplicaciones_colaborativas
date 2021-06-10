let socket;
let colorCirculo;
let load;
let size = 25;

function setup() {
    createCanvas(500, 500);
    socket = io.connect("https://taller-webscoket-ccd.herokuapp.com/");
    background("#222222");
    socket.on('color', nuevoColor);
    socket.on('datos', mostrarDatos);
    load = false;
}

function draw() {

}

function mouseDragged() {
    if (load) {
        let data = {
            x: mouseX,
            y: mouseY,
            color: colorCirculo
        }
        noStroke();
        fill(colorCirculo);
        ellipse(mouseX, mouseY, size, size);
        socket.emit('mouse', data);
    }
}

function nuevoColor(data) {
    console.log('Cliente: ' + data);
    colorCirculo = data;
    load = true;
}

function mostrarDatos(data) {
    console.log(data);
    noStroke();
    fill(data.color);
    ellipse(data.x, data.y, size, size);
}