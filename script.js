// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});






// Cursor animations ( we haven't used mouse trail)

gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -50%",
    // scrub: 1,
    // markers:true,
  },
});








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
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
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
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
});









  
let time = document.getElementById("currtime");

setInterval(() =>{

let d = new Date(); time.innerHTML = d.toLocaleTimeString();

}, 1000)



  
// Mouse trail code 
// 