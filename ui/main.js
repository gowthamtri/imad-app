console.log('Loaded!');

var element = document.getElementById('main-text');
element.InnerHtml= "updated content";

var img = document.getElementById('img');
img.onclick = function(){
    img.style.marginleft = '80px';
};
