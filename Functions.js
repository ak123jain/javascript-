//Immediately Invoked Function Expressions

let a = () =>{// hmna ek function banaya jo har baar ek promise return kar raha ha
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(456)
      },  4000);
    })
}

// ham chahata ha ki ham b , c , d ko individually wait kareye
// ham fun a ko individually call kar rahe taki har variable 4 sec wait kare

(async () =>{
    let b = await a()// ham b ka andar a ko wait kara rahe ha or phir a fun ko call kar rahe
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})() //hmna ese call kar diya ye he hota ha  Immediately Invoked Function Expressions

//f() hma function ko call na karni pade esliye  Immediately Invoked Function Expressions













