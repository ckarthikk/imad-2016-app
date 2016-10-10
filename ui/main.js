console.log('Loaded!');

//Change the Main Text
var element = document.getElementById('mainText');
element.innerHTML = "New Text";

//Move the Image
var imgElement = document.getElementById("madi");
imgElement.onClick = function(){
    var interval = setInterval(moveRight, 100);
}

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    imgElement.style.marginLeft = marginLeft + "px";
}