import Accordion from 'accordion-js';

export const renderAccordions = function (elements: Element[] | any) {
  const acc = new Accordion(elements,
    {
      showMultiple: true,
      openOnInit: [0],
    })
}