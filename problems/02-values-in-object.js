/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

function valuesInObject(obj) {
  // Your code here
  let arr = [];
  for(let keys in obj){
    arr.push(obj[keys]);

  }
  return arr;
}


// let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
// let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
const animalValue = valuesInObject({
  dog: "Wolfie",
  cat: "Jet",
  bison: "Bilbo"
});
console.log(animalValue);// => ["Wolfie", "Jet", "Bilbo"]
const foodValue = valuesInObject({
  apple: "tart",
  lemon: "sour",
  mango: "sweet"
});
console.log(foodValue); // => ["tart", "sour", "sweet"]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
