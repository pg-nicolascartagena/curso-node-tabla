const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false ) => {

    try {      

        let salida = '';

        for (let i = 0; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        if( listar ) {
            console.log('===================='.green);
            console.log(`  Tabla del: ${base}`.yellow);
            console.log('===================='.green);
            console.log(salida.rainbow);
        }
        

        fs.writeFile(`salida/tabla-${base}.txt`, salida, (err) =>{
            if (err) throw err;
        });

        return `Tabla del ${base}`;
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}