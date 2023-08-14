// Your code here
const Dragon = require('./dragon')


class FriendlyDragon extends Dragon{
    constructor(name, color, lifeGoals, friend){
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals(){
        for(let goal of this.lifeGoals){
            console.log(`${this.name} likes to ${goal}`);
        }
        return;
    }
    helpsPeople(){
        return `${this.name} helps their friend ${this.friend}`;
    }
}

// const puff = new FriendlyDragon(
//     "Puff",
//     "green",
//     [
//       "live by the sea",
//       "frolick in the autumn mist",
//       "help small children"
//     ],
//     "Jackie Paper"
//   );

//   console.log(puff.hasLifeGoals());

try{
    module.exports = FriendlyDragon;
}catch{
    module.exports = null;
}