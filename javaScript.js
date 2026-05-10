let headerel=document.querySelector('.header');
let btnNavEl=document.querySelector('.btn-mobile-nav');


btnNavEl.addEventListener("click",function () {
    headerel.classList.toggle("open-nav");
});
