import { gsap } from "gsap";

//pulse animation
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