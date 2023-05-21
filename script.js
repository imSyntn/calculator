let result = document.getElementById('inp');

function updateResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculateResult() {
    result.value = "Ans: " + eval(result.value);
}

window.addEventListener("keypress", (event)=> {
    if(event.key == "Enter") {
        calculateResult();
    }
    if(event.key == "1") {
        updateResult('1');
    }
    if(event.key == "2") {
        updateResult('2');
    }
    if(event.key == "3") {
        updateResult('3');
    }
    if(event.key == "4") {
        updateResult('4');
    }
    if(event.key == "5") {
        updateResult('5');
    }
    if(event.key == "6") {
        updateResult('6');
    }
    if(event.key == "7") {
        updateResult('7');
    }
    if(event.key == "8") {
        updateResult('8');
    }
    if(event.key == "9") {
        updateResult('9');
    }
    if(event.key == "0") {
        updateResult('0');
    }
    if(event.key == ".") {
        updateResult('.');
    }
    if(event.key == "+") {
        updateResult('+');
    }
    if(event.key == "-") {
        updateResult('-');
    }
    if(event.key == "*") {
        updateResult('*');
    }
    if(event.key == "/") {
        updateResult('/');
    }
})
