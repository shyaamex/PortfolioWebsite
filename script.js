



var crsr = document.querySelector("#cursor");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});






// Cursor animations ( we haven't used mouse trail)

// var crsr = document.querySelector("#cursor");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
// });

function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#cursor"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#cursor"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
circleChaptaKaro();
circleMouseFollower();









// skill bubble

function canva(){
  $(document).ready(function (){
      if(!$("#myCanvas").tagcanvas({
          textColour: "rgb(61, 159, 219)",
          outlineColour: "transparent",
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.05,
          weight: true,
      }, "tags")){
          // something went wrong hide the canvas container,
          $("#myCanvasContainer");
      }
  })
}

canva();


// Animating the first page of our website

function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#navbar", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
      .from("#footer", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
  }

  

firstPageAnim();





// The second page hover image animations






document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function(dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
      gsap.to(elem.querySelector("h1"), {
        opacity: 1,        
      });
      gsap.to(document.querySelector("#cursor"),{
        width:10,
        height:10,
        opacity:1,
        
      })
    });
  

    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
      });
      gsap.to(elem.querySelector("h1"), {
        opacity: 0.1,        
      });
      gsap.to(document.querySelector("#cursor"),{
        width:80,
        height:80,
        opacity:0.3
        
      })
    });
});




var cursor = document.querySelector("#cursor");

elem.addEventListener("mousemove",function(det){

})
































  
let time = document.getElementById("currtime");

setInterval(() =>{

let d = new Date(); time.innerHTML = d.toLocaleTimeString();

}, 1000)



  
// Mouse trail code 
// 