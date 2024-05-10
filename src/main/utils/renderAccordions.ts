import Accordion from 'accordion-js';

export const renderAccordions = function (elements: Element[]) {
  new Accordion(elements),
    {
      duration: 400,
  };
}