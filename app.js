const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// Console arguments
/* const [,,arg = 'base=5'] = process.argv;
const [,base = 5] = arg.split('='); */

// Arguments with yargs
// console.log(argv);

createFile(argv.b, argv.l, argv.t)
     .then( nameFile => console.log(nameFile) )
     .catch( err => console.log(err) ) 
