let socket;

function setup() {
    createCanvas(500, 500);
    socket = io.connect("http://localhost:3000");
    background("#00FF00");
}

function draw() {

}

function mouseDragged() {
    let posicion = {
        x: mouseX,
        y: mouseY
    }
    noStroke();
    fill("#FF0000");
    ellipse(mouseX, mouseY, 50, 50);
    console.log(mouseX, mouseY);
    socket.emit('mouse', posicion);
}