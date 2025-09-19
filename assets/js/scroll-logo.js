// JavaScript to resize logo on scroll: shrink logo when scrolling down, restore size when at top

document.addEventListener('DOMContentLoaded', () => {
    const logoImg = document.querySelector('.logo img');
    if (!logoImg) return;

    const originalWidth = logoImg.clientWidth;
    const shrinkWidth = originalWidth * 0.6; // shrink to 60% of original size

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 0) {
            // Shrink logo when scrolled down more than 20px
            logoImg.style.transition = 'width 0.3s ease';
            logoImg.style.width = shrinkWidth + 'px';
        } else {
            // Restore original size when scrolled back to top
            logoImg.style.transition = 'width 0.3s ease';
            logoImg.style.width = originalWidth + 'px';
        }
    });
});
