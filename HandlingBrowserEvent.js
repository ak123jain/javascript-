// ek reference banana ha function ka or vo he paas karna ha 
// agar ham baar baar alag function banege to uska reference alag ho gyega

//(addeventlistener) is used to assign multiple hangles to an event


// let x = function(e) {
//     alert("hello world1")
// }

// let y = function(e) {
//     alert("hello world2")
// }

// // make two function 

// btn.addEventListener('click',x)


// btn.addEventListener('click',y)

// let a = prompt("what is your favourite number")

// if(a == "2"){
//     btn.removeEventListener('click',x)
// }

let x = function(e) {
    console.log(e.target,e.type,e.clientX,e.clientY)
    alert("hello world1")
}
// e.target se jis button par click kiya vo aaya
btn.addEventListener('click',x)
// e.typeX kaha par kaha par click kara uska coordinate 




