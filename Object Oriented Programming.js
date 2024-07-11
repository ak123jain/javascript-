// prototype = javascript obj ki kuch special property called prototype
// that is either null or reference to another obj
// or un property ko ham use kar sakte ha eg to string
let a = {// js obj
    name2:  "akash",
    language : "javascript"
}
console.log(a)

//a.toString// ma ye chala sakta hu kyuki ya uska proto type ma ha

// we can also set the prototype of any obj

// make an obj

let p = {// js obj
    run:()=>{
        alert("run")
    }
}

a.__proto__ = p// a(obj) ka andar hmna proto type dal diya p
a.run()

// a ka proto type p ha agar ham a ma kuch operation karta ha to phele vo 
//a ma search karega phir uska prototype ma eg run


p.__proto__ = {// ye p ka proto type
    name : "jackie"
}

console.log(a.name)// phele ye a ka pass jyega phir uska proto type(p) ka paas or finally p ka proto type ma name ha jackie 
// ek chain ban gati ha proto type ki
