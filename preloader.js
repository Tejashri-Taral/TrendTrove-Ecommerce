// /preloader js styling

let preloader = document.querySelector("#preloader");

window.addEventListener("load",function(e){
    const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");

  const colors = [
   "#f5fffa", "#ced6d2", "#a8afac", "#848987", "#626563", "#414342", "#232424", "#000000"

  ];

  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
  });

  window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
      
      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();
    preloader.style.display = "none";

});
