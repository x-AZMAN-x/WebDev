function one_func(){
    let classes = document.getElementsByClassName(`planet`);
    for(let a = 0; a< classes.length; a++){
        classes[a].style.border = "2px solid red"
    }
}
function two_func(){
    let classes = document.getElementsByClassName(`planet`);
    for(let b = 0; b< classes.length; b++){
        classes[b].style.border = "2px solid white"
    }
}