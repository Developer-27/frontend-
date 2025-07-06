var allbtn = document.querySelectorAll("button")
var body = document.querySelector("body")



allbtn.forEach(function(elem){
    elem.addEventListener("click", function(){
        body.style.backgroundColor = elem.innerHTML

    })
   
    
    })
