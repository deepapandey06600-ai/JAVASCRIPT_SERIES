let array = [12,34.54,0.12,"deepa","pandey",null, true,false,"UK"];
for(var i = 0; i < array.length;i++){
    if(i == 4){
        break;
        //continue
    }
    console.log(array[i])

}

 let j = 0;
// while(j < array.length){
   
//     console.log(array[j]);
//      j++;
// }

do{
    console.log(array[j]);
    j++;
} while (j < array.length)

// array.forEach(function(element){
//  console.log(element)})
    
  let arr1 = [ "win", "Guide","Pens",45,"magic",23,54332,98765];

// ARRAY METHODS

 arr1.sort();
 arr1.pop("win");
 arr1.push("Deepa");
 arr1.shift("Deepa");
 console.log(arr1);
 //console.log(arr1.unshift("Deepa"));

