const txtbox = document.getElementById("txt1");
const radT = document.getElementById("rad1");
const radF = document.getElementById("rad2");
const result = document.getElementById("result");
let temp;

function convert(){
    if(radT.checked){
     temp = Number(txtbox.value);
     temp =temp *9/5 + 32
     result.textContent = temp.toFixed(1) + "°F"
    }else if(radF.checked){
          temp = Number(txtbox.value);
          temp =(temp-32) *(5/9)
          result.textContent = temp.toFixed(1) + "°C"
    }else{
        result.textContent = "Select a Unit Bro";
    }
}


//********************************************************************************** */
//Arrays in JS

let array = ["apple","lime","lemon", "banana"];

array.push("pear");  //pushsed the elememnt in the stack;
array.pop();  // like in DSA stack it removes the last element;
array.unshift("lemon"); // addd an element to the begining of the arrayg
array.shift("apple");//shift to remove an elemnt from the beginning


//the length of an array
let length = array.length;

//index of an array
let index = array.indexOf("lemon");

for(let i = 0 ; i < array.length ; i++){
  console.log(array[i]);
}

for(let i = array.length- 1 ; i >= 0  ; i--){
  console.log(array[i]);
}
//or simple
console.log(array.sort());

//console.log(array[0]);
//console.log(array[1]);
//console.log(array[2]);
//console.log(array[3]);
//console.log(array[4]);
console.log(length);
console.log(index);
//************************************************************************** */
//Arrays using the spread operstor (...) can be used to combine two arrays
let array2 = [1,2,3,4,5,777,65,3,124,35345,87];
let array3 = [-1,-2,-4,-23,-2983]
let maximum = Math.max(...array2);
let min  = Math.min(...array2);

let numbers = [...array2 ,...array3, 0,0];
console.log(maximum);
console.log(min);
console.log(numbers.sort());


//********************************************************* */
//rest parameters = (...rest) allow a function with a variable
//numer of aruments by bunding them into an array
//spread expands an array into seperate elements
//rest bundles sepereate elements into array



function diet(...foods){
  console.log(foods);
}


const food1 = "rice";
const food2 = "beans";
const food3 = "maize";
const food4 = "milk";

diet(food1,food2,food3,food4)

// more exapnle 

function sum(...numbers){

  let result = 0;
  //iteration over array
  for(let number of numbers){
    result += number;
  }
  return result;
}

function getave(...numbers){

  let result = 0;
  //iteration over array
  for(let number of numbers){
    result += number;
  }
  return result / numbers.length;
}
const total = getave(1,2);



console.log("Total is " + total);


function combine(...array){
 
  return array.join(" ");

}

console.log(combine("MR " + " Charles "))






