// snake water gun game
let user = prompt("enter snake water gun")
let cpuI = Math.floor(Math.random() * 3);// 0 1 2 ma sa random no generate karna ka liye
// 0 for snake 1 for water 2 for gun

let cpu = ["S","W","G"][cpuI]

const match = (cpu , user)=>{
    if(cpu == user){
        return "no body is winning"
    }
    else if(cpu === "S" && user === "W"){
        return "cpu"
    }
    else if(cpu === "G" && user === "W"){
        return "user"
    }
    else if(cpu === "S" && user === "G"){
        return "user"
    }
    else if(cpu === "G" && user === "S"){
        return "cpu"
    }
    else if(cpu === "W" && user === "S"){
        return "user"
    }
    else if(cpu === "W" && user === "G"){
        return "cpu"
    }
}

let result = match(cpu,user)
//console.log( "the cpu choose : " +cpu ,"and user choose : " +user ,"and the winner is : " +result)
//console.log(`CPU choose : ${cpu} and user choose ${user} and the winner is ${result}`)

document.write(`CPU choose : ${cpu} and user choose : ${user} and the winner is ${result.toUpperCase()}`)
//   with document.write we can see the result on page