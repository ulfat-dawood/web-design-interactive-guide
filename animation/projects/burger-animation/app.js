const imgs = document.querySelectorAll('.img');
//stacking layers 
imgs.forEach(function(img, i){
    img.style.top=`${60-(i*10)}px`; 
});


