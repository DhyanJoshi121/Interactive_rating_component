"use strict";

const ratingsDiv = document.querySelector(".ratings");
const ratingButtons = document.querySelectorAll(".rate");
const mainCard = document.querySelector(".main-card");
const thanksCard = document.querySelector(".thanks-card");

ratingsDiv.addEventListener("click", (e) => {
  e.preventDefault();
  ratingButtons.forEach((ele) => ele.classList.remove("rateClick"));
  if (e.target !== e.currentTarget) e.target.classList.add("rateClick");
});

document.querySelector(".submit").addEventListener("click", (e) => {
  e.preventDefault();
  let msg;
  ratingButtons.forEach((ele) => {
    ele.classList.contains("rateClick")
      ? (msg = `You selected ${ele.innerText} out of 5`)
      : false;
  });
  if (!msg) {
    alert("please select rating");
    return;
  }
  document.querySelector(".ratingOutOf5").insertAdjacentText("beforeend", msg);
  mainCard.style.cssText += "display:none";
  thanksCard.style.cssText += "display:flex";
});
