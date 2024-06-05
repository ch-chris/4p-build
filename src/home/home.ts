import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

//pulse animation
const pulseEl = document.querySelectorAll('[p-selector="pulse"]');
gsap.fromTo(
  pulseEl,
  {
    opacity: 0.2,
    scale: 0.8,
  },
  {
    opacity: 0.4,
    scale: 1,
    duration: 2,
    ease: 'power1.inOut',
    repeat: -1,
    yoyo: true,
  }
);

const homeDotEl = document.querySelectorAll('[p-selector="dot"]');
const homeDotInnerEl = document.querySelectorAll('[p-selector="dot-inner"]');
const homeLineEl = document.querySelectorAll('[p-selector="line"]');
let homeAnim = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: homeDotEl,
    start: 'top 55%',
  },
});
homeAnim.fromTo(homeDotEl, { opacity: 0 }, { opacity: 1 });
homeAnim.fromTo(homeDotInnerEl, { opacity: 0 }, { opacity: 1 });
homeAnim.fromTo(homeLineEl, { height: '0%' }, { height: '50%' });
