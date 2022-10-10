const path = require('path')

console.log(path.sep)

// Joins up the path to creat a single string
const filePath = path.join('/content', 'genSubFolder', 'testFile.txt')
console.log(filePath)


// retuns the end of the path. in this case the 'testFile.txt'
const base = path.basename(filePath)
console.log(base)

// Joins the start of the path onto the defined path.
const absolute = path.resolve(__dirname, filePath)
console.log(absolute)