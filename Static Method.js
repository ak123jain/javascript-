class Animal{
 constructor(name){
    this.name = Animal.capitalize(name)// ab ye name capitalize ho kar he niklega
 }
 walk(){
    alert("amnimal " + this.name + " is walking")
 }
 static capitalize(name){
    return name.charAt(0).toUpperCase() + name.substr(1,name.length)
 }
}

let k = new Animal("tiger")
k.walk()

//static method are used to implement function that 
// belong to a class as a whole and not to any particular obj

//static variable will get the memory only once, if any object is created the value of the static variable, it will retain its value







