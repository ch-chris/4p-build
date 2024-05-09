import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//loader elements
const loaderEl = document.querySelector('[p-selector="loader"]');
const loaderLogoEl = document.querySelector('[p-selector="loader-logo"]');
const loaderDuration = 3;
//hero elements
const onLoadEls = document.querySelectorAll('[p-selector="onload"]');

//loader timeline
function endLoaderAnimation() {
    loaderEl?.classList.add('hide');
}
gsap.to(loaderEl, {
    keyframes: [
        {
            backgroundColor: '#042619',
            duration: 2.5,
        },
        {
            opacity: 0,
            y: -100,
        }
    ],
    duration: loaderDuration,
    onComplete: endLoaderAnimation
});
gsap.to(loaderLogoEl, {
    opacity: 1,
    duration: loaderDuration
});

//home hero section timeline
let onLoadTl = gsap.timeline({
    defaults: {
        delay: loaderDuration,
        duration: 0.5,
    }
});
onLoadTl.fromTo(onLoadEls, {
    y: 100,
    opacity: 0
}, {
    stagger: 0.35,
    y: 0,
    opacity: 1
});

//scrolltrigger
const containers: HTMLDivElement[] = gsap.utils.toArray('[p-selector="reveal"]');
containers.forEach(container => {
  gsap.fromTo(container, {
    y: 100,
    opacity: 0,
  },{ 
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: container,
      start: 'top 65%',
      //scrub: true
    }
  })
});

//pulse ball
const pulseEl = document.querySelectorAll('[p-selector="pulse"]');
gsap.fromTo(pulseEl, {
    opacity: 0.2, scale: 0.8
}, {
    opacity: 0.4,
    scale: 1,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
})