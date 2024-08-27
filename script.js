const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function mousefollower(Yscale, Yscale) {
  window.addEventListener(
    "mousemove",
    (dets) =>
      (document.querySelector(
        ".pointer"
      ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${Xscale},${Yscale})`)
  );
}
// mousefollower();

function firstPageAnimation() {
  var tl = gsap.timeline();

  tl.from("nav", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
  tl.to(".boundelem", {
    y: 0,
    stagger: 0.2,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  });
  tl.from(".hero_footer", {
    y: 10,
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  });
}
firstPageAnimation();
function Elongation() {
  var timer;
  var scaleX = 1;
  var scaleY = 1;
  var prevX = 0;
  var prevY = 0;
  window.addEventListener("mousemove", (dets) => {
    clearInterval(timer);
    var diffX = dets.clientX - prevX;
    var diffY = dets.clientY - prevY;

    prevX = dets.clientX;
    prevY = dets.clientY;

    Xscale = gsap.utils.clamp(0.8, 1.4, diffX);
    Yscale = gsap.utils.clamp(0.8, 1.4, diffY);

    mousefollower(Xscale, Yscale);
    timer = setTimeout(() => {
      document.querySelector(
        ".pointer"
      ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}
Elongation();
//  IMAGE FOLLOWER
document.querySelectorAll(".elem").forEach((ele)=>
{
    var prev_rot = 0;
    var rot = 0;
    ele.addEventListener("mouseleave",(dets)=>{
       gsap.to(ele.querySelector("img"),{
        ease:Power3,
        opacity:0,
       })

    })
    ele.addEventListener("mousemove",(dets)=>{
       var diff = dets.clientY-ele.getBoundingClientRect().top;
       rot = dets.clientX-prev_rot;
       prev_rot = dets.clientX;
       gsap.to(ele.querySelector("img"),{
        ease:Power3,
        opacity:1,
        top:diff,
        left:dets.clientX,
        duration:.5,
        rotate: gsap.utils.clamp(-20,20,rot*.8)
       })
  
    })

})
