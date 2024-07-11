// class Employee{
//     login(){
//         console.log(`employee has log in`)
//     }
//     logout(){
//         console.log(`employee has logged out`)
//     }
//     requestLeaves(leaves){
//         console.log(`employees has requested ${leaves} leaves`)
//     }
// }

// class programmer extends Employee{// ma employee ka saree method use kar sakta hu jo ki muje extend karka mile
//     requestCofee(x){
//         console.log(`employee has requested ${x} coffee`)
//     }
//     requestLeaves(leaves){// hmna requestleave vale arguement ko override karka usko ek jada leave da di that is called override function
//         console.log(`employees has requested ${leaves + 1} leaves(one extra)`)
//     }
// }
 
// // ma employee ko bhi call kar saktu or programmer ko bhi
// let a = new Employee()
// //let a = new programmer()// ma prorammer ko call karka bhi employee ka saree method use kae sakta hu

// a.login()
// a.requestLeaves(4)

//override = hmara do function ha or usma sa ek function ka arguement na dusra function ka arguement ko overide kar diya

//mana employee class ka method ko puri tareka sa override nahi kara tha mana super key ka use karka usko bhi chala diya
// or ab ma programmer class ma bhi using super key employee class ka method ko use kar sakta hu

// class Employee{

//     login(){
//         console.log(`employee has log in`)
//     }
//     logout(){
//         console.log(`employee has logged out`)
//     }
//     requestLeaves(leaves){
//         console.log(`employees has requested ${leaves} leaves`)
//     }
// }

// class programmer extends Employee{// ma employee ka saree method use kar sakta hu jo ki muje extend karka mile
//     requestCofee(x){
//         console.log(`employee has requested ${x} coffee`)
//     }
//     requestLeaves(leaves){ 
//         super.requestLeaves(5)// ye karna sa jo mera parent method ka requestleave ha vo call ho gyega
//     }
// }
 
// // ma employee ko bhi call kar saktu or programmer ko bhi
// //let a = new Employee()
// let a = new programmer()// ma prorammer ko call karka bhi employee ka ek method use kae sakta hu kyuki hmna super key ka use kara ha

// a.login()
// a.requestLeaves(4)

// 

class Employee{

    constructor(name){// ye name defaut constructor na pass kara
        console.log(` ${name} constructor is calling`)
        this.name = name
    }

    login(){
        console.log(`employee has log in`)
    }
    logout(){
        console.log(`employee has logged out`)
    }
    requestLeaves(leaves){
        console.log(`employees has requested ${leaves} leaves`)
    }
}

class programmer extends Employee{// ma employee ka saree method use kar sakta hu jo ki muje extend karka mile
    // constructor(){// ya aapna aap ek default  constructor bana deta ha or aupar jo constructor ha vo call ho gata ha aapna aap(in child class)
    //     super()// harry ya name default constructor ka paas aayega or vo usko pass kar dega to parent class
    // }
    requestCofee(x){
        console.log(`employee has requested ${x} coffee`)
    }
    requestLeaves(leaves){ 
        super.requestLeaves(5)// ye karna sa jo mera parent method ka requestleave ha vo call ho gyega
    }
}
 
// ma employee ko bhi call kar saktu or programmer ko bhi
//let a = new Employee()
let a = new programmer("harry")// ma prorammer ko call karka bhi employee ka ek method use kae sakta hu kyuki hmna super key ka use kara ha
// harry ya name default constructor ka paas jyega
a.login()
a.requestLeaves(4)