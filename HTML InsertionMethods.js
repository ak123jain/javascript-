// HTML insertion method

let a = document.getElementsByTagName('div')[0]
// a = div.comtainer or div.first or unka andar ki text
console.log(a)

//a.innerHTML = a.innerHTML +'<h1>hello world</h1>';
// inner html karka insertion kardo 

// seond method
let div = document.createElement('div')
div.innerHTML = '<h1>hello world</h1>'// koi bhi naya elemnt add karna ka liye
//a.appendChild(div)

//a.prepend(div)
// div container ka hi element ha
// prepand matlab container ma sabse aupar aayega

//a.before(div)
// before ma ye ha to vahi par container sa aupar aa gaya ab

//a.after(div)
// container ka sabse niche

a.replaceWith(div)
// hello world ko replace kar diya a se


















