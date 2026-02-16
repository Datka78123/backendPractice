const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./test/first.txt', 'utf8')
const second = readFileSync('./test/newFile/test.txt', 'utf8')

writeFileSync('./test/newFile/result.txt', 
                `here is the result : ${first} , ${second}`,
                {flag:'a'})

console.log(first, second)
console.log('done with the task')
console.log('starting the next one')