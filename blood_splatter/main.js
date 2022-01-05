document.addEventListener("mousemove", para);

// function makes circles randomly across the svg viewbox
const makeCircle = (i,NS,svgCircle) => {
      var circlex = Math.floor(Math.random()*50);
      var circley = Math.floor(Math.random()*50);
      var circle = document.createElementNS(NS, "circle");
      console.log(circle);
      circle.setAttribute("cx", circlex);
      circle.setAttribute("cy", circley );
      circle.setAttribute("r", Math.random()/5);
      circle.setAttribute("fill", "red");
      circle.setAttribute("data-speed", Math.floor(Math.random()*10));
      circle.setAttribute("class", "circle-drawn")
      svgCircle.appendChild(circle);
    

}

// function makes circles in more of a streak
const makeCirclesInLine = (i,NS,svgCircle) => {
    var circlex = 50%i;
    var circley = 50%(50/i)+Math.round(Math.random()*5)+2;
    var circle = document.createElementNS(NS, "circle");
    console.log(circle);
    circle.setAttribute("cx", circlex);
    circle.setAttribute("cy", circley );
    circle.setAttribute("r", Math.random()/5);
    circle.setAttribute("fill", "red");
    circle.setAttribute("data-speed", Math.floor(Math.random()*5));
    circle.setAttribute("class", "circle-drawn")
    svgCircle.appendChild(circle);
  

}

document.addEventListener("DOMContentLoaded", function(event) {
    var svgCircle = document.getElementById("red-circles");
    var NS = "http://www.w3.org/2000/svg";
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {makeCirclesInLine(i,NS,svgCircle)}, i*5);
        setTimeout(() => {makeCirclesInLine(i,NS,svgCircle)}, i*5);
    }
    
  });

function para(e){
    // 
    this.querySelectorAll('.circle-drawn').forEach(layer => {
        const level = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*level)/200;
        const y = (window.innerHeight - e.pageY*level)/200;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}