// sessionStorage & related methods
//the session storage exist only within the current browser tab another tab with same page will have a different storage

// storage event = when the data is get updated in local storage or in session storage

window.onstorage = (e) =>{
    alert("triggred when update in the same storage")
    console.log(e)
}
   // jab bhi ma local storage ko update karuga to muje update mill jyega par dusra page ma
   // ek ek site ka do page khol lege

// we can listen the onstorage event of window which is triggred when update
//are made to the same storage from other document
// the data survive page refresh but not survive after the closing or in the new tab

