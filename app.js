const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//console.log(process.argv);
//const [ , , arg3 = 'base=5'] = process.argv;
//const [ , base = 5 ] = arg3.split('=');
//console.log(base);

//const base = 6;

crearArchivo( argv.b, argv.l )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.america))
    .catch( err => console.log(err));