



const buttonOne = document.querySelector('#one')
const buttonTwo = document.querySelector('#two')
const buttonThree = document.querySelector('#three')
const buttonFour = document.querySelector('#four')
const buttonFive = document.querySelector('#five')
const buttonSix = document.querySelector('#six')
const buttonSeven = document.querySelector('#seven')
const buttonEight = document.querySelector('#eight')
const buttonNine = document.querySelector('#nine')
const buttonZero = document.querySelector('#zero')

const buttonPlus = document.querySelector('#plus')
const buttonMinus = document.querySelector('#minus')
const buttonDivided = document.querySelector('#divided')
const buttonTimes = document.querySelector('#times')

const buttonClear = document.querySelector('#clear')
const buttonEquals = document.querySelector('#equals')

let displayValue = document.getElementById('numberDisplay');
document.getElementById("numberDisplay").readOnly = true; 
let valuesArray = displayValue.value.split(" "); 
let input = ''
let firstNum = parseInt(valuesArray[0]);
let binaryOperator = valuesArray[1];
let secondNum = parseInt(valuesArray[2]);

let plus = false;
let minus = false;
let divided = false;
let times = false;

let triggerSecondNumber = false;
let placeHolder = null;

let numStorage = null

function add() {
    return firstNum + secondNum;
}

function subtract() {
    return firstNum - secondNum;
}
function divide() {
    return firstNum / secondNum;
}
function multiply() {
    return firstNum * secondNum;
}

function isolateElements() {
    displayValue = document.getElementById('numberDisplay');
    valuesArray = displayValue.value.split(" ");
    firstNum = parseInt(valuesArray[0]);
    binaryOperator = valuesArray[1];
    secondNum = parseInt(valuesArray[2]);
} 
function shiftValues() {
    valuesArray.shift
}
/* 
1. isolate the elements
2. take the three elements needed and place them into diff variables (firstNum, binaryOperator, secondNum)
3. return the results into a variable of first two arguments
4. 
*/


function test() {
    buttonOne.addEventListener('click', () => {
        input +='1'           
        displayValue.value = input;
      
    });

    buttonTwo.addEventListener('click', () => {
        input +='2'           
        displayValue.value = input;
      
    });
   
    buttonThree.addEventListener('click', () => {

        input += '3';
        displayValue.value = input;
      
    });
   
    buttonFour.addEventListener('click', () => {
        
        input += '4';
        displayValue.value = input;
    });
    buttonFive.addEventListener('click', () => {
    
        input += '5';
        displayValue.value = input;

    });  
          buttonSix.addEventListener('click', () => {
        input += '6';
        displayValue.value = input;

    });  
       buttonSeven.addEventListener('click', () => {
        input += '7';
        displayValue.value = input;

    });  
    buttonEight.addEventListener('click', () => {
        input += '8';
        displayValue.value = input;

    });
    buttonNine.addEventListener('click', () => {
        input += '9';
        displayValue.value = input;
    
    });
    buttonZero.addEventListener('click', () => {
        input += '0';
        displayValue.value = input;
    
    });    
    buttonPlus.addEventListener('click', () => {
       
        if (placeHolder == null) {
            placeHolder = parseInt(input);
            input = '';
            return;
        } else {
            input = parseInt(input)
            result = placeHolder + input
        }
    });
        
        //input += ' + '
        //displayValue.value += ' + '
    
    buttonMinus.addEventListener('click', () => {
        input += ' - '
        //displayValue.value += ' - '
    });
    buttonTimes.addEventListener('click', () => {
        input += ' x '
        //displayValue.value += ' x '
        
    });
    buttonDivided.addEventListener('click', () => {
        input += ' % '
        //displayValue.value += ' % '
    
    });

    buttonClear.addEventListener('click', () => {
        input = ''
        displayValue.value = input    
    });
    buttonEquals.addEventListener('click', () => {

        isolateElements()


            
          /*  if (binaryOperator == '+') {
               displayValue.value = input();
            } else if (binaryOperator == '-') {
                return displayValue.value = inputtract();
            } else if (binaryOperator == '/') {
                return displayValue.value = inputide();
            } else if (binaryOperator == 'x') {
                return displayValue.value = inputtiply();
            }
        */
        



    
    })};
    test()




    for (let i = 0; i<= valuesArray.length; i++) {

    }





/* lets try something. if we use split variable by space,
and after clicking equals index zero becomes first argument index two indicates
which function is triggered and index 3 equals the second argument

- another aspect that needs to be focussed on is if equals is clicked the result
will fill the display and then of course be used as the first argument in the next

well the next challenge then is to make the result of the first two numbers result 1
which is then combined with 

*/















  /*  buttonEquals.addEventListener('click', () => {
        //firstNum = parseInt(firstNum);
        //secondNum = parseInt(secondNum);

 
            

        if (plus == true) {
            placeHolder = parseInt(firstNum) + parseInt(secondNum);
            firstNum = placeHolder;
            secondNum = null;
            console.log(parseInt(placeHolder))
            plus = fa
            return
        }
        if (minus == true) {
            placeHolder = firstNum - secondNum;
            firstNum = placeHolder;
            secondNum = null;   
            console.log(parseInt(placeHolder));
            minus = fa;
            return           
        }
        if (times == true) {
            placeHolder = firstNum * secondNum;
            firstNum = placeHolder;
            secondNum = null;   
            console.log(parseInt(placeHolder));
            times = fa;
            return

        }
        if (divided == true) {
            placeHolder = firstNum / secondNum;
            firstNum = placeHolder;
            secondNum = null;   
            console.log(parseInt(placeHolder));
            times = fa;
            return

        }
        
       
     }); */




















