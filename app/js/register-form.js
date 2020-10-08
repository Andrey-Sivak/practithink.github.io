'use strict';

function showForm(btn, form) {

    btn.addEventListener('click', function (e) {
        e.preventDefault();

        form.classList.remove('hide');
        document.body.classList.add('forbidence-scroll');

        form.addEventListener('click', function (e) {
            if( e.target.dataset.close ) {
                e.preventDefault();
                this.classList.add('hide');
                document.body.classList.remove('forbidence-scroll');
            }
        })
    });

}

export { showForm };