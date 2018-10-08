module.exports = function getZerosCount(number,base) {
    let copynumber = number;
    let counter = 0;
    const prime=getMultipliers(base);
    const numsOfSimPrimes = {};
    const numOfZeros = [];
    const len = prime.length;
    for (let i = 0; i < len; i++ ) {
        if (prime[i] in numsOfSimPrimes) {
            continue;
        }
        else {
            numsOfSimPrimes[prime[i]]=prime.filter(num=>num===prime[i]).length;
        }
    }
    for (let prime_key in numsOfSimPrimes) {
        if (numsOfSimPrimes.hasOwnProperty(prime_key)){
            let copynumber = number;
            counter = 0;
            while (copynumber >= parseInt(prime_key)) { //
                copynumber = Math.floor(copynumber / parseInt(prime_key)); //
                counter += copynumber;
            }
        numOfZeros.push(Math.floor(counter / numsOfSimPrimes[prime_key])); //
        }    
    }
    return Math.min(...numOfZeros);
}

function getMultipliers(number){
    let result = [];
    let curNum = number;
    let probe = 2; 

    while (curNum!==1){
        if (curNum%probe !== 0){
            probe++;}
        else {
            curNum /= probe
            result.push(probe); }
    }
    return result
}