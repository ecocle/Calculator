const acButton = document.querySelectorAll('button[name="AC"]');
const flipButton = document.querySelectorAll('button[name="flip"]');
const percentageButton = document.querySelectorAll('button[name="percentage"]');
const numberButtons = document.querySelectorAll('button[name="number"]');
const operationButtons = document.querySelectorAll('button[name="operation"]');
const outputButton = document.querySelector('button[name="output"]');
let valueCurrent = '';
let values = [];
let operators = [];
let output = '';

acButton.forEach(button => {
    button.addEventListener('click', () => {
        valueCurrent = '';
        values = [];
        operators = [];
        output = '';
        document.getElementById('display').innerHTML = `
            <h1 class="value">0</h1>
        `;
    });
});

flipButton.forEach(button => {
    button.addEventListener('click', () => {
    });
});

percentageButton.forEach(button => {
    button.addEventListener('click', () => {
    });
});

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;
        valueCurrent += buttonId;
        document.getElementById('display').innerHTML = `
            <h1 class="value">${valueCurrent}</h1>
        `;
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        values.push(valueCurrent);
        valueCurrent = '';
        const buttonId = button.id;
        operators.push(buttonId);
    });
});

outputButton.addEventListener('click', () => {
    values.push(valueCurrent);

    if (operators.length > 0 && values.length > 1) {
        output = parseFloat(values[0]);

        for (let i = 0; i < operators.length; i++) {
            const num = parseFloat(values[i + 1]);

            if (operators[i] === '+') {
                output += num;
            } else if (operators[i] === '-') {
                output -= num;
            } else if (operators[i] === '*') {
                output *= num;
            } else if (operators[i] === '/') {
                output /= num;
            }
        }
        document.getElementById('display').innerHTML = `
            <h1>${output}</h1>
        `;
    } else {
        document.getElementById('display').innerHTML = `
            <h1>${parseFloat(valueCurrent)}</h1>
        `; 
    }
    console.log(output);
});
