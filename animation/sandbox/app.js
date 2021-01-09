const box= document.querySelector('#box');
const play= document.querySelector("#play");
const remove= document.querySelector("#remove");
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


// remove.addEventListener('click',remove(()=>{
//     box.classList.add('anim');
// }))

// function remove( callback) { 
//     if(box.classList.contains('anim')){
//         box.classList.remove('anim');
//     } 
//     if (typeof callback == "function") 
//         callback(); 
// } 


//Remove button
remove.addEventListener('click',()=>{
    if(box.classList.contains('anim')){
        box.classList.remove('anim');
    }
})

play.addEventListener('click',()=>{
    box.classList.add('anim');
})

