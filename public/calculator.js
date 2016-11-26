document.addEventListener("DOMContentLoaded", function(event) {
  var numbersArray = [];
  var operator = [];
  function numberBuilder (){  
    if (this.className === 'number'){
    numbersArray.push(this.innerHTML);
    displayOnScreen(numbersArray);
    console.log("Input Array" , numbersArray);
    } else if (this.className === 'operator') {
      operator.push(this.innerHTML);
      console.log("Operator", operator);
    } else {
      console.log('Not number or operator', this.innerHTML);
    }
  };

  function displayOnScreen(digits){
    var screen = document.querySelector('#inputWindow');
    var newText = document.createTextNode(digits.slice(-1)[0]);
    screen.appendChild(newText);
  };

  function clearScreen(){
    var screen = document.querySelector('#inputWindow');
    screen.innerHTML = "";
    numbersArray = [];
    console.log("Numbers array in clear screen", numbersArray);
  };
      
  var zero = document.querySelector('#zero');
  var one = document.querySelector('#one');
  var two = document.querySelector('#two');
  var three = document.querySelector('#three');
  var four = document.querySelector('#four');
  var five = document.querySelector('#five');
  var six = document.querySelector('#six');
  var seven = document.querySelector('#seven');
  var eight = document.querySelector('#eight');
  var nine = document.querySelector('#nine');
  var decimal = document.querySelector('#decimal');
  var plus = document.querySelector('#plus');
  var minus = document.querySelector('#minus');
  var divide = document.querySelector('#divide');
  var multiply = document.querySelector('#multiply');
  var equals = document.querySelector('#equals');
  var clear = document.querySelector('#clear');

  zero.addEventListener('click', numberBuilder);
  one.addEventListener('click', numberBuilder);
  two.addEventListener('click', numberBuilder);
  three.addEventListener('click', numberBuilder);
  four.addEventListener("click", numberBuilder);
  five.addEventListener("click", numberBuilder);
  six.addEventListener("click", numberBuilder);
  seven.addEventListener("click", numberBuilder);
  eight.addEventListener("click", numberBuilder);
  nine.addEventListener("click", numberBuilder);
  decimal.addEventListener("click", numberBuilder);
  plus.addEventListener("click", numberBuilder);
  minus.addEventListener("click", numberBuilder);
  divide.addEventListener("click", numberBuilder);
  multiply.addEventListener("click", numberBuilder);
  clear.addEventListener("click", clearScreen);
});
