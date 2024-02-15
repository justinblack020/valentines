function fadeHeart() {
    const fadeHeart = document.getElementById('fadeHeart');
    setTimeout(() => {
        fadeHeart.classList.add('heart-fade');
    }, 3000);
}

fadeHeart();
