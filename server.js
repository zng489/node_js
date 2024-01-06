console.log('Fuck Node')

// In a Node.js environment, global is an object that represents the global namespace.
// It contains various properties and functions that are available globally throughout your Node.js application.
// Printing console.log(global) in a Node.js script would show information about this global object.
// console.log(global);

const os = require('os')
const path = require('path')
const { add } = require('./math')

console.log(add(2,3))
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
// Windows_NT
// Windows 10 Pro
// C:\Users\PC

console.log(__dirname)
// C:\Users\PC\Desktop\node_js

console.log(__filename)
// C:\Users\PC\Desktop\node_js\server.js

console.log(path.dirname(__filename))
// C:\Users\PC\Desktop\node_js

console.log(path.basename(__filename))
// server.js

console.log(path.extname(__filename))
// .js

console.log(path.parse(__filename))
// {
//    root: 'C:\\',
//    dir: 'C:\\Users\\PC\\Desktop\\node_js',
//    base: 'server.js',
//    ext: '.js',
//    name: 'server'
//  }