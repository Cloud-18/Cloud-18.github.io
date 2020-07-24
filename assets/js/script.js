const images = document.getElementsByClassName('findMe');
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

    setTimeout(() => {
        images[last].classList.add('hiddenC')
        images[last].classList.remove(names[last])
        setTimeout(carosuel, 5050)
    }, 1450)
}

setTimeout(carosuel, 7000);