var img = document.querySelector('img');          //move element
var moveX = 0;
var moveY = 0;

document.addEventListener('keydown',function(dets){
   if(dets.code == 'ArrowRight'){
     moveX++
     img.style.left = moveX + '%'
   }
   else if(dets.code == 'ArrowLeft'){
     moveX--
     img.style.left = moveX + '%'
   }
   else if(dets.code == 'ArrowDown'){
    moveY++
    img.style.top = moveY + '%'
  }
   else if(dets.code == 'ArrowUp'){
    moveY--
    img.style.top = moveY + '%'
  }
   else{
    console.log('other key pressed');
   }
})

var body = document.querySelector('body');
var cursor = document.querySelector('.cursor');
var h1 = document.querySelector('h1')

body.addEventListener('mousemove',function(dets){
     cursor.style.left = dets.x + 'px'
     cursor.style.top = dets.y + 'px'
    
})
h1.addEventListener('mouseenter',function(){
    cursor.style.scale = 4
})
h1.addEventListener('mouseleave',function(){
    cursor.style.scale = 1
})