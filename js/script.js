'use strict';

////////////////////
////Sticky Nav

// Targetting Elements
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

const stickNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);
