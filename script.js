function playSound() {
    var buttonSound = document.getElementById('buttonSound');
    buttonSound.currentTime = 0;
    buttonSound.play();
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        handleKeyPress(event.key);
    });
});

function handleKeyPress(key) {
    if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay(key);
    } else if (key === '(' || key === ')') {
        appendToDisplay(key);
    } else if (key === '%') {
        appendToDisplay(key);
    }
}
