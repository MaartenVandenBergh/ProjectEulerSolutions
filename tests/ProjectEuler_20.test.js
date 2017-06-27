const {getSumArray, getMultiArray, getFactorialArray, getFactorialSum} = require('../ProjectEuler_20');

test('simpleSum', () => {
    expect(getSumArray([0,1], [2,1])).toEqual([2,2]);
});
test('mediumSum', () => {
    expect(getSumArray([9,2,5], [2,9,9])).toEqual([1,2,5,1]);
});
test('hardSum', () => {
    expect(getSumArray([9,2,5,9,9,8,4,5,6,8], [2,9,9,1,2,3,5,8,7,6,5,3,5,6,4,2])).toEqual([1,2,5,1,2,2,0,4,4,5,6,3,5,6,4,2]);
});

test('simpleMultiple', () =>{
    expect(getMultiArray([1,2,3], [2])).toEqual([2,4,6]);
});
test('mediumMultiple', () =>{
    expect(getMultiArray([5,6,7], [3])).toEqual([5,9,2,2]);
});
test('hardMultiple', () => {
    expect(getMultiArray([5,6,7], [3,5])).toEqual([5,4,5,0,4]);
});
test('varyHardMultiple', () => {
    expect(getMultiArray([1,2,3,4,5,6,7,8,9], [5,4,3,2,1])).toEqual([5,4,7,2,9,5,2,9,5,2,9,1,2,1]);
});

test('simpleFactorial', () =>{
    expect(getFactorialArray(10)).toEqual([0,0,8,8,2,6,3]);
});

test('simpleFactorialSum', () =>{
    expect(getFactorialSum(10)).toBe(27);
});
test('hardFactorialSum', () =>{
    expect(getFactorialSum(100)).toBe(648);
});

