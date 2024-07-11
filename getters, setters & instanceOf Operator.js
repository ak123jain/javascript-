class Animal{
    constructor(name){
        this._name = name
    }
    fly(){
        alert("allah huak bar")
    }
    get name(){
        return this._name
    }
    set name(newname){
         this._name = newname
    }
}

// object
let a = new Animal("akash");
a.fly()
//a.name = "jack"// ham setter function se value ko set kar sakte ha
console.log(a.name)

// INSTANCE OF OPERATOR = it allow us to check wheather an obj belong to a certain class
//A class defines object properties including a valid range of values, and a default value
console.log(a instanceof Animal)
// 







