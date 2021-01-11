const send= document.querySelector('.send');
const bar= document.querySelector('.line');


send.addEventListener('click', () => {
    bar.classList.remove('animate');
    setTimeout(function () {
        bar.classList.add('animate');
    }, 10);
     
})