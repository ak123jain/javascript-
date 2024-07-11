let first = document.getElementById("first")
// first ka anadar hmara div element aa gaya
// first = phela element
// class = Attribute

// get class of eleemnt eg div
let a = first.getAttribute("class")
console.log(a)

// check first ka andar class naam ka attribute ha  to true return karega varna false
console.log(first.hasAttribute("class"))

console.log(first.hasAttribute("Style"))// reteurn false first ma style attribute nahi ha

//first.setAttribute("hidden","true")
// first ka andar jo class(attribute) = "hey i am akashat" ha usko hide kardo
// phela element a andat jo hmara attribute ha usko true kar diya

//phele element ma hmana do class set kar di
//first.setAttribute("class","akash amla")


first.removeAttribute("class")
// phele element ka andar class(attribute) ha usko remove kardo


// hma  aapna attribute ko data-attribute karka dalna ha html ma 
// taki future ma us naam ka attribute ban jaye js ma to vo error show na kare

console.log(first.dataset)

console.log(first.dataset.game)

console.log(first.dataset.player)
