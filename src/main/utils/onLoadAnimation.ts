import { gsap } from "gsap";

export const onLoadAnimation = function(targets: Element[], delayDuration: number = 2) {
    let onLoadTl = gsap.timeline({
        defaults: {
            delay: delayDuration,
            duration: 0.5,
        }
    });
    onLoadTl.fromTo(targets, {
        y: 100,
        opacity: 0
    }, {
        stagger: 0.35,
        y: 0,
        opacity: 1
    });
}