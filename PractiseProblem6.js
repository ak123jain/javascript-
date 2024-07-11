// write a program using prompt function to take input of age as a value 
// from the user and use alert to tell him if he can drive

//  let age = prompt("what is the age of person")
//  age = Number.parseInt(age)

// const canDrive = (age)=>{
//     return age>=18?true:false
// }


// The if condition evaluates to true, and the code inside
//  the if block is executed. 
// The alert "yes you can drive" is displayed.


 
//  let age = prompt("what is the age of person")
//  age = Number.parseInt(age)

// if (canDrive(age)){// if return true
//     alert("yes you can drive")
// }
// else{// if return false
//     alert("no you cannot drive")
// }
  
 
// Q2 ) in Q1 use confirm to ask the user if he want to see
// the prompt again

// let age = prompt("what is the age of person")
//  age = Number.parseInt(age)

// const canDrive = (age)=>{
//     return age>=18?true:false
// }

// runAgain = true

// The if condition evaluates to true, and the code inside
//  the if block is executed. 
// The alert "yes you can drive" is displayed.


// while(runAgain){
//     let age = prompt("what is the age of person")
//     age = Number.parseInt(age)

// if (canDrive(age)){// if return true
//     alert("yes you can drive")
// }
// else{// if return false
//     alert("no you cannot drive")
// }
//  runAgain = confirm("do you want to repeat the prompt")
// }

// Q3 in the previous question use console.error to log the error
// if the age entered is negative


// const canDrive = (age)=>{// function
//     return age>=18?true:false
// }

// runAgain = true

// The if condition evaluates to true, and the code inside
//  the if block is executed. 
// The alert "yes you can drive" is displayed.


// while(runAgain){
//     let age = prompt("what is the age of person")
//     age = Number.parseInt(age)

//     if(age<0){
//         console.error("plz entered the valid age")
//         break;
//      }

// if (canDrive(age)){// if function  return true
//     alert("yes you can drive")
// }
// else{// if function return false
//     alert("no you cannot drive")
// }
//  runAgain = confirm("do you want to repeat the prompt")
// }


// Q4 write a program to change the url to google.com (redirection)
// if user entered the number is greator than 4

// let number = prompt("enter the no")
// number = Number.parseInt(number)

// if (number>4){
//     location.href = "https://google.com"
// }

// change the bgc of the page to yellow based on user 
//input through prompt

let colour = prompt("enter the page bgc colour")

document.body.style.background = colour
