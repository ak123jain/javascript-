// program to add first n natural number
// let sum = 0;
// const prompt = require('prompt-sync')();
// let n = prompt("enter the value of n")
// for(let i=1;i<=n;i++){
//    sum += i
// }
// console.log("the sum of " +n ," natural number are " +sum)
// one thing is also noticed that the let is block level scope uski value brackets ka andar he exist karegi
// so that the value of i is not defined loop ka bahar



// let product = 1;
// const prompt = require('prompt-sync')();
// let n = prompt("enter the value of n")
// for(let i=1;i<=n;i++){
//    product *= i
// }
// console.log("the sum of " +n ," natural number are " +product)


// for in lops
// let obj = {
//   harry: 56,
//   akash:34,
//   kashish: 98,
//   akshansh:90.8
// }

// for(let a in obj){
//   console.log("marks of " +a ,"are " +obj[a]) 
// }


// for of loops

// let obj = {
//   harry: 56,
//   akash:34,
//   kashish: 98,
//   akshansh:90.8
// }

// for(let b of "harry"){// sirf tring hona chahiye
//   console.log(b) 
// }


// while loop

// const prompt = require('prompt-sync')();
// let n = prompt("enter the value of n")

// let i =0
// while(i<n){
//   console.log(i);
//   i++;
// }

// do while loop

//const prompt = require('prompt-sync')();
//let n = prompt("enter the value of n")

// let i = 6
// do{
//   console.log(i);
//   i++;
// }while(i<n)

// in do while initial value to print ho he gati ha ek baar


// for each loops 

let num = [1,2,3,4,5,6]

num.forEach((element)=>{
  //console.log(element*element)
})
 
// array from -> used to create an array from any other object or it convert into array


let name = "Akash"
let arr = Array.from(name)// it convert string into array
//console.log(arr)


let num4 = [1,2,3,4,5]


// for...of in array



// for in loops
// for(let i1 of num4){
//   console.log(i1)
// }

// map -> create a new array by performing some operation on each array element
// they return element index array
//my original aary are not change they make a new array by performing operation on old array
let a = [23,45,67]

let newArray= a.map((element,index , array)=>{ 
  //console.log(element,index ,array)
return element + 1
})

//console.log(newArray)

//array filter method => my original aary are not change they make a new array by performing operation on old array
// filter an array with values that passes the test create a new array
let aar = [4,56,8,99]
let a2 = aar.filter((aar)=>{
  return aar<10
})
//console.log(a2)

// ARRAY REDUCE METHOD => they choose first two elemnet of array for h1 and h2 and add them and the result element equal to h1 and h2 = 8 , h1 = 3
// defination : reduce an aarry to a single value
let arr3 = [1,2,8,4,5]// previous value ko add karta ha
let arrp = arr3.reduce((h1,h2)=>{
  return h1+h2
})
console.log(arrp)


// use reduce to calculate factorial of given no from a given array
// reduce return  one value

let arr4 = [1,2,3,4,5]// reduce ma 1*2 =2 , 2*3=6, 6*4=24, 24*5 = 120
let appt = arr4.reduce((x1,x2)=>{
  return x1*x2
})
console.log(appt)

