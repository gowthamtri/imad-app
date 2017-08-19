console.log('Loaded!');



var counterCount = 0;

var counter = document.getElementById('counter');
var span = document.getElementById('count');
counter.onclick = function(){
    counterCount = counterCount + 1;
    span.InnerHtml = counterCount.toString();
}