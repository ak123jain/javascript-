//create a js class to create a complex 
//number create the constructor to set the 
//real and complex part
// write the method to add two complex no in class

class complex{
    constructor(real,imaginary){
    this.real = real
    this.imaginary = imaginary
    }
    add(num){
        this.real = this.real + num.real// real ka nadar num add kar diya
        this.imaginary = this.imaginary + num.imaginary
    }
}

let a = new complex(2,4);
let b = new complex(5,6);
a.add(b)
//console.log(a.real,a.imaginary)


// create a class student from a class human override a method & see changes


class human{
    constructor(name,favfood){
      this.name = name
      this.favfood = favfood
    }
    walk(){// method
        console.log(this.name +" human is walking")
    }
}

class student extends human{//student class human class se aa rahe ha
    walk(){// over ride method
        console.log(this.name + " student is walking")
    }
}

let z = new student("gajju","aalu")
z.walk()

