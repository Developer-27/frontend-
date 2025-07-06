var arr = [
    {
        dp: 'https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
        story: 'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
        username: 'devil girl'
    },
    {
        dp: 'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
        story: 'https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
        username:'cute girl'
    },{
        dp: 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
        story: 'https://images.unsplash.com/photo-1531416738519-cf1b25c203cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmx8ZW58MHx8MHx8fDA%3D',
        username:'pookiee'
    },{
        dp: 'https://images.unsplash.com/photo-1629783509182-68c8c190e952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmx8ZW58MHx8MHx8fDA%3D',
        story: 'https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmx8ZW58MHx8MHx8fDA%3D',
        username:'itz rupii'
    },{
        dp: 'https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmx8ZW58MHx8MHx8fDA%3D',
        story: 'https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmx8ZW58MHx8MHx8fDA%3D',
        username:'capsii'
    }
]
const images = [
    {
      photo: 'https://plus.unsplash.com/premium_photo-1676762448044-02c6e3f7ba3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      username:'clumsyPig',
      img: 'https://images.unsplash.com/photo-1559425309-bf0018a09d01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      photo: 'https://images.unsplash.com/photo-1727891521863-ba8c598bad4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
      username: 'royalGirl',
      img: 'https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      photo: 'https://images.unsplash.com/photo-1736168726520-b5737b4a2669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
      username: 'daddasQueen',
      img: 'https://images.unsplash.com/photo-1624789389787-91e252ff8dac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdpcmx8ZW58MHx8MHx8fDA%3D'
    },
    {
      photo: 'https://images.unsplash.com/photo-1736154317032-041281d75fb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D',
      username: 'brokenGirl',
      img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmx8ZW58MHx8MHx8fDA%3D'
    },
    {
     photo: 'https://images.unsplash.com/photo-1736404546691-f4c225e7a3f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
     username: 'butterFly',
     img: 'https://images.unsplash.com/photo-1633279309534-f761427548b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdpcmx8ZW58MHx8MHx8fDA%3D'
    },
    {
     photo: 'https://images.unsplash.com/photo-1736401701398-ae959ca48599?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D',
     username: 'outOfReach',
     img: 'https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGdpcmx8ZW58MHx8MHx8fDA%3D'
    },
    {
     photo: 'https://images.unsplash.com/photo-1735845934479-3c353aa56afb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D',
     username: 'rubinaSky',
     img: 'https://images.unsplash.com/photo-1515086872380-2bffbe9b935c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdpcmx8ZW58MHx8MHx8fDA%3D'
    }
];

var sum = ''
var sum2 = ''

var storiya = document.querySelector('.storiya');
var full = document.querySelector('.full');
var going = document.querySelector('.going');
var fullUser = document.querySelector('.full h2')
var post = document.querySelector('.post')

arr.forEach(function(elem,idx){
    sum += `<div class="story">
                <img id = "${idx}" src="${elem.dp}">
                <h3>${elem.username}</h3>
            </div>`

})
images.forEach(function(user){
    sum2 += ` <div class="texts">
                <div class="storiya2">
                    <img class="profile" src="${user.img}">
                </div>
                <div class="name">${user.username}</div>
            </div>
           <img src="${user.photo}">
            <div class="container">
                <div class="icons">
                    <i class="ri-heart-3-line"></i>
                    <i class="ri-chat-3-line"></i>
                    <i class="ri-send-plane-line"></i>
                </div>
                <div class="save">
                    <i class="ri-bookmark-line"></i>
                </div>
            </div>`;
});          

storiya.innerHTML = sum;
post.innerHTML = sum2;

storiya.addEventListener('click',function(dets){
  var growth = 0;
  var selectedItem = arr[dets.target.id]; // Get the selected item from the array
  var story = selectedItem.story;
  var username = selectedItem.username;

  full.style.display = 'block';
  full.style.backgroundImage = `url(${story})`
  fullUser.innerHTML = username;

  var growthInterval = setInterval(function(){
    growth++;
    if(growth>=100){
        growth = 100;
        clearInterval(growthInterval);
    }

    going.style.width = growth+'%';
  },50)

  setTimeout(function(){
    clearInterval(growthInterval);
    full.style.display = 'none';
    growth = 0+'%'
  },5000)
})
 



 