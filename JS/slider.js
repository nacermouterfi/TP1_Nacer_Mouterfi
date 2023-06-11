let slider__image= document.getElementsByClassName('slider__image');

let count = 0;

let number__img = slider__image.length;

let precedent = document.querySelector('.button__previous');
let suivant = document.querySelector('.button__next');

function removeActiveImages() {
    for(let i = 0 ; i < number__img ; i++) {
        slider__image[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    count++;
    if(count >= number__img) {
        count = 0;
    }
    removeActiveImages();
    slider__image[count].classList.add('active');
})

precedent.addEventListener('click', function() {
    count--;
    if(count < 0) {
        count = number__img - 1;
    }
    removeActiveImages();
    slider__image[count].classList.add('active');
})

setInterval(function() {
    count++;
    if(count >= number__img) {
        count = 0;
    }
    removeActiveImages();
    slider__image[count].classList.add('active');
}, 3000)