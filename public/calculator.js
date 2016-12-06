function startCalc(){
  var numbersArray = [];
  var operator = [];
  var computationValues = [];

  function numberBuilder (){  
    getValues(this.innerHTML);
    displayOnScreen(numbersArray);
  };
  
  function selectOperator(){
    updateComputationValues();

    if (computationValues.length > 1) {
      computeFirstTwoValuesInArray();
      operator= [];
    } 
  
    operator.push(this.innerHTML);
    displayOnScreen(computationValues);
  };

  function solveProblem(){
    updateComputationValues();
    
    if (computationValues.length > 1) {
      computeFirstTwoValuesInArray();
    }
  };

  function updateComputationValues(){ 
    if (numbersArray.length > 0) {
      var numericValue = numberConverter();
      computationValues.push(numericValue);
      clearNumbersArray();
    }
  };

  function getValues(numberPressed) {
    if (numberPressed != ".") {
      numbersArray.push(numberPressed);
    } else if (numberPressed === "." && numbersArray.indexOf(".") === -1) {
      numbersArray.push(numberPressed);
    }
  };

  function numberConverter(){
    return parseFloat(numbersArray.join(''));
  };

  function computeFirstTwoValuesInArray (){
      var op = operator.slice(-1)[0];
      switch (op) {
        case "+":
        var val = computationValues[0] + computationValues.slice(-1)[0];
        break;

        case "-":
        var val = computationValues[0] - computationValues.slice(-1)[0];
        break;

        case "x":
        var val = computationValues[0] * computationValues.slice(-1)[0];
        break;
        
        case "/":
        var val = computationValues[0] / computationValues.slice(-1)[0];
        break;
    }
        if (val.toString().length > 10){
          val = parseFloat(val.toFixed(8));
        }
        computationValues = [];
        computationValues.push(val);
        displayAnswer(val);
  };
  
  function selectFontSizeClass (val){
    var div = document.querySelector('.numbers')
    if (val.toString().length >= 14) {
      div.classList.add('small-numbers');
      //div.classList.toggle('small-numbers');
    } else {
      div.classList.remove('small-numbers');
    }
  };

  function displayOnScreen(digits){
    var screen = document.querySelector('#inputWindow');
    var newText = digits.join('');
    selectFontSizeClass(digits);
    screen.innerHTML = newText;
  };
  
  function displayAnswer(answer){
    clearScreen();
    selectFontSizeClass(answer);
    var screen = document.querySelector('#inputWindow');
    screen.innerHTML = answer;
  };

  function clearScreen(){
    var screen = document.querySelector('#inputWindow');
    screen.innerHTML = "";
  };

  function clearNumbersArray(){
    numbersArray = [];
  };
  
  function resetAll (){
    computationValues = [];
    numbersArray = [];
    operator = [];
    clearScreen();
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
  plus.addEventListener("click", selectOperator);
  minus.addEventListener("click", selectOperator);
  divide.addEventListener("click", selectOperator);
  multiply.addEventListener("click", selectOperator);
  clear.addEventListener("click", resetAll);
  equals.addEventListener("click", solveProblem);
};
