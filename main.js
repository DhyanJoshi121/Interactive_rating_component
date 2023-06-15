"use strict";

const rateButtons = document.querySelector(".ratings");

rateButtons.addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelectorAll(".rate")
    .forEach((ele) => ele.classList.remove("rateClick"));
  if (e.target !== e.currentTarget) e.target.classList.add("rateClick");
  console.log(e.target);
});
