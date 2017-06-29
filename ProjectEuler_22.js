const fs = require('fs');

Object.defineProperty(String.prototype, 'cleanOfChar', {
    value : function (char) {
        return this.replace(new RegExp(char, 'g'), '');
    }
});

const readFile = (path) => {
    return fs.readFileSync(path).toString();
};
const createArrayFromFile = (path) => {
    return readFile(path).cleanOfChar('"').split(',').sort();
};
const getStringScore = (str) => {
    let score = 0;
    [...str].forEach((char) => {
        score += char.charCodeAt(0) - 64;
    })
    return score;
};
const getStringScoreBasedOnPositionInArray = (str, index) => {
    return getStringScore(str) * (index + 1);
};
const getSumOfScoresInFile = (path) => {
    let sum = 0;
    createArrayFromFile(path).forEach((str, index) => {
        sum += getStringScoreBasedOnPositionInArray(str, index)
    });
    return sum;
}

module.exports = {
    readFile,
    createArrayFromFile,
    getStringScore,
    getStringScoreBasedOnPositionInArray,
    getSumOfScoresInFile
};