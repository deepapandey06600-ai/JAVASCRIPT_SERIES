// using object literal 
 const sym = Symbol("id");
const obj  = {
    name:"Deepa",
    age:22,
    [sym] : 812654,
    city :"Bangalore",
    email:"deepa@example.com"
}



console.log(obj.name);   // to access the value of name property in object.
console.log(obj["age"]);   // to access the value of age property in object.
console.log(obj[sym]);   // to access the value of symbol property in object.
console.log(typeof obj[sym]);   // to check the type of symbol property in object.

obj.keys(obj);   // to get the keys of the object using keys method. 
console.log(obj.keys(obj));   // to access the keys of the object using keys method.


obj.email = "udit@example.com";   // to update the value of email property in object.
console.log(obj.email);   // to access the updated value of email property in object.
 
Object.freeze(obj);   // to freeze the object using freeze method. after freezing we can't update the value of any property in object. 


obj.city = "Delhi";   // to update the value of city property in object after freezing. it will not update the value of city property in object.


console.log(obj.city);   // to access the value of city property in object after freezing. it will return the previous value of city property in object.

obj.greeting = function(){
    console.log("Hello Deepa");
}
console.log(obj.greeting());   // to access the value of greeting property in object. it will return the function definition of greeting property in object.