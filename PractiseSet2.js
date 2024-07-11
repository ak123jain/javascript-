// Q1) use elogical operator to find that the age of person lies between 10 and 20

//&&  ||  are logical operator

// const prompt = require('prompt-sync')();// we can use prompt using this syntax


// let age = prompt("what is the age of person = ")

//age = Number.parseInt(age);

// if(age>10 && age<20){// dono condition sahi honi chahiye
//     console.log("lies between 10 and 20")
// }else{
//     console.log("does not lies")
// }


// Q2 using switch statement in js


// const prompt = require('prompt-sync')();// we can use prompt using this syntax

// let age = prompt("what is the age of person = ")

// switch(age){// switch case ma agar koi condition hit hoti ha to uske niche ki sari condition chal
//     // jati ha with default esliye ham break ka use karta ha
//     case '12':
//         console.log("your age is 12")
//         break
//     case '13':
//         console.log("your age is 13")
//         break
//     case '14':
//      console.log("your age is 14")
//      break
//      case '15':
//         console.log("your age is 15")
//         break
//      default:
//         console.log("your age is not special")               
// }

// Q3 write a js program to chech num is divisible by 2 or 3 

// const prompt = require('prompt-sync')();// we can use prompt using this syntax

// let age = prompt("what is the age of person = ")

// if(num%2==0 && num%3==0){
//     console.log("divisible")
// }
// else{
//     console.log("not divisible")
// }

// Q4 print you can drive or you cannt based on legal age

 const prompt = require('prompt-sync')();// we can use prompt using this syntax

let age = prompt("what is the age of person = ")

let a = age>18 ? "you can drive" : "you cannot drive"

console.log(a)