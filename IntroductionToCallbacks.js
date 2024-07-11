//<!-- asynchronous action are they action that we initiate now 
//and they finish later eg settimeout

//synchronous action are the action that initiate and finish one by one -->

//eg of synchronous action

// let a = prompt("what is your name")
// let b = prompt("what is your age")
// let c = prompt("what is your favorite color")
// they are execute one by one
//console.log(a +"is" +b + "years old and has " + c + "favorite color")

// asynchronous action

console.log("start")
setTimeout(function(){
    console.log("asynchronous action initiate once and finish after given time ")
},3000)
console.log("end")

// call back function => aap ek function dete ho or vo execute ho jyega
// jab bhi vo action(jab script load ho jyegi tab) complete ho jyega tab eg hello function or onload function

function loadScript(src, callback){
    let script = document.createElement("script")
    script.src = src// script ka andar src da de
    // example <script src="IntroductionToCallbacks.js" ></script>
    script.onload = function(){// or jab vo src load  ho jyegi script ka andar tab uska liye indicator function bana diya 
        console.log("loaded script with src:" +src)
        // ham call back kar rahe ha taki function load ho gaye (hello function jo hmna diya ha ) or jab vo load ho gyega tab ham khege scrit load hogayi
        // to call back hmara us he function ko to value paas karega na taki function load ho gaye
        callback(null,src)// call back sa sath ma src ka pass kar diya function ko or error ko null paas karega
    }
    script.onerror = function(){// jab error ho tab
        console.log("error loding script with src " +src)
        callback(new error("src got some error"))// error pass karega hello function ko
    }
    document.body.appendChild(script)// body ka andar script daal de
}

 
// call back ka phela argueent error hoga

function hello(error,src){// src receive from call back and also recieve null if script load
    if(error){
        console.log(error)
        return
    }
    alert('hello world' +src)// agar function execute ho gaya to alert
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello)
//ma script load hana ka baad ek or hello name ka function bhi run karna chata hu
// matlab jab script load hogi tab (loaded script with src:) ka sath hello world bhi alaer hoga


// call back in one line = jab script load ho jyegi tab hello vala function execute ho jyega

// call back are asynchronous 
// hman function ko initiate kar diya or jab script load ho jegi tab function execute ho jyega
// that is why call back are asynchronous 



// error handling es he me aa gaya




 