const path = require('path')

console.log(path.sep);

const filePath = path.join(__dirname, 'app.js')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'app.js')
console.log(absolute);