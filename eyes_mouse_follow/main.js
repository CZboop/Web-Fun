document.addEventListener("mousemove", move);

function move(e){
    
    // 
    this.querySelectorAll('.pupil1').forEach(pupil => {
        const x = (window.innerWidth + e.pageX)/180+9;
        const y = (window.innerHeight + e.pageY)/150-0.5;

        pupil.setAttribute("cx", x);
        pupil.setAttribute("cy", y);
    })
    this.querySelectorAll('.pupil2').forEach(pupil => {
        const x = (window.innerWidth + e.pageX)/180-6;
        const y = (window.innerHeight + e.pageY)/150-0.5;

        pupil.setAttribute("cx", x);
        pupil.setAttribute("cy", y);
    })
}