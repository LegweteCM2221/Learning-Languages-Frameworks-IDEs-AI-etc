//If Statements in JS
let age = 13;
let ans = true;

if(age>12){
    console.log("Wrong Age Buddy")
}else{
    console.log("Right Age")
}

if(!ans){
    console.log("Good")
}else{
    console.log("bad")
}

//Nested IF statements  Console Plus HTML

let health = 30 + 1;
let AreYouAbot = "Yes";

const mybutton = document.getElementById("mybtn");
let height = document.getElementById("mytxt");

mybutton.onclick = function(){
if(height.value > 100){
    document.getElementById("myh2").textContent = "Good health";
  if(health == 0){
     document.getElementById("myh2").textContent = "Impossible";
  }else{
     document.getElementById("myh2").textContent = "Height check";
        if(AreYouAbot == "Yes"){
            document.getElementById("myh2").textContent = "AI";
    }else{
     document.getElementById("myh2").textContent = "Good NO AI";
    }
  }
}else if(height.value == 30) {
     document.getElementById("myh2").textContent = "Not in good condition";
}else{
     document.getElementById("myh2").textContent = "default";
}

};
