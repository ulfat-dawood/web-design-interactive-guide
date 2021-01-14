//We don't want to observe the coordinates of the entire viewport (onScroll event)
//rather, we observe only the coordinates of the elements below (Intersection Observer)
const sections = document.querySelectorAll('section'); 


const callback = (entries, observer)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting==true){

            console.log(entry.target.id, "is intersecting? ", entry.isIntersecting);
            console.log(entry.target.id, "Intersection ratio: ", entry.intersectionRatio);
            entry.target.classList.add("anim")
            observer.unobserve(entry.target); 
        }
    });
} 
const options = {
    //root is by default the browser viewport, so don't change it
    root: null, 
    threshold: .7, // 0-1 where 
                    //.25=> fires the entry ONLY when 25% of the element is in the viewport
                    //  1=> fires the entry ONLY when 100% of the element is in the viewport
    rootMargin: "0px" //px or % value, clockwise or shorthand
                  //rootMargin creates an imaginary viewport that is 
                  //------smaller than the actual browser viewport==> if margin is negative, (trigger animations )
                  //------larger than the actual browser viewport==> if margin is positive. (trigger lazy load images)
};
const observer = new IntersectionObserver(callback, options);

//each section is being observed all the time, reporting whether or not it is intersection with the viewport threshold.
sections.forEach(section=>{
    observer.observe(section);
})