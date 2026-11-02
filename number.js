// n may be a string value 
let n = 200;
console.log(n);
console.log(typeof n);

// to get a particular number type value so we use new object with Number()

let num1 = 400;
console.log(num1)
console.log(typeof num1);

let n2 = new Number(600);
console.log(typeof n2)
console.log(n2)

 console.log(n2.toExponential(2));
console.log(n2.toString());
console.log(n2.toFixed(3));

  console.log(n2.toExponential(2));
let othernum = 123.456;
console.log(othernum.toPrecision(4));

let hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


//==================Maths======================//

 console.log(Math);
console.log(Math.abs(-12))                   // returns only positive values
 console.log(Math.round(12.5));
console.log(Math.ceil(43.9));               //it returns top value after rounding off value 
console.log(Math.floor(12.8));               // it returns low value after rounding off value
console.log(Math.min(1,2,3,4,5,6));
console.log(Math.max(3,7,5,9,76,0));


console.log(Math.random())          //Returns a pseudorandom number between 0 and 1
console.log((Math.random()*10) + 1)     // it is used to left shift value after point and   1                                         is used to return value above 0



//Math.random() * (max - min + 1) + min creates a random decimal from 10 up to (but not including) 21; Math.floor(...) rounds it down to give a random whole number from 10 to 20, inclusive.

    const max =20;
    const min =10;
    console.log(Math.floor(Math.random()* (max - min +1)) + min);




