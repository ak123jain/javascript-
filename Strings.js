let name = "Harry"

// console.log(name.length)
// console.log(name[0],name[3])

let friend='Akash'

//console.log(friend)

// TEMPLATE LITERALS

let boy1 = 'akash'
let boy2= 'nikhil'

let sentence = `${boy2} is a friend of ${boy1}`// this is  backtick

//console.log(sentence)

//escape sequence character -> in this we use two single quote in one string
// using \ character

let fruits = 'Bana\'na'
// console.log(fruits)
// console.log(fruits.length)// \' are one character


let name1 = "Akshat"

// console.log(name1)
// console.log(name1.toUpperCase())
// console.log(name1.toLowerCase())
// console.log(name1.slice(2,4))//2 is included 4 idx is excluded

//console.log(name1.slice(2))// 2 ka baad sare element delete

//console.log(name1.replace("Aks","ppp"))

let frid = 'aman'
let name3 = "Naman"
//console.log(name3.concat(" is a friend of ", frid))// concat used for sum

let dost1 = "prakash"
let dost2 = "           Meena              "

//console.log(dost2.trim())


// 
const Sentence = 'Neha is a good girl'
const Word = 'bad'
console.log(Sentence.includes(Word))// ye check karega ki sentence ma vo word ha ki nahi

console.log(`The word ${Word} ${Sentence.includes(Word) ? 'is' : 'is not'} in the sentence `)

// backtrack use karege $ vale me ``

console.log(`The word ${Word} ${Sentence.includes(Word) ? 'is' : 'is not'} in the sentence`)


// extract the amount out of the string

let str = "please give rs 1000"
let amount = str.slice("please give rs ".length)
console.log(amount)