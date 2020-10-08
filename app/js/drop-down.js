'use strict';

function dropDown(target, elem) {

    const wrap = target.parentElement;

    target.addEventListener('click', function (e) {
        e.preventDefault();

        elem.classList.toggle('hide');
        wrap.classList.toggle('active');
    });

    elem.addEventListener('click', function (e) {
        e.preventDefault();

        const targetEl = e.target;
        const val = targetEl.innerHTML;

        elem.classList.toggle('hide');
        wrap.classList.toggle('active');
        return target.innerHTML = val;
    })

}

export { dropDown };