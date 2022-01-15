const p1 = {
    score: 0,
    button: document.getElementById('p1Btn'),
    display: document.getElementById('p1Score')
}
const p2 = {
    score: 0,
    button: document.getElementById('p2Btn'),
    display: document.getElementById('p2Score')
}
const resetBtn = document.getElementById('reset');
const winningScoreSelect = document.querySelector('#playTimes');

let winningScore = 5;
let isGameOver = false;


function updateScore (player, opponent) {
    if (!isGameOver){
        if (player.score !== winningScore) {
            player.score++;
            player.display.innerText = player.score;
            if (player.score === winningScore) {
                isGameOver = true;
                player.display.classList.add('winner');
                opponent.display.classList.add('loser');
                player.button.disabled = true;
                opponent.button.disabled = true;
            }
        }
    }
}


p1.button.addEventListener('click', () => {
    updateScore(p1, p2);
});
p2.button.addEventListener('click', () => {
    updateScore(p2, p1);
});

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
});

resetBtn.addEventListener('click', reset);

function reset() {
    isGameOver = false;

    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }
}