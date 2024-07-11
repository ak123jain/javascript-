

 let  z= 67;
 //console.log(z);

 //we use let and const to declare variable in javascript we cannot change the value after declare with let 
 //or const we only change the variable value when we use var data type

 var s = 76;
// console.log(s)

 var s =46;
 //console.log(s)

 // but when we use let or const we cannot change the value of that variable in whole program



// 7 PRIMITIVE DATA TYPE -> nn bb ss u

let a = null;
let b = 456;
let c = true;
let d = BigInt("456") + BigInt("98");
let e = "Harry"
let f = Symbol(" I am aksh");
let g = undefined;


//console.log( a, b, c, d, e, f);

//console.log(typeof d);
//console.log(typeof c);
//console.log(typeof f);


// NON PRIMITIVE DATA TYPE -> OBJECTS IN JAVA SCRIPT

const item = {
    "Harry" : true,
    "Lovish" : 78,
    "Akash" : false,
    Akashat: undefined,
}

//console.log(item["Harry"],item["Akash"],item["Akashat"],item["Lovish"])


// EXPRESSION AND CONDITIONALS

let x = 4;
let y = 5;
// console.log("x+y=",x+y)
// console.log("x%y=",x%y)
// console.log("x/y = ",x/y)
// console.log("x = ",x)
// console.log("x++ = ",x++)// hmna phele print kara or baad ma increment kara
// console.log("x =",x)
// console.log("x+y=",x+y)
// console.log("x+y=",x+y)
// console.log("x-- = ",x--)
// console.log("x =",x )
// console.log("++x=",++x)// hmna phele increment kara phir print kara
// console.log("--x = ",--x) // hmna phele decrement kara phir print kara



// LOGICAL OPERATOR

let x1 = 5;
let y1 = 8;

//console.log(x1<y1 && x1==y1)// esma dono contion sahi honi chahiye tab ye true return karega
//console.log(x1<y1 && x1!=y1)

//console.log(x1<y1 || x1!=y1)//esma dono ma sa koi ek condition bhi true hogi to chalega true return karega
 


/* COMMENTS */


//Prompt aapse question puchta ha
// alert aapko message alert karta ha
/// alert is not working check in another way


const prompt = require('prompt-sync')();// we can use prompt using this syntax

//  let i = prompt('hey whats your age');

//  i = Number.parseInt(i);
//  if(a>0){
//      console.log("valid age")
//  }

//  else{
//     console.log(" not valid age")
//  }

 let age = prompt("whats your age")
 console.log("you can", age<18 ? "not drive" : "drive" )

 //  condition ? expression1 : expression2  -> for above