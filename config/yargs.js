const argv = require('yargs')
          .options({
               'b': {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la multiplicación'
               },
               'l': {
                    alias: 'limit',
                    type: 'number',
                    demandOption: true,
                    describe: 'Marca el limite de la multiplicación'
               },
               't': {
                    alias: 'table',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla por consola'
               }
          })
          .check((argv, options) => {
               if( isNaN( argv.b ) ) {
                    throw 'La base tiene que ser un número';
               }
               else if( isNaN( argv.l ) ) {
                    throw 'El limite tiene que ser un número';
               }
               return true;
          })
          .argv;

module.exports = argv;