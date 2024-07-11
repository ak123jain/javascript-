// create an array of number and take input from the user to add number to the array
// let arr = [3,4,5,6,7,8]
// const prompt = require('prompt-sync')();
// let a = prompt("enter the number")// user input a = string
// a = Number.parseInt(a)// convert string to integer
// arr.push(a)
// console.log(arr)

// keep adding number to the array until 0 is added to the array
// let arr2 = [1,2,3,4,5,6]
// let a
// do{
//     const prompt = require('prompt-sync')();
//      a = prompt("enter the number")// user input a = string
//     a = Number.parseInt(a)// convert string to integer
//     arr2.push(a)   
// } while(a!=0);
// console.log(arr2)

// filter for number divisible by 10 from a given array

// let arr3 = [1,2,30,4,50,6,7,83,670]
// let n = arr3.filter((x)=>{
//     return x%10 == 0 // agar x 10 se divisible hua to return kar dege
// })
// console.log(n)

// create an array of square given number
// we use map because map return array
let arr = [1,2,3,4,5]
let v = arr.map((x)=>{
    return x*x
})
console.log(v)
