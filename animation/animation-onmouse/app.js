const body= document.querySelector('body'); 

body.addEventListener('mousemove', (e)=>{
    const eye = document.querySelectorAll(".eye > .eyeball"); 
    eye.forEach((eye)=>{
        //get the coordinates for the center of each eye
        let x= (eye.getBoundingClientRect().left) + (eye.clientWidth /2);
        let y= (eye.getBoundingClientRect().top) + (eye.clientHeight /2);
        // console.log("x: " +x+ " | y: "+y)
        // console.log("page x: " +e.pageX+ " | y: "+e.pageY)

        //set the eye to rotate based on mouse current x and y on the page
        let radian= Math.atan2(e.pageX -x, e.pageY - y);
        let rotate= (radian * (180 / Math.PI) * -1) + 0; 
        eye.style.transform = `rotate(${rotate}deg)`; 
    })


    //let the bamboo move along the cursor
    const bamboo = document.querySelector("#bamboo"); 
    bamboo.setAttribute('style', 'opacity:1; top:'+ e.pageY+'px; left:'+ e.pageX+'px; transform: translate(-50%,-50%)')
})