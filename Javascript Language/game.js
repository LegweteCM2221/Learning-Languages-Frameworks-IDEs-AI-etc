const minnum = 1;
const maxnum = 100;

const answer = Math.floor(Math.random() * (maxnum - minnum + 1));



console.log(answer);
let counter = 0;
let guess;
let run = true;

/* 
while(run){
  guess = window.prompt("Guess a number between out minimum and maximum");
  guess = Number(guess);

  if(isNaN(guess)){
    window.alert("Enter a valid Numer")
  }else if(guess < minnum || guess > maxnum){
    window.alert("The number you have entered must be betweeen 1 - 100");
  }else{
    counter =  counter + 1;
    if(guess < answer){
        window.alert("Too Low try again")
    }else if(guess > answer){
       window.alert("Too High try again")   
    }else{
        window.alert("Correct answer after alot of tries lool at the counter : " + counter );
        run = false;
    }
    
  }
    
}
console.log(guess);

*/

//************************************************************** */
//functions in JS

function jumper(){
    console.log("Jump");
     console.log("Jump");
      console.log("Jump");
       console.log("Jump");
        console.log("Jump");
}

console.log(jumper());
/*
function countto5(){
    console.log(1);
     console.log(2);
      console.log(3);
       console.log(4);
        console.log(5);
}
*/
//console.log(countto5());

function add(x, y){
  let result = x + y 
  return result;
}
console.log(add(1,2));

function isvalidemail(email){

  if(email.includes("@")){
    return true ;
  }else{
     return false;
  }

}
console.log(isvalidemail("char@gmail.com"))


//************************** */
//variable scope 
//where a variable is accessible and reconized (local vs global)

function fn1(){
  let x = 4
  console.log(x)
}

function fn2(){
  let x = 6
  console.log(x)
}
fn2();
fn1();