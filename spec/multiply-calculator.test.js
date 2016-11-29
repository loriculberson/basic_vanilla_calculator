/*
 * Unit tests for lib/calculator.js
 */
describe('Calculator adding', function() {
  // inject the HTML fixture for the tests
  beforeEach(function() {
    var fixture = '<div class="calculator">' +
      '<div class="numbers">' +
      '<h2 id="inputWindow"></h2>' +
      '</div>' +
      '<div>' +
      '<button class="clear" id="clear">C</button>' +
      '<button class="hidden"></button>' +
      '<button class="hidden"></button>' +
      '<button class="hidden"></button>' +
      '</div> ' +
      '<div>' +
      '<button class="number" id="seven">7</button>' +
      '<button class="number" id="eight">8</button>' +
      '<button class="number" id="nine">9</button>' +
      '<button class="operator" id="multiply">x</button>' +
      '</div>' +
      '<div>' +
      '<button class="number" id="four">4</button>' +
      '<button class="number" id="five">5</button>' +
      '<button class="number" id="six">6</button>' +
      '<button class="operator" id="minus">-</button>' +
      '</div>' +
      '<div>' +
      '<button class="number" id="one">1</button>' +
      '<button class="number" id="two">2</button>' +
      '<button class="number" id="three">3</button>' +
      '<button class="operator" id="plus">+</button>' +
      '</div>' +
      '<div>' +
      '<button class="number" id="zero">0</button>' +
      '<button class="number" id="decimal">.</button>' +
      '<button class="operator" id="divide">/</button>' +
      '<button class="evaluate" id="equals">=</button>' +
      '</div>' +
      '</div>'; 

    document.body.insertAdjacentHTML(
      'afterbegin', 
      fixture);
  });

  //remove the html fixture from the DOM
  afterEach(function() {
    document.body.removeChild(document.querySelector('.calculator'));
  });

  //call the public function
  beforeEach(function(){
    startCalc();
  });

  //adding
  it('should return 6 for 3 * 2', function() {
    document.querySelector('#three').click();
    document.querySelector('#multiply').click();
    document.querySelector('#two').click();
    document.querySelector('#equals').click();
    expect(document.querySelector('#inputWindow').innerHTML).toBe('6');
  });
  
  it('should return 4.32 for 1.2 * 3.6', function() {
    document.querySelector('#one').click();
    document.querySelector('#decimal').click();
    document.querySelector('#two').click();
    document.querySelector('#multiply').click();
    document.querySelector('#three').click();
    document.querySelector('#decimal').click();
    document.querySelector('#six').click();
    document.querySelector('#equals').click();
    expect(document.querySelector('#inputWindow').innerHTML).toBe('4.32');
  });
  
  it('should return 24 for 2 * 3 * 4', function() {
    document.querySelector('#two').click();
    document.querySelector('#multiply').click();
    document.querySelector('#three').click();
    document.querySelector('#multiply').click();
    document.querySelector('#four').click();
    document.querySelector('#equals').click();
    expect(document.querySelector('#inputWindow').innerHTML).toBe('24');
  });
});
