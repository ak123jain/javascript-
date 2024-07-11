class Animal{
    constructor(name,color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + " is running")
    }
    shout(){
        console.log(this.name + " is shouting")
    }
}

class Monkey extends Animal{
    eatbanana(){
        console.log(this.name + " is eating banana")
    }
    hide(){
        console.log(`${this.name} is hiding`)
    }
}

let ani = new Animal("monty","white")
let mo = new Monkey("chimpu","blue")

ani.shout()
mo.eatbanana()
mo.hide()

// extend keyword is used to extends the another class