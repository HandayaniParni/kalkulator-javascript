const calculatorScreen = document.querySelector('.calculator-screen')

function insert(par) {
    calculatorScreen.value += par
}

function equal(){
    calculatorScreen.value = eval(calculatorScreen.value)
}

function ac(){
    calculatorScreen.value = ""
}