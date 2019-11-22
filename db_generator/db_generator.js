const fs = require('fs')
const csv = require('csv-parser')
const generateBirthDay = require('./userGenerator/birthDayGenerator.js')
const generateName = require('./userGenerator/nameGenerator.js')


const results = []

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}




console.log(generateBirthDay())

fs.createReadStream('names-state.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        const min = 0
        const max = results.length
        const names = results.map(record => { return record.name })
        console.log(generateName(names, names))

    });

