let square = document.querySelector(`.square`)
function changeToCircle(){
    square.style.borderRadius= "50%";
}
function changeToSquare(){
    square.style.borderRadius = "0%";
}
function hide(){
    square.style.display = "none";
}
function show(){
    square.style.display = "block";
}
square.onmouseenter = function(){
    square.style.background = "blue";
}
square.onmouseout = function(){
    square.style.background = "none";
}