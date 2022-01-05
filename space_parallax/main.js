document.addEventListener("mousemove", para);

document.addEventListener("DOMContentLoaded", function(event) {
    var svgCircle = document.getElementById("svg-viewbox");
    var NS = "http://www.w3.org/2000/svg";
    for (let i = 0; i < 200; i++) {
        var circlex = Math.floor(Math.random()*50);
        var circley = Math.floor(Math.random()*50);
        var circle = document.createElementNS(NS, "circle");
        circle.setAttribute("cx", circlex);
        circle.setAttribute("cy", circley );
        circle.setAttribute("r", Math.random()/10);
        circle.setAttribute("fill", "white");
        circle.setAttribute("data-speed", Math.floor(Math.random()*10))+1;
        circle.setAttribute("class", "star")
        svgCircle.appendChild(circle);
    }
    for (let i=0; i < Math.floor(Math.random()*10); i++){
        var circlex = Math.floor(Math.random()*50);
        var circley = Math.floor(Math.random()*50);
        var circle = document.createElementNS(NS, "circle");
        circle.setAttribute("cx", circlex);
        circle.setAttribute("cy", circley );
        circle.setAttribute("r", Math.random()*5);
        circle.setAttribute("fill", `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`);
        circle.setAttribute("data-speed", Math.floor(Math.random()*10))+1;
        circle.setAttribute("class", "planet")
        svgCircle.appendChild(circle);
    }
    var home_planet = document.createElementNS(NS, "circle");
    home_planet.setAttribute("cx", 45);
    home_planet.setAttribute("cy", 30);
    home_planet.setAttribute("r", 20);
    home_planet.setAttribute("fill", `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`);
    home_planet.setAttribute("data-speed", Math.floor(Math.random()*10))+1;
    home_planet.setAttribute("class", "planet")
    svgCircle.appendChild(home_planet);
    
  });

  function para(e){
    // 
    this.querySelectorAll('.star').forEach(layer => {
        const level = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*level)/200;
        const y = (window.innerHeight - e.pageY*level)/200;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
    this.querySelectorAll('.planet').forEach(layer => {
        const level = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*level)/200;
        const y = (window.innerHeight - e.pageY*level)/200;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}