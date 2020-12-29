
window.addEventListener('scroll', ()=>{
    const header= document.querySelector('header h1')

    if(window.pageYOffset > 50){
        header.style.padding="0";
        

    }else{
        header.style.transform="1rem 0";

        
    }
}); 
