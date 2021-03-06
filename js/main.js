window.sr = ScrollReveal();

sr.reveal('.img', {
    duration: 2000,
    origin: 'top',
    distance: '300px',
    delay: 800
});

sr.reveal('.information, .languages, .pro-skills, .personality', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});

sr.reveal('.col-md-9', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.footer, .sfooter', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px'
});