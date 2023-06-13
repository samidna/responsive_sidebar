"use strict";

let icon = document.querySelector('.icon_div');


icon.addEventListener('click', function(){
    let mobile = document.querySelector('.mobile');
    mobile.classList.toggle('active');
    this.classList.toggle('active');
    console.log(icon);
})