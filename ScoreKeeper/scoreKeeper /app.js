const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const reset = document.querySelector('#reset');
const changeTo = document.querySelector('#changeTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isgameOver = false;

p1Button.addEventListener('click', function () {
    if (!isgameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isgameOver = true;
            p1Display.classList.add('has-text-primary');
            p2Display.classList.add('has-text-info');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }

})
p2Button.addEventListener('click', function () {
    if (!isgameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isgameOver = true;
            p2Display.classList.add('has-text-primary');
            p1Display.classList.add('has-text-info');
            p1Button.disabled = true;
            p2Button.disabled = true;

        }
        p2Display.textContent = p2Score;
    }
})
reset.addEventListener('click', Reset)
changeTo.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    Reset();

})
function Reset() {
    isgameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-primary', 'has-text-info');
    p2Display.classList.remove('has-text-primary', 'has-text-info');
}