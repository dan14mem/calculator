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
const numberButton = document.querySelectorAll(".numberButton")
const operatorButton = document.querySelectorAll(".operatorButton")

const buttonPlus = document.querySelector('#plus')
const buttonMinus = document.querySelector('#minus')
const buttonDivided = document.querySelector('#divided')
const buttonTimes = document.querySelector('#times')

const buttonClear = document.querySelector('#clear')
const buttonEquals = document.querySelector('#equals')

let displayValue = document.getElementById('numberDisplay');
let firstNum = null
let secondNum = null
let binaryOperator = ''


let input = '';
let placeHolder = 0;

function clearInput() {
    secondNum = input; 
    input = '';
}
function displayResult() {
    secondNum = null;
    displayValue.value = firstNum;
 }

//Basic Operators///////////////////////
                                    ////
 function add() {                   ////                          
    firstNum = firstNum + secondNum;////
}                                   ////
                                    ////
function subtract() {               ////
    firstNum = firstNum - secondNum;////
                                    ////
}                                   ////
function divide() {                 ////
    firstNum = firstNum / secondNum;////
}                                   ////    
function multiply() {               ////
    firstNum = firstNum * secondNum;////
}                                   ////
////////////////////////////////////////
    
numberButton.forEach(btn => {
    btn.addEventListener("click", () => {
        input += btn.textContent;
        displayValue.value = input;
    })
});

operatorButton.forEach(btn => {
    btn.addEventListener("click", () => {
        input = parseInt(input);

        if (firstNum ==  null) {
            firstNum = input; input = ''; binaryOperator = btn.textContent; 
            return;
        } else if (binaryOperator == '' && btn.id == 'plus') {
            binaryOperator = '+'; input = '';
            return
        } else if (binaryOperator == '' && btn.id == 'minus') {
            binaryOperator = '-'; input = '';
            return
        }else if (binaryOperator == '' && btn.id == 'times') {
                binaryOperator = 'x'; input = '';
                return
        } else if (binaryOperator == '' && btn.id == 'divided') {
            binaryOperator = '/'; input = '';
            return
        } else if (binaryOperator == '+') {
            clearInput(); add(); displayResult(); binaryOperator = btn.textContent;
            console.log(binaryOperator,) 
            return;
        }  else if (binaryOperator == '-') {
            clearInput(); subtract(); displayResult(); binaryOperator = btn.textContent;
            return
        } else if (binaryOperator == 'x') {
            clearInput(); multiply(); displayResult(); binaryOperator = btn.textContent;
            return;
        } else if (binaryOperator == '/') {            
            clearInput(); divide(); displayResult(); binaryOperator = btn.textContent;
            return;
        }
    }) 
});

buttonClear.addEventListener('click', () => {
    input = ''; firstNum = null; secondNum = null; binaryOperator = ''; 
    displayValue.value = input;
    return
});
buttonEquals.addEventListener('click', () => {
    input = parseInt(input);

    if (binaryOperator == '+') {
        binaryOperator = ''; clearInput(); add(); displayResult();
        return
    }else if (binaryOperator == '-') {
        binaryOperator = ''; clearInput(); subtract(); displayResult();
        return
    } else if (binaryOperator == 'x') {
        binaryOperator = ''; clearInput(); multiply(); displayResult();
        return
    } else if (binaryOperator == '/') {
        binaryOperator = ''; clearInput(); divide(); displayResult();
        return
    }
});



