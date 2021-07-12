const os = require('os')

console.log(os.hostname())
console.log(os.platform())

let totalMem = os.totalmem()
let freeMem = os.freemem()
console.log(totalMem-freeMem)