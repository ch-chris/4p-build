import Splide from '@splidejs/splide';

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
const splideNavEl: HTMLElement = document.querySelector('[p-slider="nav"]')!;
const dots = document.querySelectorAll('.timeline_path_dot');
dots[0].classList.add('is-active');
document.addEventListener('DOMContentLoaded', function () {
  let splideMain = new Splide(splideMainEl, {
    autoWidth: true,
    arrows: false,
    pagination: false,
    trimSpace: false,
    live: false,
    dragMinThreshold: 20,
  });
  let splideNav = new Splide(splideNavEl, {
    autoWidth: true,
    arrows: false,
    pagination: false,
    trimSpace: false,
    isNavigation: true,
    dragMinThreshold: 20,
  });
  splideMain.sync(splideNav);
  splideMain.mount();
  splideNav.mount();
  //set active dot class on active
  splideMain.on('active', function () {
    //get slideIndex
    let slideIdx = splideMain.Components.Controller.getIndex();
    dots.forEach((dot) => {
      dot.classList.remove('is-active');
    });
    dots[slideIdx].classList.add('is-active');
  });
});

//timeline path, add class on last element
const timelinePaths = Array.from(
  document.querySelectorAll('[p-selector="timeline-path"]')
);
timelinePaths[timelinePaths.length - 1].classList.add('is-last');
