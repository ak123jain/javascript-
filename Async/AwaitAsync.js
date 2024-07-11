// ham kisi bhi function ko  Async/Await ban sakte ha or phir uska baad 
// ham usma promise ko await kar sakte ha
// Async/Await function always return promise
// we are using .then()for result in promise
// ham async function ka andar .then() use nahi karta 
// ham vaha bas promise ko await karata ha or uska baad ham usko return kar detye ha


// async function harry(){
//     return 5
// }

// harry().then((value)=>{
//     alert(value)
// })

async function harry(){
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 deg")
        },1000)
    })
    let PuneWeather = new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("78 peg")
        },4000)
    })
    // delhiWeather.then(alert)// ham direct bhi likh sakte ha .then ka andar jo bhi value hogi vo direct alert
    // PuneWeather.then(alert)
    // ab ham promise ko wait kra sakte ha using await
    // 
    console.log("fetching delhi weather please wait")
    let delhiW = await delhiWeather//  jab tak is promise ki value resolve nahi ho gati TAB TAK AAGA NAHI BADEGA
    console.log("fetched delhi weather : " + delhiW)
    console.log("fetching pune weather please wait")
    let puneW = await PuneWeather //  jab tak is promise ki value resolve nahi ho gati
    console.log("fetched pune weather : " + puneW)
    return [delhiW,puneW]
}
console.log("welcome to weather ctrl room")
let a = harry()// function ko call kari or /jo value return kari vo aayegi kyuki jaha call kari vahi return hoti ha
a.then((weatherdetail)=>{
    console.log(weatherdetail)
})


// agar ham ek or Async function banaye to vo parallelly chalte ha
// aalag aalag Async function parralelly execute hote ha

// OVERALL HAM HAM Async AWAIT LAGA KAR KISI KO BHI WAIT KARA SAKTE HA
// HAM ESKO KAHI BHI LAGA SAKTE HA 
// WITH Async/AWAIT HAM PROMISE FUNCTION KO wait kara sakte ha