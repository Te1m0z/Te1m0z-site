const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const inner = document.getElementById('inner');

btnPrev.onclick = prev;
btnNext.onclick = next;

let left = 0;

function prev(){
    const track = document.getElementById('slider-track');
    left = left + 400;
    if (left > 800) {
        left = -800;
    }
    track.style.left = left + 'px';
}

function next(){
    const track = document.getElementById('slider-track');
    left = left - 400;
    if (left < -800) {
        left = 800;
    }
    track.style.left = left + 'px';
}


let interval = setInterval(next, 2000);

inner.onmouseover = clear;

function clear(){
    clearInterval(interval);
}