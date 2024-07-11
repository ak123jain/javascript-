// jo hma child mil raha ha vo sirf element child ho 
// comment node or text node na ho

// child => element chid ho not text node

let b  = document.body

console.log("first child of b is:", b.firstChild)
console.log("first element child of b is : ", b.firstElementChild)
    
 //  first ele,ent child ma   hma jo child chahiye vo
 // vo element hi hona chahiye jese div , nav 
// chahe ma kina bhi space de du html ma 

// first child ma kuch bhi ho sakta ha text node or comment node

//agar hmari element(tag) ka side ma jara si bhi space ha to text node aa gata ha

// document.body.firstChildElement

// phela child jo ki element ha
// last child jo ki element ha

// document.body.LastChildElement

const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
  }

  // java script ma function ko variable ka andar store kar sakte ha