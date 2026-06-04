function powerOn() {
    const landing = document.querySelector('.landing-container');

    // Triggers: brief zoom-out (pull back), then zoom-in toward the
    // computer's screen so the CRT fills the viewport before navigating.
    landing.classList.add('boot-zoom');

    setTimeout(() => {
        window.location.href = '../index.html';
    }, 2100);
}
