window.addEventListener('scroll', ()=>{
    const nav= document.querySelector('nav');

    if(window.pageYOffset > 150){
        nav.classList.add('scroll-nav');

    }else{
        nav.classList.remove('scroll-nav');
    }
}); 



    
