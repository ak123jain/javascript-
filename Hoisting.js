// hoisting refer to the process whereby the interpreter appears to move the declaration to the top of the code before execution


console.log(a)// undefined bcoj a mana niche declare kara ha in only var but in let or const vo initializ nahi ho pata to error
var a//  appear the decleration to the top of the code in var only before execution are called hosting
greet()// appear the decleration to the top of the code before execution are called hosting

function greet(){
    console.log('this is a function')
}

 a = 9 
console.log(a)

//decleration hoisted to the top but initialization is not

// hoisting sirf var ma hoti ha lekin jab let or const use karta ha to nahi hoti ha 

// function expression are not hosted matlab decleration code ka aupar appear nahi hoti

greet1()

var greet1 = function(){
    console.log("function expression")
}

//greet1()

//note
//console.log(a)  error if let or cons is use
//let a = 7    with var undefined is printed

// let or const ma decleration aupar nahi hoti (hosting) par var ma ho gati ha decleration aupar(hosting)
