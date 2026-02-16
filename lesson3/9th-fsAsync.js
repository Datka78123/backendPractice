const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./test/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = res;
    readFile('./test/newFile/test.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const second = res;
    writeFile(
        './test/result-async.txt',
        `here is the result : ${first} , ${second}`,
        (err,res) => {
        if(err){
            console.log(err);
            return
        }
        console.log('done');
        
        });
    });
});
console.log('starting next task');