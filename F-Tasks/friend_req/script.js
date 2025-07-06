var btn = document.querySelector("button");
var text = document.querySelector("h5");

let flag = 1;
let rand ;
btn.addEventListener('click',function(){             //adding as a friend in random time
    if(flag === 1){
        text.innerHTML = "sending request..."
        btn.innerHTML = "Adding"
        text.style.color = "purple"
        setTimeout(function(){
        text.innerHTML = "Friends";
        text.style.color = "green"
        btn.innerHTML = "Remove friend"; 
        rand = Math.floor(Math.random()*10000);
        console.log(rand);
        },rand)
        flag = 0;
    }
    else{
        text.innerHTML = "Stranger";
        text.style.color = "red"
        btn.innerHTML = "Add friend";
        flag = 1;
    }
    
})