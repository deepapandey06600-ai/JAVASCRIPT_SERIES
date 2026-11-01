//  ways to write string

let str = "Deepa";
let str2 = 123;
// console.log( str + str2 + "vlue");

// // way--2nd
// console.log(`Name is ${str}  and value is ${str2}`);

// //way--3rd
// let s1 = new String("Deepa Pandey");
// console.log(s1);

// //String Methods

let gamecounter = "deepapandeygmail.com";
// console.log(gamecounter[8]);
// console.log(gamecounter.length);
// console.log(gamecounter.charAt(3));
// console.log(gamecounter.indexOf('g'));
// console.log(gamecounter.toLowerCase());
//console.log(gamecounter.substring(0,8));
//console.log(gamecounter.slice(0,8));




 let newstr = "   whitespaces   ";
// console.log(newstr);
// console.log(newstr.trim());
// console.log(newstr.trimEnd());
// console.log(newstr.trimStart());
 
console.log(newstr.replace("whitespaces" ,"blackspaces"))

console.log(newstr.includes("black"));

let str3 = " hell0- world-welcome to - this lecture"
console.log(str3.split('-'));

// to learn more string methods go through mdn refrence 