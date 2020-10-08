'use strict';

function headerFixed(target) {

    if( !target ) {
        return;
    }

    const header = target;
    const main = document.querySelector('.main');

    window.addEventListener('scroll', function (e) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if( scrollTop >= 10 ) {
            header.classList.add('fix');
        }

        if( scrollTop < 10 ) {
            header.classList.remove('fix');
        }
    })
}

export { headerFixed };