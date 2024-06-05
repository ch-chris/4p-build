import Splide from '@splidejs/splide';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

//cms modal setting attributes
const modalOpenEls = Array.from(
  document.querySelectorAll('[fs-modal-element="open"]')
);
const modalPopupEls = Array.from(
  document.querySelectorAll('[fs-modal-element="modal"]')
);
const modalCoverEls = Array.from(
  document.querySelectorAll('[fs-modal-element="cover"]')
);
const modalCloseEls = Array.from(
  document.querySelectorAll('[fs-modal-element="close"]')
);
const changeAttr = function (elements: Element[], attrValue: string) {
  elements.forEach((el, i) => {
    el.setAttribute('fs-modal-element', `${attrValue}-${i + 1}`);
  });
};
changeAttr(modalOpenEls, 'open');
changeAttr(modalPopupEls, 'modal');
changeAttr(modalCoverEls, 'close');
changeAttr(modalCloseEls, 'close');

//timeline splide
const splideMainEl: HTMLElement = document.querySelector('[p-slider="main"]')!;
const splideModalEl: HTMLElement =
  document.querySelector('[p-slider="modal"]')!;
const modalButtons = document.querySelectorAll('.timeline_modal-button');

const timelineItems = document.querySelectorAll('[p-selector="timeline-item"]');
timelineItems[0].classList.add('is-active');

document.addEventListener('DOMContentLoaded', function () {
  let splideMain = new Splide(splideMainEl, {
    autoWidth: true,
    arrows: false,
    pagination: false,
    trimSpace: false,
    live: false,
  });
  let splideModal = new Splide(splideModalEl, {
    pagination: false,
    live: false,
  });

  splideMain.mount();
  splideModal.mount();

  //set active timelineItem class on splide active
  splideMain.on('active', function () {
    //get slideIndex
    let slideIdx = splideMain.Components.Controller.getIndex();
    timelineItems.forEach((item) => {
      item.classList.remove('is-active');
    });
    timelineItems[slideIdx].classList.add('is-active');
  });

  modalButtons.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
      splideModal.options = { speed: 0 };
      splideMain.go(i);
      setTimeout(() => {
        splideModal.go(i);
        splideModal.options = { speed: 400 };
      }, 250);
    });
  });
});

//drag cursor animation
const dragEl = document.querySelector('[p-selector="drag"]');
gsap.fromTo(
  dragEl,
  {
    opacity: 1,
    x: 0,
  },
  {
    opacity: 0,
    duration: 1,
    x: 25,
    scrollTrigger: {
      trigger: dragEl,
      start: 'top 75%',
    },
    ease: 'power1.inOut',
    repeat: 4,
    yoyo: true,
    onComplete: endCursorAnimation,
  }
);

function endCursorAnimation() {
  dragEl?.classList.add('hide');
}
