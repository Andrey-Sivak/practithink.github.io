'use strict';

// import WOW from 'wowjs';
import { Menu } from "./Menu";

window.addEventListener('load', function () {

    /*const wow = new WOW.WOW();
    wow.init();
    console.log(WOW);*/

    (function mobMenu() {
        const menu = new Menu({
            button: document.querySelector('.menu__btn'),
            hamburger: document.querySelector('.menu__burger'),
            menu: document.querySelector('.menu'),
            activeClass: 'active'
        });

        menu.init();
    })();

});