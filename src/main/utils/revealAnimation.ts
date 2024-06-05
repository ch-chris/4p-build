import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const revealAnimation = function (targets: Element[]) {
  targets.forEach((target) => {
    gsap.fromTo(
      target,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: target,
          start: 'top 55%',
        },
      }
    );
  });
};
