//  let ctittle = document.getElementsByClassName("card-title")[0]
//  ctittle.style.color = "red"

// let tittle = document.getElementById("carrd")
// console.log(tittle)
// tittle.style.color = "blue"

let cardd = document.querySelectorAll(".card-title")
// es class ki jitni bhi query hogi vo sab select kar lega

cardd[0].style.color = "pink"
cardd[1].style.color = "yellow"
cardd[2].style.color = "green"

console.log(cardd)

document.querySelector(".this").style.color = "black"

console.log(document.getElementsByTagName("a"))

console.log(document.querySelector(".card").getElementsByTagName("a"))
// card class ka andar jitna bhi a tag vale element hoge unha select kar lega

console.log(document.getElementsByName("search"))

// us element ko ham pata kar sakte ha by name se