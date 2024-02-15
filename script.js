function beatingHeart() {
    const heart = document.getElementById('heart');

    setInterval(() => {
        heart.classList.add('heartbeat');
        
        // Remove the class after the animation completes (500ms)
        setTimeout(() => {
            heart.classList.remove('heartbeat');
        }, 500);
    }, 2000);
}

function areYouSure() {
    const reject = document.getElementById("reject"); 
    let count = 0;

    reject.addEventListener("click", () => {
        count++;
        console.log(count);

        if (count === 1) {
            reject.innerText = "Are you sure?";
        }
        if (count === 2) {
            reject.innerText = "Are you sure you're sure?";
        }
        if (count === 3) {
            reject.innerText = "Are you absolutely positive?";
        }
        if (count === 4) {
            reject.innerText = "100% positive?";
        } 
        else if (count > 4) {
            reject.innerText = "try the other button";
        }
    });
}



beatingHeart();
areYouSure();
