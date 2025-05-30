let square = document.querySelector(`.square`)

function changeToCircle(){
    square.style.height = "250px";
    square.style.width = "250px";
    square.style.borderRadius= "50%";
}
function changeToOval(){
    square.style.height = "200px";
    square.style.width = "300px";
    square.style.borderRadius= "50%";
}
function changeToSquare(){
    square.style.height = "250px";
    square.style.width = "250px";
    square.style.borderRadius = "0%";
}
function changeToRectangle(){
    square.style.borderRadius = "0%";
    square.style.height = "200px";
    square.style.width = "300px";
}
function hide(){
    square.style.display = "none";
}
function show(){
    square.style.display = "block";
}
square.onmouseenter = function(){
    square.style.background = "green";
}
square.onmouseout = function(){
    square.style.background = "none";
}
function changeToColor(){
    square.style.background = "red"
}