// try {
//     harry
// } catch (error) {
//     console.log(error.name)// reference error
//     console.log(error.message)// harry is not defined
// }

// try {
//      throw new Error("harry is not good")
// } catch (error) {
//     console.log(error.name)// reference error
//     console.log(error.message)// harry is not good

// }

// try {
//     throw new ReferenceError("harry is not good")
// } catch (error) {
//    console.log(error.name)// reference error
//    console.log(error.message)// harry is not good
// }



// try {
//     console.log(harry)
//     throw new ReferenceError("harry is not good")
// } catch (error) {
//    console.log(error.name)// reference error
//    console.log(error.message)// harry is not good
//    console.log(error.stack)
// }           

try {
        let age =prompt("enter your age")
        age = Number.parseInt(age)
        if(age > 150){
            throw new ReferenceError("this is probably not true")
        }
                      
    } catch (error) {
       console.log(error.name)// reference error
       console.log(error.message)// harry is not good
       console.log(error.stack)
    }




