const { expect } = require('chai');
const { getSumArray, getMultiArray, getFactorialArray, getFactorialSum } = require('../ProjectEuler_20');

//Run only these tests with npm test -- --grep '20'

describe('20', () => {
    describe('getSumArray', () => {
        it('simple', () => {
        expect(getSumArray([0,1], [2,1])).to.eql([2,2]);
        });
        it('medium', () => {
        expect(getSumArray([9,2,5], [2,9,9])).to.eql([1,2,5,1]);
        });
        it('hard', () => {
        expect(getSumArray([9,2,5,9,9,8,4,5,6,8], [2,9,9,1,2,3,5,8,7,6,5,3,5,6,4,2])).to.eql([1,2,5,1,2,2,0,4,4,5,6,3,5,6,4,2]);
        });
    });
    describe('getMultiArray', () => {
        it('simple', () => {
        expect(getMultiArray([1,2,3], [2])).to.eql([2,4,6]);
        });
        it('medium', () => {
        expect(getMultiArray([5,6,7], [3])).to.eql([5,9,2,2]);
        });
        it('hard', () => {
        expect(getMultiArray([5,6,7], [3,5])).to.eql([5,4,5,0,4]);
        });
        it('veru hard', () => {
        expect(getMultiArray([1,2,3,4,5,6,7,8,9], [5,4,3,2,1])).to.eql([5,4,7,2,9,5,2,9,5,2,9,1,2,1]);
        });
    });
    describe('getFactorialArray', () => {
        it('simple', () => {
        expect(getFactorialArray(10)).to.eql([0,0,8,8,2,6,3]);
        });
    });
    describe('getFactorialSum', () => {
        it('medium', () => {
        expect(getFactorialSum(10)).to.equal(27);
        });
        it('hard', () => {
        expect(getFactorialSum(100)).to.equal(648);
        });
    });
});