const fs = require('fs');
const colors = require('colors/safe');

const createFile = async ( number, limit, table = false ) => {
     // WriteFile (path, data, callback)
     // WriteFileSync (path, data)
     try {     
          let output = '';
          let tableOut = '';
          for(let i = 1; i <= limit; i++) {
               output += `${number} x ${i} = ${number * i}\n`;
               tableOut += `${colors.yellow(number)} ${colors.red('x')} ${colors.yellow(i)} ${colors.red('=')} ${colors.yellow(number * i)}\n`;
          }

          if(table) {
               console.log(colors.green("========================"));
               console.log(colors.green(`Tabla de multiplicar ${colors.yellow(number)}`));
               console.log(colors.green("========================"));
               console.log(tableOut);
          }

          fs.writeFileSync(`./outputs/tabla-${number}.txt`, output);

          return `${colors.rainbow(`tabla-${number}.txt creada correctamente`)}`;
     } catch (error) {
          return "No tiene permisos para escribir en este disco"; 
     }
}

module.exports = {
     createFile
}