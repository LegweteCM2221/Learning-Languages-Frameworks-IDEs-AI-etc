//Git Check and CheckBOxes these are the prperties tha determine 
// state of an HTmlcheck box of raion button

const mycheckbox = document.getElementById("mycheck");
const mystatus = document.getElementById("rad1");
const myList = document.getElementById("rad2");
const myCom = document.getElementById("rad3");
const mygitc = document.getElementById("gitcheck");
const mygit = document.getElementById("git");
const mubtn = document.getElementById("mybtn");

mubtn.onclick = function(){
  
    //Using a CheckBox
    if(mycheckbox.checked){
       mygitc.textContent = "You created all New Files";
    }else{
         mygitc.textContent = "No Creation";
    }

    //adding  status reaction
    if(mystatus.checked){
        mygit.textContent = "Status Check";
    }else if(myList.checked){
         mygit.textContent = "View List";
    }else if(myCom.checked){
           mygit.textContent = "Commited";
    }else{
        mygit.textContent = "You Have to Code Something PLs";
    }

}
//********************************************************************************************************************
//The ternary operator ? a short if and else statements helps to assign a variable based on condition
//formular ?codeture : code false

let age = 21;
let message = age >= 18 ?"Your Old Enough": "Your Under Age";
console.log(message);

let time = 12;
let watsthetime = time >= 12 ? "Its the after Noon":"Its before Nooon";
console.log(watsthetime);

let isGood = false;
let Otp = !isGood ? " Your good" : "You are not Good";
console.log(Otp);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0 ;
let ans = purchaseAmount - purchaseAmount * (discount/100)
console.log("your Total is  " + ans );

let Back = true;
let result = !Back ? "Your back coding" : "NO";
console.log(result);

//************************************************************************************ */
//Switches can be used as an efficient condition than if statement

let day = 4;
//Test variables 1,2,3,4,5,6
switch(day){
    case 1:
        console.log("It is monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is wednesday");
        break;
    case 4:
        console.log("It is THursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    default :
    console.log("It is the weekend")

}

//More on JS 

let matchscore = 3;
let winners;

switch(true){

    case matchscore > 4:
        console.log("They got clapped");
        break;
    case matchscore <= 3 :
        console.log("They tried ");
        break;
    case matchscore == 0:
        console.log("Its a Draww");
        break;
    default:
        console.log("natch did not start");
}

//***************************************************************** */
//String Methods = allows you to manipulate and work with text string

let Username = "Charles";
console.log(Username.charAt(0)); // charAT - accces the sting charactor at a string index
console.log(Username.indexOf("r"));  // Indexof return the  index of a first occurance of a string
console.log(Username.length); // gets the length of the string
Username = Username.trim();//Trim() trims the string based on condition given
console.log(Username);

Username = Username.toUpperCase();
console.log(Username)
Username = Username.toLowerCase();
console.log(Username)



Username = Username.endsWith("  "); // and Startswith() plus 
console.log(Username);

let IGname = "Theboy_RSA_Lesibe";

IGname = IGname.replaceAll("_","@") // Just like ctrl + F and ctrl H replaceing
IGname = IGname.padEnd(15,"PP"); // padstart and padend it pads up the string with caracrors kinder like when an incriptopn method

console.log(IGname);

//********************************************************** */
//String slicing  = creating a subststring 
//                 from a portion of onotther string = string.slice(start,end)

const fullname = "Charles LCM";
//let firstname = fullname.slice(0,8);
//let lastname = fullname.slice(8,11);

//using indexsub method 

let firstname =  fullname.slice(0,fullname.indexOf(" "));
let lastname =  fullname.slice(fullname.indexOf(" ") + 1 );


console.log(firstname);
console.log(lastname);

//Exercise 
const email = "Javascript@mail.com";
let Username2 = email.slice(0,email.indexOf("@"));
let exten = email.slice(email.indexOf("@"));
console.log(Username2);
console.log(exten);


//************************************************************************************************ */
//Method Chaining

//calling one method after the orther in a single line of code
//No method chaining
//let username2 = window.prompt("Enter username :  ");

//username2 = username2.trim();
//let letter = username2.charAt(0);
//letter = letter.toUpperCase();

//let strmore = username2.slice(1)
//strmore = strmore.toLowerCase();

//username2 = letter + strmore;


//******************************************************* */
//with Mothod chaining


//username2 = username2.trim().charAt(0).toUpperCase() + username2.trim().slice(1).toLowerCase();

//console.log(username2);


//***************************************************************************************** */
//Logical Operators
//AND + OR + NOT
//&& + || + !
const temp2 = 50;

if(temp2 > 10 || temp2 < 30){
    console.log("Temp good")
}else{
    console.log("Bad temp")
}


//assignment operators i did not know
//=== strict equality operator (compare if the values  and datatype are equal
//!== string inequality operator


//********************************************************* */
//While loops in JS + Do while
let login = false;
let username3;
let password;

//do{
    //username3 = window.prompt("Name : ");
    //password = window.prompt("password : ");

   // if(username3 === "charles"){
       // login = true;
        //console.log("Logged In");


    //}else{
    //    console.log("Invalid Gre");
    //}

//}while(!logi n)

//************************************************** */



