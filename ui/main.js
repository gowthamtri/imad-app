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

var button = document.getElementById('counter');

button.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counterCount = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counterCount;
            }
        }
    };
    
    request.open('GET', 'http://gowthamtri.imad.hasura-app.io/counter', true);
    request.send(null);
};

var sButton = document.getElementById('submit');

sButton.onclick = function(){
    var nameInput = document.getElementById('name');
    
    var names = ['1','2','3','4'];
    var list = '';
    for (var i=0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>';
    }
    var nameList = document.getElementById('name-list');
    nameList.innerHTML = nameList;
};









