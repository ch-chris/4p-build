import Accordion from 'accordion-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const renderAccordions = function (elements: Element[] | any) {
  const acc = new Accordion(elements, {
    showMultiple: true,
    openOnInit: [0],
    onClose: () => {
      //console.log('closed');
      ScrollTrigger.refresh();
    },
  });
};
