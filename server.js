let express = require('express');
let app = express();
let server = app.listen(3030);
app.use(express.static('public'));

console.log("Está funcionando el servidor");