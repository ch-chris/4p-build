import Accordion from 'accordion-js';
//import 'accordion-js/dist/accordion.min.css';

console.log('hello main.ts');
const accordions = Array.from(
  document.querySelectorAll('[p-selector="accordion"]')
);
console.log(accordions);
new Accordion(accordions),
  {
    duration: 400,
    onOpen: function (currentElement: any) {
      console.log(currentElement);
    },
  };
