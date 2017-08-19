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

counter.onclick = function(){
    counterCount = counterCount + 1;
    var span = document.getElementById('count');
    span.InnerHTML = counterCount.toString();
};