document.writeln(`I Am Externally Written Javascript`)
//In Modern JS, We Use let/const Identifier To Declare A variable
//Data Types Are Of Two Types:- 1) Primitive 2) Complex
//Primitive Indentifier
let string = "Something"; //Anything Written Inside Of " " Is Considered As String
const number = 359;
let box = null;
let score = 0;
const notDefined  = undefined;
//Complex Data Type
let array = [3,6,9,false,"String"];
let object = {"Manchester City":3,"Manchester United":1};

document.getElementById("result").innerHTML = string + "<br>" + number + "<br>" + box + "<br>" + score + "<br>" + notDefined + "<br>" + array + "<br>" + object;