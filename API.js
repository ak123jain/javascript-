// fetch API => syntax of fetch api
// let promise = fetch(url,option)without option jo ham (get request) bhej sakte ha 
// with option you ham (post request ) bhej sakte ha

// let promise = fetch("https://goweather.herokuapp.com/weather/UP")

// promise.then((response)=>{
//     return response.json
// }).then((response)=>{
//     console.log(response)
// })

// fetch api ek promise return karti ha esliye ham .then() use kar rahe


// javascript can be used to send and retrive Information
// from the network when needed(AjAX)
// ASYNCHRONOUS JAVASCRIPT AND XML

// fetch is used to get data over the internet
// an obj of response class containning "status" and "ok" properties
// status = the https status code eg 200
// ok = boolean here if the https status code 200-299

// let promise = fetch("https://goweather.herokuapp.com/weather/UP")

// promise.then((response)=>{
//     console.log(response.status)
//         console.log(response.ok)
//         console.log(response.headers)
//     return response.json
// }).then((response)=>{
//     console.log(response)
// })

// response.json text ma convert karta ha
// ham response.text ya response.json dono ma sa ek he kar sakte ha

// REQUEST HEADER = TO SET A REQUEST HEADER IN FETCH WE 
//                  CAN USE HEADER FUNCTION
// let res = fetch((url)=>{
//     header;
//     authentication :Secret;
// })
     
// RESPONSE HEADER = THE RESPONSE HEADER ARE AVAIBLE IN 
//                    REQUEST HEADER



// SENDING POST REQUEST WITH FETCH API


// fetch API => syntax of fetch api
// let promise = fetch(url,option)without option jo ham (get request) bhej sakte ha 
// with option you ham (post request ) bhej sakte ha

// to make a post request , we need to use fetch option 
// 1. method = HTTPS-METHOD EG POST
// 2. body = the request body

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'akash',
//     body: 'buddy',
//     userId: 1200,
//   }),
//   headers: {
//     'Content-type': "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

  // json.stringify => json.stringify ek js object ko string ma convertkar deta ha

  //in async and await

//   const CreateTodo = async () =>{
//     let option = {
//         body: JSON.stringify({
//             title: 'akshath',
//             body: 'buddy',
//             userId: 1200,
//           }),
//           headers: {
//             'Content-type': "application/json",
//           },
//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts',option)// hmna option ma url pass kar diya
//     let response = await p.json()
//     return response
// }

// const mainFunc = async()=>{
//     let todo = await CreateTodo()
//     console.log(todo)
// }
// mainFunc()

// abki baar todo paas karka
/// abki baar todo supply karka create kar sakta hu 
// ham async function ka andar .then() use nahi karta 
// ham vaha bas promise ko await karata ha or uska baad ham usko return kar detye ha

//esliye ye async/ await function banaya taki .then() ka use na kare
// phele promise ko await karlo phir uska result ko await karlo or phir return kardo jo ki ek promise hogi


const CreateTodo = async () =>{
    let option = {
        body: JSON.stringify(todo),
          headers: {
            'Content-type': "application/json",
          },
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts',option)// hmna option ma url pass kar diya
    let response = await p.json()
    return response
}

const mainFunc = async()=>{
    let todo = {
        title : 'akansha',
        body :'bhaiii',
        userId :1100,
    }
    let todor = await CreateTodo(todo)
    console.log(todor)
}
mainFunc()
 
  