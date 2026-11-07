// new array methods

const arr = [2,3,4,"abc",2,"efg","kuy"];
const arr2 =["a","b",1,5,4,"c"];
// arr.push(arr2);
// console.log(arr);

// const newarr =arr.concat(arr2);
// console.log(newarr);         // in this method we can concat two or more arrays using concat method.use only one array at a time.

// using spread operator(...) concatination of two arrays
// const newarr2 = [...arr,...arr2];
// console.log(newarr2);           // we can concat two or more arrays using spread operator.

// const arr3 = [1,2,3,[5,4,6,],7,8,9,[10,11]];     // we can concatnate array inside array in a single array using flat method.and also give depth of array and don't want to give depth we can use infinity to get all the values in a single array.
// console.log(arr3.flat(3));


console.log(Array.isArray("Deepa"));   // to check whether the given value is array or not using isArray method.
console.log(Array.from("Deepa"));   // to convert string into array using from method.
console.log(Array.from("Deepa").length);   // to get the length of the array using from method.
console.log(Array.from({name:"Deepa",age:22}));    // in this case it will return empty array because it is not iterable object. we can use from method only for iterable objects.

const a1 = [1,2,3,4];
const b1 = [5,6,7,8];
const c1 = [9,10,11,12];
console.log(Array.of(a1,b1,c1));   // to create a new array using of method.


