function startCalc(){
  var numbersArray = [];
  var operator = [];
  var computationValues = [];
  
  function numberBuilder (){  
    if (this.className === 'number'){
      getValues(this.innerHTML);
      displayOnScreen(numbersArray);

    } else if (this.className === 'operator') {
      operator.push(this.innerHTML);
      updateComputationValues();
      if (computationValues.length > 1) {
        computeFirstTwoValuesInArray();
      }
      clearNumbersArray();
      clearScreen();

    } else if (this.className === 'evaluate'){
      updateComputationValues();
      if (computationValues.length > 1) {
        computeFirstTwoValuesInArray();
      }
    } else {
        console.log('ERROR');
    }
  };

  function updateComputationValues(){ 
    var numericValue = numberConverter();
    computationValues.push(numericValue);
  };
  function getValues(numberPressed) {
    numbersArray.push(numberPressed);
  };

  function numberConverter(){
    return parseFloat(numbersArray.join(''));
  };

  function computeFirstTwoValuesInArray (){
      console.log("computation vals in case1 +: ", computationValues);
      var op = operator.slice(-1)[0];
      switch (op) {
        case "+":
        var val = computationValues[0] + computationValues.slice(-1)[0];
        computationValues = [];
        computationValues.push(val);
        console.log("computationVals in case2 +: ", computationValues);
        displayAnswer(val);
        break;

        case "-":
        var val = computationValues[0] - computationValues.slice(-1)[0];
        computationValues = [];
        computationValues.push(val);
        console.log("Substration1: ", computationValues);
        displayAnswer(val);
        break;
    }
  };

  function compute() {
    console.log("Inside compute function");
    numberConverter();
    computeFirstTwoValuesInArray();
  };
  
  function displayOnScreen(digits){
    var screen = document.querySelector('#inputWindow');
    var newText = document.createTextNode(digits.slice(-1)[0]);
    screen.appendChild(newText);
  };
  
  function displayAnswer(answer){
    clearScreen();
    var screen = document.querySelector('#inputWindow');
    var newText = document.createTextNode(answer);
    screen.appendChild(newText);
  };

  function clearScreen(){
    var screen = document.querySelector('#inputWindow');
    screen.innerHTML = "";
    console.log("computation Values", computationValues);
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
  plus.addEventListener("click", numberBuilder);
  minus.addEventListener("click", numberBuilder);
  divide.addEventListener("click", numberBuilder);
  multiply.addEventListener("click", numberBuilder);
  clear.addEventListener("click", resetAll);
  equals.addEventListener("click", numberBuilder);
};
