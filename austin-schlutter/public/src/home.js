function powerOn() {
    const landing = document.querySelector('.landing-container');
    const modalIn = document.querySelector('.screen-zoom-in');

    landing.classList.add('screen-zoom-out');

    setTimeout(() => {
        modalIn.classList.add('active');
        
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1000);
    }, 500);
}