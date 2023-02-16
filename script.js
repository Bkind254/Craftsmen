"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Selecting Elements
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#features");
const tabs = document.querySelectorAll(".updates__tab");
const tabsContainer = document.querySelector(".updates__tab-container");
const tabsContent = document.querySelectorAll(".updates__content");
const nav = document.querySelector(".nav");

/////////Making the navigation responsive

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////////////SLIDE//////
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  console.log(slides, dots, captionText);

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Implementing Smooth Scrolling

btnScrollTo.addEventListener("click", function (e) {
  /////scrolling the modern way
  section1.scrollIntoView({ behavior: "smooth" });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Building a tabbed component
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".updates__tab");

  ///Guard clause
  if (!clicked) return;
  //Remove active classes
  tabs.forEach((t) => t.classList.remove("updates__tab--active"));

  tabsContent.forEach((c) => c.classList.remove("updates__content--active"));

  ///Active tab
  clicked.classList.add("updates__tab--active");

  ///Active content area
  document
    .querySelector(`.updates__content--${clicked.dataset.tab}`)
    .classList.add("updates__content--active");
});
