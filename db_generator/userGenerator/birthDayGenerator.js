const randomDate = require('./dateGenerator.js')

module.exports = function generateBirthDay() {
    const date = randomDate(new Date(1970, 1, 1), new Date())
    let year = date.getFullYear().toString()
    let month = date.getMonth()
    month += 1
    month = month.toString()
    let day = date.getDate().toString()
    month = month.length < 2 ? "0" + month : month
    day = day.length < 2 ? "0" + day : day
    const birthDay = year + "-" + month + "-" + day
    return birthDay
}