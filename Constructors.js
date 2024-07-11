//Constructors hmara jab bhi call hota ha jab bhi kisi class ka obj banata ho aapna aap
// jab bhi obj ko banaya jata ha tab bhi constructor chalta ha
//aapna aap

//constructor = to initialize the obj or to set the initial value of obj
 
class railwayform{

constructor(givenname,trainno){
    console.log("constructor is calling " + givenname +  " with train no "+ trainno)
    this.name = givenname// matlab ab ham givenname ko this.name bhi likh sakte ha
    this.trainno = trainno
}
    submit(){
        alert(this.name + "this form is submitted for train no" +this.trainno)
    }
    cancel(){
        alert(this.name + "the form is now cancel for train no "+this.trainno)
    }
     
}

// create a form for harry
let harryform = new railwayform("harry1",987)// obj of an class
// constructor jab he call hoga jab ham kisi class ka obj banata ha

 

// create a form for rohan
let rohanform = new railwayform("harry2",9876)// 2 obj of an class

 

harryform.submit()

harryform.cancel()