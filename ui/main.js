console.log('Loaded!');

// var element = document.getElementById('main-text');
// element.InnerHtml= "updated content";

// var img = document.getElementById('img');
// var marginLeft = 0;
// function moveRight(){
//     marginLeft = marginLeft + 1;
//     img.style.marginLeft = marginLeft + 'px';
// }

// img.onclick = function(){
//     var interval = setInterval(moveRight,50);
    
// };

var counterCount = 0;

var counter = document.getElementById('counter');
var span = document.getElementById('count');
counter.onclick = function(){
    
    span.InnerHtml = counterCount.toString();
}