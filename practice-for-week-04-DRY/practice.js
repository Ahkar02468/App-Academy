function checkBigger(num1, num2){
  if(num1 > num2){
    return num1;
  }else{
    return num2;
  }
}

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum;
  bigNum = checkBigger(num1, num2);
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum;
  bigNum = checkBigger(num1, num2);
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum;
  bigNum = checkBigger(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog;
  smallDog = checkBigger(weight1, weight2);
  if(smallDog !== weight1){
    return `I adopted a dog that weighs ${weight1} pounds.`;
  }else if(smallDog !== weight2){
    return `I adopted a dog that weighs ${weight2} pounds.`;
  }
}

// console.log(multiplyBiggerNumByTwo(2, 4));
// console.log(divideBiggerNumByThree(2, 4));
// console.log(eatMostTacos(2, 4));
// console.log(adoptSmallerDog(4, 3));


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};