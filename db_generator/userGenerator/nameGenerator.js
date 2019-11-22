const generateRandomWithinRange = require('../generateRandomWithinRange.js')


module.exports =  function generateName (firstNames, secondNames) {
    let i = parseInt(generateRandomWithinRange(0,firstNames.length))
    const first = firstNames[i]
    console.log(i)
    i = parseInt(generateRandomWithinRange(0,secondNames.length))
    const second = secondNames[i]
    console.log(i)

    return {
        firstName: first,
        secondName: second
    }
}