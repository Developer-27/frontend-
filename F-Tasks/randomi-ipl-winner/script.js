var teams = [ 'MI💙', 'CSK💛', 'GT😻', 'RR💗', 'LSG🤗', 'PBKS😍', 'SRH🧡', 'KKR💜', 'DC😊', 'RCB💖'];


var body = document.querySelector("body");
var btn = document.querySelector("button");
var box = document.querySelector("#box")

btn.addEventListener("click", function(){
    var winner = Math.floor(Math.random()*teams.length);
    box.innerHTML = teams[winner]


    
    btn.style.color = "yellow";
    box.style.color= "white";
    box.style.fontSize = "40px";
    box.style.backgroundColor = "transparent";
    btn.style.backgroundColor = "black";

    


})