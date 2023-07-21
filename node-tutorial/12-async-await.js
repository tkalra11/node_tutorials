const {readFile , writeFile} = require('fs').promises
// const util = require('util')

// const readFile = util.promisify(readFile)
// const writeFile = util.promisify(writeFile)

// const getText = (path) => {
//     return new ((resolve , reject ) => {
//         readFile(path , 'utf-8' , (err,res) => {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(res);
//             }        
//         })
//     })
// }


const start = async() => {
    try {
        const first = await readFile('./content/first.txt' , 'utf-8')
        const second = await readFile('./content/second.txt' , 'utf-8')        
        console.log(first , second);

        await writeFile('./content/result.txt' , `This is awesome : ${first} , ${second}` , {flag : 'a'})  

    } catch (error) {
        console.log(error)
    }
}

start()
// getText('./content/first.txt').then(res => console.log(res)).catch(err => console.log(err));