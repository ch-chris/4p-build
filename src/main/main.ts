import { loaderAnimation } from "./utils/loaderAnimation";
import { onLoadAnimation } from "./utils/onLoadAnimation";
import { renderAccordions } from "./utils/renderAccordions";
import { revealAnimation } from "./utils/revealAnimation";

//console.log('hello');
//loader elements
const loaderEl = document.querySelector('[p-selector="loader"]');
const loaderLogoEl = document.querySelector('[p-selector="loader-logo"]');
//onload elements
const onLoadEls = Array.from(
  document.querySelectorAll('[p-selector="onload"]')
);
//accordion elements
const accordions = Array.from(
  document.querySelectorAll('[p-selector="accordion"]')
);
//reveal elements
const revealEls = Array.from(
  document.querySelectorAll('[p-selector="reveal"]')
);

//loader
if (loaderEl && loaderLogoEl) {
  loaderAnimation(loaderEl, loaderLogoEl);
} else {
  console.log('No loader found.');
}
//onload
if (onLoadEls.length > 0 && loaderEl && loaderLogoEl) {
  onLoadAnimation(onLoadEls);
} else if (onLoadEls.length > 0 && !loaderEl && !loaderLogoEl) {
  onLoadAnimation(onLoadEls, 0);
} else {
  console.log('No onload elements found.');
}
//reveal
if (revealEls.length > 0) {
  revealAnimation(revealEls);
} else {
  console.log('No reveal elements found.');
}
//render accordions, if any
if (accordions.length > 0) {
  renderAccordions(accordions);
} else {
  console.log('No accordion elements found.');
}