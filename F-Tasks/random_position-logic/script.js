var body = document.querySelector("body");
var button = document.querySelector("button");

//  ["https://www.freepnglogos.com/uploads/bug-png/bug-png-transparent-images-4.png"]

let insects =["https://th.bing.com/th/id/R.a4e11c5a12642d4f27ff00cee8c225e7?rik=bXu6mbkSyVhb6A&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwhite-star-png-transparent-background%2fwhite-star-png-transparent-background-6.png&ehk=idOfux0oh0eBc%2fNTUfdcemTOP7chg2S9lanuGMS9Oew%3d&risl=&pid=ImgRaw&r=0","https://www.seekpng.com/png/full/13-136378_white-star-png.png","https://i.pinimg.com/originals/f9/b4/ae/f9b4aeca07fcbc4ececb6e9e0044777c.png", "https://www.pngkey.com/png/full/6-61721_shining-star-png-circle.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpipLRd1LQxoR8YKvOM5KbV_dtimtr7TzaS7yFqA6DXJjtmslRpAbUgk9n5kDF8IUtpNs&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXuLivMHyd6ginKOf-PS49px1OK67eLorQiQ&s",""];

button.addEventListener("click", function(){
    var valueX = Math.floor(Math.random()*100);
    var valueY = Math.floor(Math.random()*100);
    var rotateval = Math.floor(Math.random()*360);


    console.log(valueX);



    var img = document.createElement('img');


    let randomimg = Math.floor(Math.random() * insects.length);
    img.setAttribute('src', insects[randomimg]);

    console.log(randomimg);


    img.style.height = '100px';
    img.style.position = 'absolute';
    img.style.left = valueX + '%' ;
    img.style.top = valueY + '%' ;
    img.style.transform = rotateval + 'deg';


    document.body.appendChild(img);
    
});