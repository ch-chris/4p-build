import { gsap } from "gsap";

const loaderDuration = 2;
export const loaderAnimation = function(targetOne: Element | null, targetTwo: Element | null) {
    gsap.to(targetOne, {
        keyframes: [
            {
                backgroundColor: '#042619',
                duration: 1.5,
            },
            {
                opacity: 0,
                y: -100,
            }
        ],
        duration: loaderDuration,
        onComplete: endLoaderAnimation,
        onCompleteParams: [targetOne],
    });

    gsap.to(targetTwo, {
        opacity: 1,
        duration: loaderDuration
    });
}

function endLoaderAnimation(target: Element | null): any {
    //console.log(target);
    target?.classList.add('hide');
}
