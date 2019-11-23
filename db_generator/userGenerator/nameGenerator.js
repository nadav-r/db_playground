const generateRandomWithinRange = require('../generateRandomWithinRange.js')


module.exports = function generateName(firstNames, secondNames) {
    let i = parseInt(generateRandomWithinRange(0, firstNames.length))
    const first = firstNames[i]
    i = parseInt(generateRandomWithinRange(0, secondNames.length))
    const second = secondNames[i]
    return {
        firstName: first,
        secondName: second
    }
}