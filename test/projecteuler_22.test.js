const { expect } = require('chai');
const { 
    readFile,
    createArrayFromFile,
    getStringScore,
    getStringScoreBasedOnPositionInArray,
    getSumOfScoresInFile
} = require('../ProjectEuler_22');

//Run only these tests with npm test -- --grep '22'

describe('22', () => {
    describe('Read file', () => {
        it('it is not empty', () => {
            expect(readFile('files/names.txt')).to.not.be.null;
        });
    });
    describe('Create array from file', () => {
        it('is an array', () => {
            expect(createArrayFromFile('files/names.txt')).to.be.an('array');
        });
        it('is sorted alphabetical', () => {
            expect(createArrayFromFile('files/names.txt')[0]).to.equal("AARON");
        });
    });
    describe('Get score for string', () => {
        it('COLIN is 53', () => {
            expect(getStringScore("COLIN")).to.equal(53);
        });
    });
    describe('Get score for string based on position', () => {
        it('COLIN is 49714 when on position 973', () => {
            expect(getStringScoreBasedOnPositionInArray("COLIN", 937)).to.equal(49714);
        });
    });
    describe('Get sum of score for string based on position', () => {
        it('"files/names.txt" is 871198282', () => {
            expect(getSumOfScoresInFile('files/names.txt')).to.equal(871198282);
        });
    });
});

