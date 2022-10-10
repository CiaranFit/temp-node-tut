const os = require('os');

// info about the current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in s
const upTime = os.uptime() / 3600
console.log(`The system uptime is ${upTime}`)

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS)