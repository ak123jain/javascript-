let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve("value 1")
    },8000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve("value 2")
    },9000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve("value 3")
    },3000)
})


let p4 = new  Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("error"))
    },1000)
})
//hma tino value ek sath print karka dikhani ha

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })

// ab tino promise 9 sec ka baad resolve hogi because tino ek sath ho rahi ha
// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

// en promise ma agar ek ka sath kuch bhi hoga to va saree promise ka sath hoga
// if one promise is reject then all promise are rejected

// let promise_all = Promise.allSettled([p1,p2,p3,p4])
// promise_all.then((value)=>{
//     console.log(value)
// })

// let promise_all = Promise.race([p1,p2,p3,p4])
// promise_all.then((value)=>{
//     console.log(value)
// })// tino ma race lag gyi jo phele resolve vo print chahe error kyu na ho

// let promise_all = Promise.race([p1,p2,p3,p4])
// promise_all.then((value)=>{
//     console.log(value)
// })


// let promise_all = Promise.any([p1,p2,p3,p4])
// promise_all.then((value)=>{
//     console.log(value)
// })

// actual resove value dega error nahi dega



// let promise_all = Promise.resolve(6)
// promise_all.then((value)=>{
//     console.log(value)
// })

let promise_all = Promise.race(new error("hey"))
promise_all.then((value)=>{
    console.log(value)
})


