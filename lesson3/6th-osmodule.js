const os = require('os')

// info abt currwbt user
const user = os.userInfo()
console.log(user);


// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    relase:os.release(),
    totalMemo:os.totalmem(),
    freeMemo:os.freemem()
}

console.log(currentOS)