// vars
var counter = 0;
var num1 = 0;
var num2 = 0;
var operator = "";
var result = document.getElementById("screen");
// clear a number and rest all the vars
function clearNum() {
  counter = 0;
  num1 = 0;
  num2 = 0;
  operator = "";
  result.innerText = 0;
}
// assign a number on click
function assignNum(a) {
  if (num2 == 0) {
    num2 = result.innerText = a.innerText;
  } else {
    result.innerText += a.innerText;
    num2 += a.innerText;
  }
}
// convert number to percentage
function percentOperator() {
  console.log("hi");
  num1 = result.innerText = percentNum();
  operator = "";
  num2 = 0;
  counter = 0;
}
// equal operator
function equalOperator() {
  if (counter > 0) {
    switch (operator) {
      case "+":
        console.log("hi");
        num1 = result.innerText = sumNum().toFixed(2);
        operator = "";
        num2 = 0;
        break;
      case "-":
        num1 = result.innerText = minusNum().toFixed(2);
        operator = "";
        num2 = 0;
        break;
      case "x":
        num1 = result.innerText = multiplicationNum().toFixed(2);
        operator = "";
        num2 = 0;
        break;
      case "÷":
        num1 = result.innerText = divideNum().toFixed(2);
        operator = "";
        num2 = 0;
        break;
      case "^":
        num1 = result.innerText = powNum().toFixed(2);
        operator = "";
        num2 = 0;
        break;
    }
  } else {
    result.innerText = "Err";
  }

  counter = 0;
}
// check which operator and do the math function
function check(a) {
  if (counter > 0) {
    switch (operator) {
      case "+":
        console.log("hi");
        num1 = result.innerText = sumNum().toFixed(2);
        operator = a.innerText;
        num2 = 0;
        break;
      case "-":
        num1 = result.innerText = minusNum().toFixed(2);
        operator = a.innerText;
        num2 = 0;
        break;
      case "x":
       num1 = result.innerText = multiplicationNum().toFixed(2);
        operator = a.innerText;
        num2 = 0;
        break;
      case "/":
        num1 = result.innerText = divideNum().toFixed(2);
        operator = a.innerText;
        num2 = 0;
        break;
      case "^":
        num1 = result.innerText = powNum().toFixed(2);
        operator = a.innerText;
        num2 = 0;
        break;
    }
  } else {
    operator = a.innerText;
    if (num1 == 0) {
      num1 = num2;
    }
    num2 = 0;
    counter++;
    result.innerText = 0;
  }
}
// sum function
function sumNum() {
  return +num1 + +num2;
}
// minus function
function minusNum() {
  return num1 - num2;
}
// divide function
function divideNum() {
  return num1 / num2;
}
// multiplication function
function multiplicationNum() {
  return num1 * num2;
}
// pow function
function powNum() {
  let answer = 1;
  for (let i = 1; i <= num2; i += 1) {
    answer = answer * num1;
    console.log(num1);
  }
  return answer;
}
// Percent number
function percentNum() {
  return num2 / 100;
}
// lenth check
function len(p){
  var i=0;
  var count=0;
while(p[i]!=undefined){
  
  count++;
  i++;
}
return count;
}
