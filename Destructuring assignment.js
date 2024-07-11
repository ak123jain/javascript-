//destructing assigment is used to unpack the value from the array
// or properties from obj into distinct values

// let arr = [3,5]

// let [a,b] = arr

// console.log(a,b)

let arr = [3,4,5,6,7,8,9,67,65,45]
//let[a,b,c,d,...rest] = arr
// jitna element ko name da diya vo chale gyege usma or baki ka rest se array ma  aa gyege
//console.log(a,b,c,d,rest)

let brr = [3,4,5,6,7,56,43,23]

//let[a, , ,...rest] = brr

//console.log(a, rest)

let { a,b } = {a:1 , b:5}
console.log(a,b)

// spread operator or spread syntax

let arr1 = [3,4,5,6]// mana en values ko key values pair ma convert kardu
let obj1 = { ...arr1 }

console.log(obj1)

function sum(v1,v2,v3){
    return v1+v2+v3
}

let t = sum(...arr1)// mana function ma es tarah value pas kar sakta hu
console.log(t)


// new thing

let obj2 = {
    name:"akash",
    company:"company xyz",
    adress: "xyz"
}
//convert obj into key value pair ...obj2
console.log({...obj2,name:"johny"})

console.log({name:"johny",...obj2,})//yaha hmari value change nahi hongi




