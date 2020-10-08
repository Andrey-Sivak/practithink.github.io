'use strict';

import { Menu } from "./Menu";
import { headerFixed } from "./header-fixed";
import { dropDown } from "./drop-down";
import { showForm } from "./register-form";

window.addEventListener('load', function () {


    (function mobMenu() {
        const menu = new Menu({
            button: document.querySelector('.menu__btn'),
            hamburger: document.querySelector('.menu__burger'),
            menu: document.querySelector('.menu'),
            activeClass: 'active'
        });

        menu.init();
    })();


    (function header() {

        const header = document.querySelector('.header');
        headerFixed( header );
    })();

    (function formDropDown() {

        const btn = document.querySelector('.form-drop-down_btn');
        const el = document.querySelector('.register-form__drop');

        dropDown( btn, el )
    })();

    (function formShowHide() {
        const btns = document.querySelectorAll('.to-form');
        const form = document.querySelector('.register-form');

        for( let i = 0; i < btns.length; i++ ) {
            showForm( btns[i], form );
        }
    })()

});