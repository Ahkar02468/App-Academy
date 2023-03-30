/***********************************************************************
Write a function `setKeyInObject(obj, string, value)` that takes in three
parameters. The first parameter is an object, the second parameter will be a
string and the third parameter will be a value. Your job is to return the object
adding the second parameter as a key using the third parameter as its value.

Examples:

let obj = {}
setKeyInObject(obj, "apple", "yum"); // => {apple: "yum"}

let obj1 = {str: "hello"}
setKeyInObject(obj1, "num", 3); // => {str: "hello", num: 3}
***********************************************************************/

function setKeyInObject(obj, string, value) {
  // Your code here
  // let keyAndObject = {};
  // // if(obj === null){
  // //   keyAndObject = {string, value};
  // // }
  let keyAndObject = ""
  for(let key in obj){
    let keys = key;
    console.log(keys);
    keyAndObject = { keys:obj[key], string: value}
  }
  // const keyAndObject = {obj.key:obj.value, string:value};
  return console.log(keyAndObject);
}

let obj = {str: "hello"}
setKeyInObject(obj, "num", "3"); // => {apple: "yum"}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = setKeyInObject;
