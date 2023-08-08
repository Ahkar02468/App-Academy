class Business{
    toString(){
        return 'Give us money';
    }
}

class Retail extends Business{
    toString(){
        return 'Buy some stuff!!'
    }
}

class AutoRepairShop extends Business{};

class Charity{};

console.log(new Retail().toString());
console.log(new AutoRepairShop().toString())
console.log(new Charity().toString());