class User{
    constructor(){
        this.firstName = "pravallika";
        this.lastName = "Medarametla";    
    }
    firstName;// = "pravallika";
    lastName;// = "Medarametla";
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

//No multiple inheritance in JS
class Student extends User{
    constructor(){
        super(); //super in JS in MANDATORY!
        //this.userName = "pravallika";
    }
    userName = "Pranathi";
}

console.log(new Student());