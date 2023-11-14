const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}
const reset = document.querySelector('#reset');
const changeTo = document.querySelector('#changeTo');
let winningScore = 3;
let isgameOver = false;
function updateScores(player, opponent) {
    if (!isgameOver) {
        player.score++;
        if (player.score === winningScore) {
            isgameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-success');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
p1Button.addEventListener('click', function () {
    updateScores(p1, p2);

})
p2Button.addEventListener('click', function () {
    updateScores(p2, p1);
})
reset.addEventListener('click', Reset)
changeTo.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    Reset();

})
function Reset() {
    isgameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-success');
        p.button.disabled = false;
    }
}