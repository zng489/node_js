const fs = require('fs');

fs.readFile('./starter.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

console.log('Fuck')

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was a uncaught error: ${err}`);
    process.exit(1);
})