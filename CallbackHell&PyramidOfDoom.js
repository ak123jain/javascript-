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
        sendEmergencyMessageToCeo()
        return
    }
    //alert('hello world' +src)// // agar function execute ho gaya to es baar alert nahi karege phir sa script load karege
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap2.bundle.min.js",hello)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap3.bundle.min.js",hello);{
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo()
        return
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap4.bundle.min.js",hello);{
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo()
        return
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap5.bundle.min.js",hello);{
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo()
        return
}
}
}

}

// teh major problem of call back is we give a full control of function (hello) to one person
// assuming so they are   doing a mistake or script load hone ka baad bhi 
// usna error true kar de this is a problem

// ham script ko load karta rahege baar baar or or error check karta rahege
// sol of call back