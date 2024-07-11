setTimeout(() => {
    console.log("hacking w1f1 ... pla wait")
},  1000)

//console.log(rahul) ye error show karega par ham chata ha ki error ko ham catck kar le
// or code execute ho gaye vo na ruke

try{
   console.log(rahul)
}
// es error ko handel karta ve muje console ma error de do
// par code execute ho gaye

catch(error){
    console.log("catch an error")
}

setTimeout(() => {
    console.log("fetching user name and password ... pla wait")
},  2000)

setTimeout(() => {
    console.log("hacking rahul facebook id ... pla wait")
},  3000)

setTimeout(() => {
    console.log("user name and password of rahul (+91935670000) fetched ")
},  4000)



// if we write settime function in try ka andar synchronous code handel kiya gyega
// set time out is asynchronous function
// try{
//     setTimeout(() => {
//          console.log(rahul)
//     },  100);
// }


// agar ma esko bhi handel karna chata hu to aase likh
// set time out ka andar ek or try catch

// try{
//     setTimeout(() => {
//         try {
//             console.log(rahul)
//         } catch (error) {
//             console.log("catch an error")
//         }
//     },  1000);
// }


// synchronous = one by one
// asynchronous = ek set interval of time ka baad