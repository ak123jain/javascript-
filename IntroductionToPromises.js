// let promise = new  Promise(function(resolve,reject){
//     alert("hello")
//     resolve(56) // esko hmna resolve kar diya 56 se
//     reject(87)
// })



// console.log("hello 1")

// setTimeout(function(){
//     console.log("hello akash in 2 second")
// },2000)

// console.log("hello  3 ")

// console.log(promise)

// js is asynchronous in nature


// asynchronous is setTimeout

//fetch google.com homepage
//fetch data from data Api
//fetch picture from the server
// print downloading

//this all work are occurring parallelly(parallel execution) and result later 
//which work is resolve or which is rejected


//Promise .then() and .catch() method

// promise ma jo bhi chij ha vo execute ho jyegi background ma because hmna promise kara ha
// or vo resolve hogi ya reject vo baad ma pata chalega

// let p1 = new Promise((resolve,reject)=>{
//     console.log("promise is pending")
//     setTimeout(()=>{
//         console.log("i am promise and i fulfilled")
//         resolve(true)
//     }, 5000)
// })

 


// fullfilled matlab order ya to resolve haga ya reject

// let p2 = new Promise((resolve,reject)=>{
//     console.log("promise is pending")
//     setTimeout(()=>{
//         console.log("i am promise but i am rejected")
//         reject(  new Error("i am an error"))
//     }, 5000)
// })

//console.log(p1,p2)// return only result pending because 5 sec baad pata chalega ki promise reject hua ki fullfilled hua bcoj of set interval

// jab jo arguement ko koi name nahi dete tab => ka use karta ha
// jab promise pura ho gata ha to uska result ki value ha vo ham .then() sa lete ha
// p1.then((value)=>{// to get the value
//   console.log(value)// ans is true
// })

// to get the error
// p2.catch((error)=>{// hmna error catch kar li
//     console.log("some error occur in p2")
// })

// then and catch method notify karta ha user ko ki aapki value mil gyi ya phir vo error ha

// resole ek value ya string pass karega or or reject error


// promise chainning.then() calls

// let pi = new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             console.log("resolve after 2 sec")
//             resolve("promise 1 done")
//          },2000)
// })

// pi.then((value)=>{
//   console.log(value)
//   let pu = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     console.log("resolve after 3 sec")
//     resolve("promise 2 done")
//     },3000)
//   })
//   return pu
// }).then((value)=>{// ye pu ka result dega
//     console.log(value)
//     return 2
// }).then((value)=>{// ab hman jo aupar value return ki ha uska result bhi ham .then sa nikal skte ha
//     console.log(value)
// })

// we can chain the promises and make them pass the
// resolved value to next .then()
// to one another lke this

// load script function with promises

// const loadScript = (src) =>{
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement("script")
//         script.src = src
//         document.body.appendChild(script)
//         script.onload = () =>{
//             resolve("first script has been loaded")
//         }
//         script.onerror = ()=>{
//             reject(0)
//         }
//     })
// }

// let promise = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// promise.then((value)=>{//promise ka result ko print karega
//     console.log(value)
//     //ham phirse ek script load kar rahe
//     return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")  
//     // ab hman jo aupar value return  ha uska result bhi hma .then sa nikal skte ha
//     // agar second script load hui to "second script ready" varna error catch kar lege
// }).then((value)=>{
//       console.log("second script has been loaded")
// })
// .catch((error)=>{
//     console.log("we are facing problem to loading the script")
// })

//  hmna esma load script function  ko promise ka sath likha
// hmna loadscript pass kari src ko or ek promise function bana diya
// agar script load ho gayi to vo resove 1 varna reject 0 or promise ka paas uska result aa gayega
// or result ham .then() sa print kar dege or reject(0) mean error
// to us error ko ham catch kar lege



// Attaching Multiple Handlers to a Promise

let p1 = new Promise((resolve,reject)=>{
    //alert("hey i am not resolved")
    setTimeout(()=>{
        resolve(1)
    },2000)
})

p1.then(()=>{
    console.log("congratulation this promis are now resolved")
})

p1.then(()=>{
    console.log("hurrayyy")
})

// dont mix with problem chainning in problem chainning jo .then() value return karegi 
// uska result nikal sakte ha .then() se  or aesa chain banti raheti ha

// .then(()=>{// this is a handler if we attache multiple handler to one promise
//      they dontt pass the result each other they work independently
// })