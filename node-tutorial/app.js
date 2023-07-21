const http = require('http')

const fs = require('fs')
const { error } = require('console')

http.createServer((req , res) => {
    // const text = fs.readFileSync('./content/big_file.txt' , 'utf-8')
    // res.end(text)

    const fileStream = fs.createReadStream('./content/big_file.txt' , 'utf-8')
    fileStream.on('open' , () => {
        fileStream.pipe(res)
    })
    fileStream.on('error' , (err) => {
        console.log(err);
    })
}).listen(5000)