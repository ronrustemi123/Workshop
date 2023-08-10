const link = document.querySelectorAll('#links');

const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2')
const section3 = document.querySelector('.section3')
const section4 = document.querySelector('.section4')


link[0].addEventListener('click', function(e) {
    e.preventDefault();
    section1.scrollIntoView();
})

link[1].addEventListener('click', function(e) {
    e.preventDefault();
    section2.scrollIntoView();
})

link[2].addEventListener('click', function(e) {
    e.preventDefault();
    section3.scrollIntoView(false);
})

link[3].addEventListener('click', function(e) {
    e.preventDefault();
    section4.scrollIntoView();
})