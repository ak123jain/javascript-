// closure => closure ek function hota ha along with its lexical enviroment matlab ek function(closure) ka sath uska lexical enviroment bind hokar aapko milta ha
// lexical enviroment matlab us function ki values

message = "good global"
function hello1(){

let message = "good morning"
console.log(message)
   
let c = function  hello2() {
console.log("i am not c " + message)
   }  
   return c// hmna ek function ko return kar diya
}
// let is a block level

c = hello1()//   
c()

// closure => closure ek function hota ha along with its lexical enviroment matlab ek function(closure) ka sath uska lexical enviroment bind hokar aapko milta ha
// lexical enviroment matlab us function ki values


function returnFunc(){
const x = () => {
        let a = 1 
        console.log(a)
const y = ()=>{
        //let a = 2 // agr y ka paas a nahi ha to vo aapna lexical parent ma a ha ki nahi vo check karega
        console.log(a)
const z = ()=>{
        //let a = 3
        console.log(a)
        }
        z()
    }
    a = 999
    y()// y ko call karna se phele a update to 999 y kas paas aapna  nahi hs to vo aapna parent ka use kar rh h
}
return x
}

 let m =  returnFunc()// a ka andar ek function banega or eska andar function ka andar ka andar ka variable bhi rhege   or  ye closure ka andar closure ka andar closure return ho sakta ha
 
 m()

// 1 2 3 2 3


// closure => closure ek function hota ha along with its lexical enviroment matlab ek function(closure) ka sath uska lexical enviroment bind hokar aapko milta ha
// lexical enviroment matlab us function ki values

