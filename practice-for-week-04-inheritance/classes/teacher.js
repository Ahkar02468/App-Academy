const Person = require('./person');

// Your code here
class Teacher extends Person{
  constructor(firstName, lastName, subject, yearsOfExperience){
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers){
    let totalExperience = 0;
    teachers.forEach((teacher) => {
      totalExperience += teacher.yearsOfExperience;
    });
    return totalExperience;
  }
}

const teacher1 = new Teacher('Ahkar', 'Shwebaw','Science', 12);
const teacher2 = new Teacher('Ahkar', 'Shwebaw','Biology', 13);
// console.log(teacher1.yearOfExperience);
const teacherExperices = Teacher.combinedYearsOfExperience([teacher1, teacher2]);
console.log(teacherExperices);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}