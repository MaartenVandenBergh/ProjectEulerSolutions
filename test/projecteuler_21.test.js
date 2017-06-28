const { expect } = require('chai');
const { 
    isPrime,
    discoverAmicableNumber,
    discoverAmicableNumberWithEuler,
    discoverAmicableNumberWithThabit,
    sumOfAmicableNumbersUnder 
} = require('../ProjectEuler_21');

//Run only these tests with npm test -- --grep '21'

describe('21', () => {
    describe('isPrime', () => {
        it('simple is', () => {
            expect(isPrime(2)).to.be.true;
        });
        it('simple is not', () => {
            expect(isPrime(6)).to.be.false;
        });
        it('medium is', () => {
            expect(isPrime(101)).to.be.true;
        });
        it('medium is not', () => {
            expect(isPrime(102)).to.be.false;
        });
        it('hard is', () => {
            expect(isPrime(997)).to.be.true;
        });
        it('hard is not', () => {
            expect(isPrime(992)).to.be.false;
        });
    });
    describe('discoverAmicableNumber with euler', () => {
        it('simple', () => {
            expect(discoverAmicableNumberWithEuler(1, 2)).to.have.members([220,284]);
        });
    });
    describe('discoverAmicableNumber with thabit', () => {
        it('simple', () => {
            expect(discoverAmicableNumberWithThabit(1)).to.have.members([220,284]);
        });
    });
    describe('sum of Amicable numbers under 10000', () => {
        it('medium', () => {
            expect(sumOfAmicableNumbersUnder(10000)).to.have.members([220,284]);
        });
    });
    /*describe('discoverAmicableNumbers', () => {
        it('simple', () => {
            expect(discoverAmicableNumbers(100)).to.have.members([220,284]);
        });
    });*/
});
/*test('simpleAmicable', () => {
    expect(getSumArray([0,1], [2,1])).toEqual([2,2]);
});*/

