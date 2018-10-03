module.exports = function getZerosCount(number,base) {
  let counter = 0;
  const prime=getMultipliers(base);
  const len = prime.length;
  const lastPrime = prime[len-1]
  const numOfsimilMult=prime.filter(num=>num===lastPrime).length;
  while (number >= lastPrime)
  {
    number = Math.floor(number / lastPrime);
    counter += number;
  }
  // return Math.floor(counter);
  return Math.floor(counter/numOfsimilMult);
}

function getMultipliers(number){
  let result = [];
  let curNum = number;
  let probe = 2; 
  
  while (curNum!==1){
      if (curNum%probe !== 0){
          probe++;
          }
      else {
          curNum /= probe
          result.push(probe);
          }
      }
  return result
  }
  //console.log(getZerosCount(60559525, 147));