function one(){
    document.getElementById("result").innerHTML += "1";
}
function two(){
document.getElementById("result").innerHTML += "2";
}
function three(){
    document.getElementById("result").innerHTML += "3";
}
function four(){
    document.getElementById("result").innerHTML += "4";
}
function five(){
    document.getElementById("result").innerHTML += "5";
}
function six(){
    document.getElementById("result").innerHTML += "6";
}
function seven(){
    document.getElementById("result").innerHTML += "7";
}
function eight(){
    document.getElementById("result").innerHTML += "8";
}
function nine(){
    document.getElementById("result").innerHTML += "9";
}
function zero(){
    document.getElementById("result").innerHTML += "0";   
}
function z(){
    document.getElementById("result").innerHTML += "0";
    
}
function add() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = a + b;
}

function sub() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = a - b;
}

function mul() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = a * b;
}

function div() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = a / b;
}
function del() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerHTML = "";
}
function equal() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = eval(a + document.getElementById("result").innerHTML + b);
}
function press(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let exp = document.getElementById("display").value;
  try {
    document.getElementById("display").value = eval(exp);
  } catch {
    document.getElementById("display").value = "Error";
  }
}

