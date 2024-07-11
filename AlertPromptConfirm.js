alert("enter the value of a")

let a = prompt("enter a here")

a = Number.parseInt(a)// convert string into number

alert("you entered a of type " + (typeof a))

//document.write(a) direct write karna ka liye

let write = confirm("do you want to write it on to the page")
if(write){
    document.write(a)
}
else{
    document.write("please allow me to write")
}