// children of an element 
// child nodes = element that are directed children 
// for eg = head and body are the children of <html>
// if a <div> tag has two has <p> and <span> so they are sibling

// descendant element = All nested element , children their children and so on
// eg body tag ka andar jitna bhi tag hoge ek ka baad ek

//console.log(document.body.firstChild)
 
// so our first child is div


//console.log(document.body.lastChild)
// our last child is script

//console.log(document.body.childNodes[0])

//console.log(document.body.childNodes[1])

//element.childnode[0] == element.firstchild
// element.childnode[element.childnode.length-1] == element.lastchild


//child node matlab saree element

//console.log(document.body.childNodes[document.body.childNodes.length-1])

// we can also make array

let arr = Array.from(document.body.childNodes)

//console.log(arr)


//Parents & Siblings of an Element

// html has under two tags head and body

//head and body are sibling
// body is said to be next or right sibling of head 
//and head is said to be previous or left sibling of body
 








