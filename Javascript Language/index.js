//Testing Console and the alert 
//console.log("Hello")
//window.alert("click to say ok")

//document.getElementById("myid").textContent = "Hello"
//document.getElementById("myp").textContent = "Racks"


// Variables and Declaration  

//declaration
//let x;

//assignment
//x = 100;

// declaration and assignment 
//let x2 = 100;


//Integers and Double declaration
//let Temparature = 12'
//let h3ight = 12.5;


//Strings and Booloeans
// Let name = Charlie;
// let status = true;
//let  Lstatus = false; 

//variables and declaration Testing using Browser Console
//let age = 25;
//let price = 500;
//let names = "Charles LockManager"
//let gpa = 6.7;

//console.log('You are '+ age + ' years old')
//console.log('The price is ' + price )
//console.log('Your email is ' + gpa)
//console.log('Your status is '+ true)
//console.log("Your Name is "+ names)


//let fullname = "Charlie";
// let age = 54;
//let  student = false
//document.getElementById("p1").textContent = "Yourname is " +fullname;
//document.getElementById("p2").textContent = "Your age is " +age;
//document.getElementById("p3").textContent = "Are you a student "+student;

//Arithimatic Operators in JS and Testing Using Console
// -----> +=*/
//let student = 30;

// Subtraction
//student = student-1;
//student -=1;
//student++;


//Addition
//student = student+ 1;
//students += 1;
//student--;

//multiplication
//student = student *2;
//students *= 2;

//Devition
//student = student /  2;
//student /= 2;

//exponatial
//student = student **2;
//student **= 2;

//modulus
//student = student % 2;
//student %= 2;


//console.log(student)


//Operator Precedence
/*
list of operators by preference 
1. paranthisis
2. exponents
3. Multiplication , devision or modulus
4. Addition and Subtraction
*/

//Testing 

//let ans= 1 + 2* 3 + 4**2;
// 1 + 2*3 + 16 -- solve the exponents first
//1+ 6 + 16 -- solve multiplication 
//ans = 23
//console.log(ans)

//let ans= 12 % 5 + 8 / 2 + (2*10);
//solve the parenthisis 2 * 10 = 20
//ans = 12 % 5 + 8 / 2 + 20
//solve modulus 12 % 5 = remainder = 2
//ans = 2 + 8/2 + 20
//solve devision 8/2 =4 
// ans = 2 + 4 + 20 == 26
//console.log(ans)

 
//JS how to accept input The fastest way
// Using window prompt


//let username ;
//username = window.prompt("What is your User Name");
//console.log(username);
//document.getElementById("mybtn").onclick= function(){


  //assigning the username to input
 //username = document.getElementById("mytxt").value;
//Outputing the username using textContent of myid = header 
//document.getElementById("myid").textContent = "Hello " + username;
/// console.log(username);
//};

//**************************************************************************************** 
//Type Converstion the process of changing one data type to the orther 
//let age = window.prompt("How Old");

//Type converstion
//age = Number(age);
//age++;

//console.log(age, typeof age);
  //let x = 0;
 // let y = "chacha";
//  let z = "";

  //Type conversion
  //x = Number(x);
  //y = String(y);
  //z = Boolean(z);

  // Saving 
  //console.log(x , typeof x);
  //console.log(y , typeof y);
 // console.log(z, typeof z);


//******************************************************************** */
// Const In JS

//const PI = 3.12159;
//let radious ;
//let cercumference;


//radious = window.prompt("enter rad");

//cercumference = 2* pi * radious
//console.log(cercumference)



//document.getElementById("mybtn").onclick = function(){
 // radious = document.getElementById("mytxt").value;
  //radious = Number(radious);
 // cercumference = 2* PI * radious;
 // console.log(cercumference);
 // document.getElementById("myid").textContent = cercumference;
//};

const decrease = document.getElementById("btndec");
const increase = document.getElementById("btninc");
const reset = document.getElementById("btnreset");
const counter = document.getElementById("lblcount");
let count = 0;

increase.onclick = function(){
  count++;
  counter.textContent = count
}
  let count2 =1;
  
decrease.onclick = function(){
  count--;

  if(count < 0){
    count = 0;
    count2 +=1 ;
    if(count2> 1){
      window.alert("Shame on You for double clicking")
    }
    window.alert("Negative Only Exists In Math Buddy")
  }
  counter.textContent = count
}

reset.onclick = function()
{
  count = 0;
  counter.textContent = count
}
// math a built on pbject that provies a collectopn of properties and methods 
// tesiting

//let x = 3.24
//let y = 3;
//let c;

//c = Math.floor()
