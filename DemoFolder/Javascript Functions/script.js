//Functions
function sumOftwoNums(n1,n2){
    let sum = n1+n2;
    return sum;
}
//Calling Or Invoking A function
document.getElementById("p1").innerHTML = sumOftwoNums(54,29);
//Function Expression
let add = function(x,y){
    return x+y;
}
document.getElementById("p2").innerHTML = add(392,104)
//Arrow Function
let multiply = (o,p) => o*p;
document.writeln(multiply(8,4))

let oddOrEven = function(z){
    if(z%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
};
document.getElementById("p3").innerHTML = oddOrEven(7291);