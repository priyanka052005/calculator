let isOpeningBracket = true;

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    let display = document.getElementById("display");
    let expression = display.value;
    expression = expression.replace(/(\d+)%/g, '($1 / 100)');
    try {
        display.value = eval(expression);
    } catch (error) {
        alert("Invalid Input");
    }
}

function toggleBracket() {
    if (isOpeningBracket) {
        appendToDisplay("(");
    } else {
        appendToDisplay(")");
    }
    isOpeningBracket = !isOpeningBracket;
}

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (key >= 0 && key <= 9) {
        appendToDisplay(key);
    }

    if (key === '.') {
        appendToDisplay('.');
    }

    if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    }

    if (key === '(' || key === ')') {
        appendToDisplay(key);
    }

    if (key === '%') {
        appendToDisplay('%');
    }

    if (key === 'Enter') {
        calculateResult();
    }

    if (key === 'Escape') {
        clearDisplay();
    }

    if (key.toLowerCase() === 'b') {
        toggleBracket();
    }
});
