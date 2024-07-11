// write a program to show different alert when different button are clicked
//see on html ans

//Q2 create a website which is capable of storing bookmarks of your 
//favorite website using href
// ans in html

// Q3 repeat Q2 using event listner 


let a = document.getElementById("google")

a.addEventListener("click",function(){
    window.location = "https://google.com"
})

let b = document.getElementById("hotstar")
b.addEventListener("click",function(){
    window.location = "https://hotstar.com"
})

let c = document.getElementById("twitter")

c.addEventListener("click",function(){
    window.location = "https://twitter.com"
})

