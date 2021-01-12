const send= document.querySelector('.send');
const bar= document.querySelector('.line');


send.addEventListener('click', () => {
    bar.classList.remove('animate');
    setTimeout(function () {
        bar.classList.add('animate');
    }, 10);
     
})



//PLAY BOTTON:
const btn= document.querySelector('#play .btn');
const topp= document.querySelector(".s-line.top");
const bottom= document.querySelector(".s-line.bottom");
const text= document.querySelector("#play .text");

btn.addEventListener('click', () => {
    console.log("HI");
    topp.classList.toggle('rotate-top');
    bottom.classList.toggle('rotate-bottom');
    text.innerHTML= text.innerHTML== 'PLAY'? "PAUSE": 'PLAY'; 

     
})