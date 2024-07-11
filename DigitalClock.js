// create the digital clock uisng set interval 
// and data obj can be used to get the data time hours , 
// and second which can be updated using set interval try 
// to keep the ui good looking 

setInterval(() => {
    let d = new Date()
    time.innerHTML = d
},  1000);