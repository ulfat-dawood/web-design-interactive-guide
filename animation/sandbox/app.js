const box= document.querySelector('#box');
const play= document.querySelector("#play");
const allRadio= document.querySelectorAll('input');


//All Radio:
allRadio.forEach((button)=>{
    button.addEventListener('click', () => {

        //set the property
        const property= button.name;
        const value= button.value;
        //remove the animation
        if(box.classList.contains('anim') && property=='iteration'){
            box.classList.remove('anim');
        }
        
        switch(property){
            case 'duration':
                box.style.animationDuration=value;
                break;
            case 'func':
                box.style.animationTimingFunction=value;
                break;
            case 'delay':
                box.style.animationDelay=value;
                break;
            case 'iteration':
                box.style.animationIterationCount=value;
                break;
            case 'direction':
                box.style.animationDirection=value;
                break;
            case 'fill-mode':
                box.style.animationFillMode=value;
                break;
            case 'play-state':
                box.style.animationPlayState=value;
                break;
        }

      });
}) 

//Play button
play.addEventListener('click',()=>{
    box.classList.add('anim');
})
