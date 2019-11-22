module.exports = function getRandomWithinRange(min, max) {
    return Math.random() * (max - min) + min;
}