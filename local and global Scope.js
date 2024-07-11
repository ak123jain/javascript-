// let is block level scope matlab eski existence vahi tak rhegi jis block ma hmna eskoo use kara ha
// var is global level scope

{
    let a = 7
}

//console.log(a)// give an error bcoj this is block level scope

{
    var b = 9
}

//console.log(b)// print the value of b bcoj it is global

// function scope


let p = 87
function ax(){
    console.log(p)
    let r = 9
    console.log(r)
}

ax()
console.log(r)//give an error r is not efined