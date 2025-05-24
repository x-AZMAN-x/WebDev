function myFunction(){
    document.getElementById("p1").innerHTML = `I Am Clicked`;
}
const button = document.getElementById("btn2");
//Any HTML Element Is Considered As An Object If It's Stored In A Variable
button.onclick = function(){
    document.getElementById("p2").innerHTML = `I Am Also Clicked!`;
}