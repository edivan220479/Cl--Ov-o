document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    let index = 0;

    const getSlideWidth = () => {
        const item = document.querySelector('.carousel-item');
        const style = window.getComputedStyle(item);
        const marginRight = parseFloat(style.marginRight) || 20; // baseado no gap do CSS
        return item.offsetWidth + marginRight;
    };

    nextBtn.addEventListener('click', () => {
        const maxIndex = track.children.length - Math.floor(track.parentElement.offsetWidth / document.querySelector('.carousel-item').offsetWidth);
        if (index < maxIndex) {
            index++;
            track.style.transform = `translateX(-${getSlideWidth() * index}px)`;
        } else {
            index = 0; // Reseta para o começo se chegar ao fim
            track.style.transform = `translateX(0px)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
            track.style.transform = `translateX(-${getSlideWidth() * index}px)`;
        }
    });
});