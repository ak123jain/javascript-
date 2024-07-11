// create a nav bar and change the colour of its first element to red

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// Q2 create a table without tbody now use "view page source" button to check wheather it has a tbody or not

// ans is no bcoj view page source aapko dikhata ha kya aapna likha ha 
// lekin ma inspect(element) ma check karuga to tbody milegi kyuki vo auto correct ho gyegi

// Q3 create an element with 3 children now change the  bgc color of first and last element to green 

document.body.getElementsByTagName("nav")[0].firstElementChild.style.color = "cyan"

document.body.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

// Q4 write a js program to change background of all <li> tags to blue

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.background = "blue"
})
// agar ham for eack ka use kar rahe ha to array.from karn apadega

// Q5 which of the following is used to look for the farthest ancestor that matches a given css selector
//a matches b closest c contain d none
// none is ans bcoz dur ka ansestor ko search karna ka liye nahi ha paas ka closest css selector ha 

// matches, closest,n  contain are css selector or enka andar jo hma search karni hoti ha vo ansestor




