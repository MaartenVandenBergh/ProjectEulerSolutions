const isPrime = (number) => {
    var isPrime = true;
    var divisor = number - 1;
    while(isPrime && divisor > 1){
        if(number%divisor == 0) isPrime = false;
        divisor--;
    }
    return isPrime;
}
const discoverAmicableNumberWithEuler = (m, n) => {
    var amicableNumberPair = null;
    const basePrimes = Math.pow(2, n - m) + 1;
    const p = basePrimes * Math.pow(2, m) - 1;
    if(isPrime(p)){
        const q = basePrimes * Math.pow(2, n) - 1;
        if(isPrime(q)){
            const r = Math.pow(basePrimes, 2) * Math.pow(2, m + n) - 1;
            if(isPrime(r)){
                const baseCalc = Math.pow(2, n);
                amicableNumberPair = [
                    baseCalc * p * q,
                    baseCalc * r
                ];
            }
        }
    }
    return amicableNumberPair;
}
const discoverAmicableNumbersWithEuler = (limit) => {
    var discoveredAmicableNumbers = [];
    var maxReached = false;

    var m = 1;
    var n = 2;
    while(!maxReached){
        var amicableNumbers = discoverAmicableNumberWithEuler(m, n);
        if(amicableNumbers[0] >= limit || amicableNumbers[1] >= limit) {
            maxReached = true;
        }
        else{
            discoveredAmicableNumbers.concat(amicableNumbers);
            
        }
    }
    return discoveredAmicableNumbers;
}
const discoverAmicableNumberWithThabit = (n) => {
    var amicableNumberPair = null;
    const p = 3 * Math.pow(2, n - 1) - 1;
    if(isPrime(p)){
        const q = 3 * Math.pow(2, n) - 1;
        if(isPrime(q)){
            const r = 9 * Math.pow(2, 2 * n - 1) - 1;
            if(isPrime(r)){
                const baseCalc = Math.pow(2, n);
                amicableNumberPair = [
                    baseCalc * p * q,
                    baseCalc * r
                ];
            }
        }
    }
    return amicableNumberPair;
}
const discoverAmicableNumbersWithThabit = (limit) => {
    var discoveredAmicableNumbers = [];
    var maxReached = false;

    var n = 2;
    while(!maxReached){
        var amicableNumbers = discoverAmicableNumberWithThabit(n);
        if(amicableNumbers[0] >= limit || amicableNumbers[1] >= limit) {
            maxReached = true;
        }
        else{
            discoveredAmicableNumbers.concat(amicableNumbers);
            
        }
    }
    return discoveredAmicableNumbers;
}
const sumOfAmicableNumbersUnder = (limit) => {
    var maxReached = false;
    var n = 1;
    var amicableNumbers = [];
    while(!maxReached){
        
    }
}

module.exports = {
    isPrime,
    discoverAmicableNumberWithEuler,
    discoverAmicableNumberWithThabit,
    sumOfAmicableNumbersUnder
};