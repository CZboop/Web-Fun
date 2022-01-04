// will execute the main function on mouse move
document.addEventListener("mousemove", para);

document.addEventListener("DOMContentLoaded", function(event) {
    // creating svg circles semi randomly
    var svgCircle = document.getElementById("red-circles");
    var NS = "http://www.w3.org/2000/svg";
    for (var i = 0; i < 400; i++) {
      var circlex = Math.floor(Math.random()*50);
      var circley = Math.floor(Math.random()*50);
      var circle = document.createElementNS(NS, "circle");
      circle.setAttribute("cx", circlex);
      circle.setAttribute("cy", circley );
      circle.setAttribute("r", Math.random()/5);
      circle.setAttribute("fill", "red");
      circle.setAttribute("data-speed", Math.floor(Math.random()*10));
      circle.setAttribute("class", "circle-drawn")
      svgCircle.appendChild(circle);
    };
  });

function para(e){
    // adding parallax proportional to data speed attribute randomly assigned to each circle made above
    this.querySelectorAll('.circle-drawn').forEach(layer => {
        const level = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*level)/200;
        const y = (window.innerHeight - e.pageY*level)/200;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
    // making the pupils follow the mouse
    this.querySelectorAll('.pupil1').forEach(pupil => {
        const x = (window.innerWidth + e.pageX)/160-7.5;
        const y = (window.innerHeight + e.pageY)/100-5;

        pupil.setAttribute("cx", x);
        pupil.setAttribute("cy", y);
    })
    this.querySelectorAll('.pupil2').forEach(pupil => {
        const x = (window.innerWidth + e.pageX)/160+7.5;
        const y = (window.innerHeight + e.pageY)/100-5;

        pupil.setAttribute("cx", x);
        pupil.setAttribute("cy", y);
    })
}