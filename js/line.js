const line = document.querySelector('.line');

window.addEventListener('scroll', progressBar);

function progressBar(e){
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let per = winScroll / winHeight * 100;

    line.style.width = per + '%';
}