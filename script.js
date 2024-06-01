"use strict";

const male = document.querySelector(".male");
const female = document.querySelector(".female");
const button = document.querySelector(".last");
const final = document.querySelector(".final");
const loader = document.querySelector(".loader");
function showLoader() {
  loader.classList.add("show");
}
function hideLoader() {
  loader.classList.remove("show");
}
async function fetchData() {
  showLoader();
  const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${female.value}&fname=${male.value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b14ab9437dmshdc734d04a2ff7a1p10d067jsn4cd3e14c8585",
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
    },
  };

  try {
    let man = male.value;
    let woman = female.value;
    const response = await fetch(url, options);
    const result = await response.json();
    hideLoader();
    final.textContent = `${result.percentage}% ${result.result} (${man}❤️${woman})`;
    final.style.opacity = "1";
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
button.addEventListener("click", function (e) {
  e.preventDefault();
  if (male.value && female.value) {
    fetchData();

    male.value = female.value = "";
  } else {
    alert("Please enter the name");
  }
});
