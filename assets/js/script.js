const images = document.getElementsByClassName('headshot');
const bios = document.getElementsByClassName('bio-text');
var counter;
const names = ['zakh', 'andrew', 'nathan', 'jelly'];

for (counter = 1; counter < images.length; counter++) {
    images[counter].classList.add('hiddenC');
}
counter = 0;

var carosuel = function () {
    let last = counter;
    counter = (counter + 1) % names.length;
    
    images[counter].classList.add('staticBackground')
    images[counter].classList.remove('hiddenC')
    images[last].classList.add(names[last])
    images[last].classList.remove('staticBackground')
    bios[last].classList.add('textWhiteOut')
    bios[counter].classList.add('showText')

    setTimeout(() => {
        images[last].classList.add('hiddenC')
        images[last].classList.remove(names[last])
        bios[last].classList.remove('textWhiteOut', 'showText')
        setTimeout(carosuel, 5050)
    }, 1450)
}

setTimeout(carosuel, 1500);


$(document).ready(function(){

$('a.coming-soon').hover(
    e => { // in
        $('span.coming-soon').addClass($(e.target).parent().attr('id'))
        setTimeout(() => {
            $('span.coming-soon').addClass('active')
        }, 100)
    },
    e => { // out
        $('span.coming-soon').removeClass('active')
        setTimeout(() => {
            $('span.coming-soon').removeClass($(e.target).parent().attr('id'))
        }, 550)
    }
)

});