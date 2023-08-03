// Your code here
class Person{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce(){
    return `Hi!, my name is ${this.firstName} ${this.lastName},and I'm ${this.age} year old.`;
  }

  // static introducePeople(...people){
  //   if(!Array.isArray(people)){
  //     console.log(`introducePeople only takes an array as an argument.`)
  //   }
  //   if(!people instanceof Person){
  //     console.log(`All items in array must be Person class instances.`);
  //   }else{
  //     return people.forEach(person => {person.introduce()});
  //   }
  // }

  static introducePeople(people) {
    if (!Array.isArray(people)) throw Error("introducePeople only takes an array as an argument.");
    
    people.forEach(person => {
      if (!person instanceof Person) {
        throw Error("All items in array must be Person class instances.");
      } else {
        person.introduce();
      }
    });
  }
}

const intro = new Person('John','Doe', 30);
const intro1 = new Person('Jane','Doe', 45);
// console.log(intro.introduce());
// console.log(intro1.introduce());
const introducePerson = Person.introducePeople([intro, intro1]);
console.log(introducePerson);


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}