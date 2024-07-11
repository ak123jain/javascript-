document.write("helllo akash")

// let a = setTimeout(function(){
//     alert("i am inside of settimeout")
// },5000)
// 5 sec baad ye alert dekhna ko milega 

// let b = prompt("do you want to run the timeout")

// if(b == "no"){
//     clearTimeout(a)
// } 

 

//console.log(a)

// set interval allow us to run a function once after the given set of time 
// eg 5000 sec

const sum = (a,b) =>{
    console.log("yes i am running" +(a+b))

}
 
setTimeout(sum,9000,1,2)
// hmna time set kara 9 sec ka baad 1 , 2 value paas hui sum variable ma

// settime out is not user choosing name it is well defined in java script
// esma ham sum variable ko 9 sec baad value paas karege


// let b = setInterval(function(){
//     alert("i am repeating after completing 5 sec")
// },5000)