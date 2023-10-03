gsap.to("#circle",{
    rotate: 0,
    ease: Expo.easeInOut,
    duration:2,
})






























var active =3;
var minicircles = document.querySelectorAll(".minicircle");
var second = document.querySelectorAll(".second");

gsap.to(minicircles[active-1],{
    opacity: 1,
})

gsap.to(second[active-1],{
    opacity: 1,
})

minicircles.forEach(function(val, index){ 
    val.addEventListener("click", function(){ 
        gsap.to("#circle", { 
            rotate: (3-(index+1))*10,
            ease: Expo.easeInOut,
            duration:1,

        })
        geryout();
        gsap.to(this, {
            opacity:0.8,
        })
        gsap.to(second[index], {
            opacity:1,
        })

    })

})
function geryout(){
    gsap.to(minicircles,{
        opacity:0.2
    })
    gsap.to(second,{
        opacity:0.2
    })
}

second.forEach(function(val, index){ 
    val.addEventListener("click", function(){ 
        gsap.to("#circle", { 
            rotate: (3-(index+1))*10,
            ease: Expo.easeInOut,
            duration:1,

        })
        geryout();
        gsap.to(this, {
            opacity:0.8,
        })
        gsap.to(second[index], {
            opacity:1,
        })

    })
})
