'use strict';

function changeTheme() {
    const page = document.querySelector('.page'),
    radioBlock = document.querySelector('#radioBlock'),
    buttonBlock = document.querySelector('#buttonsBlock'),
    selectBlock = document.querySelector('#selectBlock');
    
    function checkBtn(e) {
        let target = e.target.value;
        if (target === 'Light Theme') {
            page.classList.add('page_light');
        }
        if (target === 'Dark Theme') {
            page.classList.add('page_dark');
        } else {
            page.classList.remove('page_dark');
        }
        if (target === 'Gray Theme') {
            page.classList.add('page_gray');
        } else {
            page.classList.remove('page_gray');
        }
    }

    function isActive(e) {
        
        const buttons = document.querySelectorAll('.switch-themes__button');
        let target = e.target;
        buttons.forEach(elem => {
            if (target === elem) {
                elem.classList.add('active');
            } else {
                elem.classList.remove('active');
            }
        });
    }
    
    if (radioBlock !== null) {
        radioBlock.addEventListener('click', checkBtn);
    }
    if (buttonBlock !== null) {
        buttonBlock.addEventListener('click', checkBtn);
        buttonBlock.addEventListener('click', isActive);
    }
    if (selectBlock !== null) {
        selectBlock.addEventListener('click', checkBtn);
    }
}
changeTheme();