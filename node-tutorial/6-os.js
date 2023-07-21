const os = require('os')

//info about cuurrent user
const user = os.userInfo()
console.log(user);

//method returns system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOS = {
    name : os.type(),
    releases : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOS);