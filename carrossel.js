const carousel = document.querySelector('.carousel');
const slidesContainer = document.querySelector('.slides')
const slide = document.querySelectorAll('.slide')
const btnPreview = document.getElementById('prev')
const btnNext = document.getElementById('next')
const dotsContainer = document.querySelector('..dots')

let index = 0
const total = slides.length;
const intervalTime = 300;
let timer = null;
