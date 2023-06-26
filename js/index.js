var typed = new Typed(".typing",{
    strings: ["César", "Ximena"],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.cx-text', {delay:200, origin:'top'})
sr.reveal('.cx-logo', {delay:450, origin:'top'})