//ES6 introduces concept of classes
//NO access modifiers
class User{
    //if you don't mention constr. explicitly, 
    //JS will consider it's default constructor.
    //constructor(fname, lname){
        //this.firstName = fname;//"Pravallika";
        //this.lastName = lname;//"Medarametla";
    //}
    firstName;
    lastName;
    //firstName = "Pravallika";
    //lastName = "Medarametla";
    //method; function keyword in not allowed in a class!
    getFullName(){
        return this.firstName + " " + this.lastName;
        //return arguments[0]+" "+arguments[1];
    }
}

var un = new User();//"Pravallika", "Medarametla");
console.log(un.getFullName());
//console.log(un.getFullName("Pravallika","Medar"));
console.log(un);

//In JS, parameters are ALWAYS optional!