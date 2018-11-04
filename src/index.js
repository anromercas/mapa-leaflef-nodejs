const express = require('express');
const engine = require('ejs-mate');
const path = require('path');

//inicializaciones
const app = express();

// configuraciones
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

// rutas
app.use(require('./routes/'));

// archivos estatios
app.use(express.static(path.join(__dirname, 'public')));


// inicio del servidor
app.listen(3000, () => {
    console.log('Server on port 3000');
});