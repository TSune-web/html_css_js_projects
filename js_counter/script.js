// num, btn: plus, minus, reset, result, cresult
const num = document.getElementById('num');
const btn = document.querySelector('.btn');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const resetBtn = document.getElementById('reset');
const result = document.getElementById('result');
const cresult = document.getElementById('cresult');

let msgEl = document.querySelector('.msg');
let count = 0;


function display() {
    num.innerHTML = count;
}

function increment() {
    count++;

    if (count < 9) {
        msgEl.innerHTML = 'Keep going!';
    } else if (count > 9 && count < 19) {
        msgEl.innerHTML = 'hit 10 clicks!';
    } else if (count > 19 && count < 29) {
        msgEl.innerHTML = 'Almost there!!';
    } else if (count > 29) {
        msgEl.innerHTML = 'Well done!!!';
    }

    display();
}

function decrement() {
    if (count >= 1) {
        count--;
        display();
    }
}

function reset() {
    count = 0;
    num.innerHTML = 0;
    cresult.innerHTML = 0;
    display();
}

function save() {
    cresult.innerHTML += ` - ${count}`;
    count = 0;
    num.innerHTML = 0;
    msgEl.innerHTML = '';
}
