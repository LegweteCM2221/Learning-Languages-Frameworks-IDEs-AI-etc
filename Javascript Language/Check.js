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
//formular ?codeture : code valese

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


