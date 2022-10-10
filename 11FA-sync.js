const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first)
console.log(second)

// creates a file with the name of the first argument, and content of the second.
//third comment is a flag to choose weather to append.
writeFileSync(
    './content/third.txt', 
    `here is the restult ${first}, ${second}`,
    {flag: 'a'}
)

console.log('done with this task')
console.log('starting the last task')