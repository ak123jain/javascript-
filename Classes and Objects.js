// class is a template(form) and obj are properties of the template

class railwayform{
    submit(){
        alert(this.name + "this form is submitted for train no" +this.trainno)
    }
    cancel(){
        alert(this.name + "the form is now cancel for train no "+this.trainno)
    }
    fill(givenname,trainno){// value le rahe ha
        this.name = givenname
        this.trainno = trainno
    }
}

// create a form for harry
let harryform = new railwayform()
// fill the form with harry detail
harryform.fill("harry",1234)

// create a form for rohan
let rohanform = new railwayform()

// fill the form with rohan detail
harryform.fill("rohan",7890)

harryform.submit()

harryform.cancel()