var btn = document.querySelector('button')     //downloading
var h1 = document.querySelector('h1')
var growth = document.querySelector('.growth')
var message = document.querySelector('h2')
var grow = 0
var random = Math.floor(Math.random()*100)

btn.addEventListener('click',function(){
    
    var growthInterval = setInterval(function(){
        grow++
        h1.innerHTML = grow+'%'
        growth.style.width = grow+'%'
    },random)

    setTimeout(function(){
        clearInterval(growthInterval)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.4
        btn.style.pointerEvents = 'none'
        message.innerHTML = `your file is downloaded in ${random*100} miliseconds`
    },random*100)
})