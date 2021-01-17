const body= document.querySelector('body'); 

body.addEventListener('mousemove', (e)=>{
    const eye = document.querySelectorAll(".eye > .eyeball"); 
    eye.forEach((eye)=>{
        //get the coordinates for the center of each eye
        let x= (eye.getBoundingClientRect().left) + (eye.clientWidth /2);
        let y= (eye.getBoundingClientRect().top) + (eye.clientHeight /2);
        // console.log("x: " +x+ " | y: "+y)
        // console.log("page x: " +e.pageX+ " | y: "+e.pageY)
        let radian= Math.atan2(e.pageX -x, e.pageY - y);

        let rotate= (radian * (180 / Math.PI) * -1) + 0; 
        eye.style.transform = `rotate(${rotate}deg)`; 
    })
})