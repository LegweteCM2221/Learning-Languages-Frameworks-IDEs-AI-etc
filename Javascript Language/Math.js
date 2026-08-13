//Math-- built-in object that provides a collection of properties and methods
let x = 3.56;
let y = 2;
let z ;


//Round method use round
//Testing
//z = Math.round(x);

//To round down we use "floor"
//x = 3.56
//Testing
//z = Math.floor(x);

//To round UP we use "ceil"
//Testing 
//x = 3.21
//z= Math.ceil(x);

//Onther way to raise a base to a given power we use POW""
//x = 3
//z= Math.pow(x,y);


//To use  a squar Root we use "sqrt"
//x = 9
//z= Math.sqrt(x);

//To use a log 
//x = 144;
//z = Math.log(x);

//To use Trignomety use "sin" "cos" "tan" Extra use Sign for the sign eg -+ , abs - for the absolute value  , max = maximum value in the cortations or Min
//x = 0;
//y = 32;
//z = 65;
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.sign(x);

//let max = Math.max(x,y,z);
//let min = Math.min(x,y,z);

//console.log(max);
//console.log(min);


//************************************************************************************* */
//Random Numbers in JS


//const min = 50;
//const max = 100;
//let randomnum = Math.floor(Math.random()*(max-min))+ min;
//NB will not work ------let randomnum = Math.floor(Math.random(max,min));
//console.log(randomnum);

let mybutton = document.getElementById("mybtn");
let mylabel = document.getElementById("mylbl");
let max = 6;
let min = 1;
let Rnum;

mybutton.onclick =function()
{
    Rnum =  Math.floor(Math.random()*max) + min;
    mylabel.textContent = Rnum
}
   