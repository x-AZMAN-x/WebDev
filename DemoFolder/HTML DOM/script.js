document.getElementById("p1").textContent= `I Am Manupulating This HTML File`;
document.getElementById("p2").innerHTML= `Hi, I Am Here`;
document.getElementById("p3").innerHTML= `I Am The Third One`;
function dom_func(){
    let classes = document.getElementsByClassName(`student`);
    for(let i = 0; i< classes.length; i++){
        classes[i].style.border = "3px solid blue"
    }
}