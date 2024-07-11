// agar error nahi ha to try ka andar run ho gata ha or ha to catch ma chala jata ha
// but in finally closure hamesha execute hoga

// try{
//     let a= 0// not an error
//     console.log(program)// error ha to catch ma jyega
//     console.log("program run sucessfully ")// ya run nahi hoga kyuki error aa gaya
// }
// catch(err){
//     console.log("this is an error")
//     console.log(p)// catch ka andar bhi error
// }
// finally{// error ho tab bhi run hoga chahe try ma ho ya catch ma
//     console.log("i am good boy")
// }

// with the help of finally ka andar ka code ko run kar sakte ha  chahe error ho tab bhi


const f = ()=> {
    try{
        let a= 0// not an error
        console.log("program run sucessfully ")// ya run nahi hoga kyuki error aa gaya
        return // eska return karna sa phele he finally vala code  run ho jyega
    }
    catch(err){
        console.log("this is an error")
        console.log(p)// catch ka andar bhi error
    }
    finally{// error ho tab bhi run hoga chahe try ma ho ya catch ma
        console.log("i am good boy")
    }
}

 f()// eska paas return value aayegi tab end run hoga
 console.log("end")
// 

//  if there is a return in try finally is executed just before the control return to the outer code
//
//finally used in to // 1 to close the file
// 2 exit the loop
  