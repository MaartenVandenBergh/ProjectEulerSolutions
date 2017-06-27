const toNumber = (string) =>{
    return parseInt(string, 10);
}
const convertNumberToReverseNumberArray = (number) =>{
    return number.toString().split("").map(toNumber).reverse();
}
const getSum = (numberA, numberB) => {
    var numberAArray = convertNumberToReverseNumberArray(numberA);
    var numberBArray = convertNumberToReverseNumberArray(numberB);
    return getSumArray(numberAArray, numberBArray).reverse().join('');
};
const getSumArray = (arrayA, arrayB) => {
    var sumArray = [];
    var baseArray;
    var otherArray;
    if(arrayA.length >= arrayB.length){
        baseArray = arrayA;
        otherArray = arrayB;
    }
    else{
        baseArray = arrayB;
        otherArray = arrayA;
    }
    baseArray.forEach((number, index) => {
        if(!sumArray[index]) sumArray[index] = 0;
        var sum = number + (otherArray.length > index ? otherArray[index] : 0) + sumArray[index];
        if(parseInt(sum/10)){
            sumArray[index + 1] = 1;
        }
        sumArray[index] = sum % 10;
    });
    return sumArray;
}
const getMultiArray = (arrayA, arrayB) => {
    var multiArray = [];
    arrayA.forEach((numberA, indexA) => {
        arrayB.forEach((numberB, indexB) => {
            var multi = numberA * numberB;
            var multiArr = new Array(indexA + indexB).fill(0).concat(convertNumberToReverseNumberArray(multi));
            multiArray = getSumArray(multiArray, multiArr);
        });
    });
    return multiArray;
};
const getFactorialArray = (number) => {
    var factorialArray = [1]
    while(number > 1){
        factorialArray = getMultiArray(factorialArray, convertNumberToReverseNumberArray(number));
        number--;
    }
    return factorialArray;
}
const getFactorialSum = (number) => {
    return getFactorialArray(number).reduce((a,b)=> a+b, 0);
}
module.exports = {
    getSumArray,
    getMultiArray,
    getFactorialArray,
    getFactorialSum
};