document.querySelectorAll('.crossword-box').forEach(function(box, index, boxes) {
    box.addEventListener('input', function(e) {
        // Move to next box after input
        if (this.value.length === this.maxLength) {
            let nextBox = boxes[index + 1];
            if (nextBox) {
                nextBox.focus();
            }
        }
    });
    
    box.addEventListener('keydown', function(e) {
        // Move to previous box on backspace when current box is empty
        if (e.key === "Backspace" && this.value === '') {
            let prevBox = boxes[index - 1];
            if (prevBox) {
                prevBox.focus();
            }
        }
    });
});

function confirm() {
    const confirm = document.getElementById('confirm');
    const answer = document.getElementById('answer');
    confirm.addEventListener("click", () => {
        console.log(answer.value)
        if (answer.value.toLowerCase() == "i love you"){
            window.location.href = 'game2.html';
        }
        else {
            confirm.innerText = "Try again, pookie!"
        }
    })
}

confirm();
