var btn = document.querySelector("button")
var bulb = document.querySelector("#bulb")
var flag = 0

btn.addEventListener("click", function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        btn.innerHTML = "OFF"
        console.log("clicked")
        flag = 1


    }
    else{
        btn.innerHTML = "ON"
        bulb.style.backgroundColor = "white"
        console.log("againclicked")

        flag = 0
    }
})
