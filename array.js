let num = [1,2,3,4,5]
let b = num.toString()// b is now string
console.log(b, typeof b)

let c = num.join("_")
console.log(c,typeof c)

num.pop()
console.log(num)
// similar to push and pop

// let e = num.shift()// remove the element from front
// console.log(e,num)

let r = num.unshift(78)// add the element to front and give the new array length
//console.log(r,num)


let num4 = [1,2,3,4,5]
console.log(num.length)
delete num[0]
console.log(num.length)// array ma delete karna ka baad bhi vo he length rahegi



// concat method used to return new array without change existing array

let num8 = [1,2,3,4,5,6]
let num6 = [8,8,8,8,8]
let newarray = num8.concat(num6)
//console.log(newarray)

// num method  are used to sort array alphabatically with change of orignal array
// they see only first integer
 
let num76 = [22,551,3,14,5,6,7,8,229 ]
num76.sort()
//console.log(num76)

// ham sort ma compare function use kar rahe ha a-b  to ascending order ma sort or if b-a to desending order ma sort
let compare = (a,b)=>{
    return a-b
}
let num56= [22,551,3,14,5,6,7,8,229]
num56.sort(compare)
//console.log(num56)


// splice and slice method
// splice return deleted value and type of obj(array)
// and it is used to add element in the array

let num54 = [551,22,3,14,5,6,7,8]
let deletedValue = num54.splice(2,3,1021,3022,444)// mean of that 2 idx sa shuru karna ha 3 element delete karna ha or baki sab add kar de
console.log(num54)
console.log( typeof deletedValue)

// slice -> delete element in the array

const num98 = [1,2,3,4,5]
//num98.slice(2)// 2 idx se eleemnt print karega
let newnum = num98.slice(2,4) //4 idx is excluded or 2 sa 3 idx tak ka element print karega

console.log(newnum)



 
 









 
