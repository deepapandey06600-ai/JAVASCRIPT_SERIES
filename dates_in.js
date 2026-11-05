const Dates = new Date();
console.log(Dates)
console.log(Dates.toDateString());
console.log(Dates.toTimeString());
console.log(Dates.toISOString());
 console.log(Dates.toLocaleDateString());
console.log(Dates.toJSON());
console.log(Dates.valueOf());


let createDate = new Date(2023, 0, 1);
let createDate = new Date(2023, 0, 1,6,3);
console.log(createDate);
console.log(createDate.toDateString());
 console.log(createDate.toTimeString());
 console.log(createDate.toISOString());
console.log(createDate.toLocaleDateString());
console.log(createDate.toJSON());
console.log(createDate.valueOf());

let newdate = new Date(2023, 0, 1, 6, 3);
let newdate = new Date("02-12-2026");
console.log(newdate);
console.log(newdate.toDateString());
console.log(newdate.toTimeString());  
   
let timestamp = Date.now();
console.log(timestamp);
console.log(createDate.getTime());
console.log(createDate.getFullYear());
console.log(createDate.getMonth());
console.log(Math.floor(createDate.getTime() / 1000));

let dt = new Date("02-12-2025");
console.log(dt.getDate());
console.log(dt.getDay());
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());

console.log(dt.toLocaleString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));   // Output: Wednesday, February 12, 2025