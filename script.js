//CONSOLE OBJECT METHODS 
//1 ASSERT
//2 CLEAR
//3 LOG
//4 TABLE  5 WARN 6 ERROR 7 INFO
// INFO USED FOR SPECIAL INFORMATION
// ASSER FOR asserting values

console.assert(89>4000)

 
obj = {a:1, b:2 , c:3}
console.table(obj)


console.log("akash jain")

console.warn("dont drink cool")

console.info("alapahabet")

console.error("this show an error")

// i can found out the time taken between writing the letter ti and ti

console.time("ti")

console.timeEnd("ti")


// i found out the time taken for loops

console.time("forLoop")

for(let i=0;i<5;i++){
    console.log(i)
}

console.timeEnd("forLoop")

// I found out the time taken for while loop

console.time("forwhileloop")

let i=0

while(i>3){
    console.log(455)
}
i++

console.timeEnd("forwhileloop")