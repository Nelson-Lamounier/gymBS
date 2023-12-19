const imgs = document.getElementById("imgs");

/* Section Slides Images */

let current = 1;
let currentOne = 1;
let currentTwo = 1;

const changeSlides = () => {
  const slideList = document.querySelectorAll(".slide");
  const slideListOne = document.querySelectorAll(".slide-1");
  const slideListTwo = document.querySelectorAll(".slide-2");

  const slides = Array.from(slideList);
  const slidesOne = Array.from(slideListOne);
  const slidesTwo = Array.from(slideListTwo);

  if (current > slides.length || current > slideListOne.length) {
    current = 1;
  }

  slides.forEach((slide) => {
    if (slide.classList[1].split("-")[1] * 1 === current) {
      slide.style.cssText = "visibility: visible; opacity:1";
    } else {
      slide.style.cssText = "visibility: hidden; opacity: 0";
    }
  });
};

const changeSlidesOne = () => {
  const slideListOne = document.querySelectorAll(".slide-01");

  const slidesOne = Array.from(slideListOne);

  if (currentOne > slidesOne.length) {
    currentOne = 1;
  }

  slidesOne.forEach((slideOne) => {
    if (slideOne.classList[1].split("-")[1] * 1 === currentOne) {
      slideOne.style.cssText = "visibility: visible; opacity:1";
    } else {
      slideOne.style.cssText = "visibility: hidden; opacity: 0";
    }
  });
};

const changeSlidesTwo = () => {
  const slideListTwo = document.querySelectorAll(".slide-02");

  const slidesTwo = Array.from(slideListTwo);

  if (currentTwo > slidesTwo.length) {
    currentTwo = 1;
  }

  slidesTwo.forEach((slideTwo) => {
    if (slideTwo.classList[1].split("-")[1] * 1 === currentTwo) {
      slideTwo.style.cssText = "visibility: visible; opacity:1";
    } else {
      slideTwo.style.cssText = "visibility: hidden; opacity: 0";
    }
  });
};

const playPause = () => {
  setInterval(() => {
    current++;
    changeSlides();
  }, 3000);
};

const playPauseOne = () => {
  setInterval(() => {
    currentOne++;
    changeSlidesOne();
  }, 3000);
};

const playPauseTwo = () => {
  setInterval(() => {
    currentTwo++;
    changeSlidesTwo();
  }, 3000);
};
changeSlides();
playPause();

changeSlidesOne();
playPauseOne();

changeSlidesTwo();
playPauseTwo();
