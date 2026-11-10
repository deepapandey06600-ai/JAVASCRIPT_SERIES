// Declaring a an object using constructor  and it creates a single object.

const obj = new Object();
// const obj = {};  // using object literal
obj.name = "Deepa";
obj.age = 22;
obj.city = "Bangalore";
obj.email = "deepa@gmail.com";

// console.log(obj);

const ob = { 
    name : "Udit",
    fullname:{
        username : {
            firstname : "Udit",
            middlename : "Kumar",
            lastname : "Bhardwaj"
        }
    }
}

// console.log(ob.fullname.username.firstname);   // to access the value of firstname property in object.      

const user1 = { 1: "Deepa", 2: "Udit", 3: "Sandhya" };   // using object literal
const user2 = { 4: "Anshii", 5: "surbhii"};

// const mergedObj = Object.assign({}, user1, user2);   // using assign method to merge both objects.
// console.log(mergedObj);   // to access the merged object using assign method. {} it is considered as a target object and user1 and user2 are considered as source objects. it will merge both source objects into target object.


// using spread operator to merge both objects.
// const mergedObj2 = {...obj, ...obj2};
// console.log(mergedObj2);   // to access the merged object using spread operator.


// console.log(Object.keys(mergedObj));   // to access the keys of the merged object using keys method.

const arrobj = [
    { 
        firstname : "Deepa",
        lastname : "Pandey",
    },
    {
        firstname : "Udit",
        lastname : "Bhardwaj",
    },
    {
        firstname : "Sandhya",
        lastname : "Kumari",
    },
    {
        firstname : "Anshii",
        lastname : "Kumari",
    },
    
]
console.log(Object.keys(arrobj));   // to access the keys of the array of objects using keys method. it will return the index of each object in array.
console.log(Object.values(arrobj));   // to access the values of the array of objects using values method. it will return the values of each object in array.
console.log(Object.entries(arrobj));   // to access the entries of the array of objects using entries method. it will return the key value pair of each object in array.


