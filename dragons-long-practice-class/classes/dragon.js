// Your code here
class Dragon{
  constructor(name, color){
    this.name = name;
    this.color = color;
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons){
    let dragonsArr = []
    dragons.forEach(dragon => {
      dragonsArr.push(dragon.name);
    })
    return dragonsArr;
  }
}

// const dragon1 = new Dragon('Puff','black');
// const dragon2 = new Dragon('withtooth','green');
// const dragons = Dragon.getDragons(dragon1, dragon2);
// console.log(dragons); 

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}