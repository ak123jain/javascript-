const sayHello = (name,greeting)=>{
    console.log(greeting,name)
}

sayHello("harry","good morning")

// const x = {
//     name : "harryyy",
//     role:"soft ware engineer",
//     exp: 30,
//     show: function() {
//         //console.log(this) //give an   object
//         //console.log(this.name)// give an element of array
//         let that = this
//         setTimeout(function()  {
//             //console.log(this)// window obj not give an obj
//             console.log(`the name is ${that.name} `)
//         },  4000);
//     }
// }
// x.show()// or this mean ye obj = const x



const x = {
    name : "harryyy",
    role:"soft ware engineer",
    exp: 30,
    show: function() {
        //console.log(this) //give an   object
        //console.log(this.name)// give an element of array
         
        setTimeout(() => {// agar ham arrow function use karta ha ha to vo automatically this aapna lexical parent se le leta ha 
            //console.log(this)// window obj not give an obj
            console.log(`the name is ${this.name} `)
        },  4000);
    }
}

x.show()// or this mean ye obj = const x