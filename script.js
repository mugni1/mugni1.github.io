///hambureger
const hambureger = document.querySelector("#hamburger");
const garis = hambureger.querySelectorAll("div");

hambureger.addEventListener("click", function () {
  menu_item.classList.toggle("hidden");
  garis[0].classList.toggle("h1");
  garis[1].classList.toggle("hidden");
  garis[2].classList.toggle("h3");
});

//navbar fixed
const nav = document.querySelector("nav");
const brand = document.querySelector("#brand");
const menu_item = document.querySelector("#menu_item");
const contac_us = document.querySelector("#contac_us");
// const back_top = document.getElementById("back_top");
const fixedNav = nav.offsetTop;

window.onscroll = function () {
  if (window.pageYOffset > fixedNav) {
    nav.classList.add("bg-white");
    brand.classList.remove("text-white");
    menu_item.classList.remove("text-white");
    menu_item.classList.remove("bg-emerald-500");
    menu_item.classList.add("bg-white");
    contac_us.classList.add("bg-emerald-500");
    contac_us.classList.add("text-white");
    // contac_us.classList.remove("text-black");

    //hamburger
    garis[0].classList.add("black");
    garis[1].classList.add("black");
    garis[2].classList.add("black");
    // back_top.classList.add("show");
  } else {
    nav.classList.remove("bg-white");
    brand.classList.add("text-white");
    menu_item.classList.add("text-white");
    menu_item.classList.add("bg-emerald-600");
    menu_item.classList.remove("bg-white");
    contac_us.classList.remove("bg-emerald-500");
    contac_us.classList.remove("text-white");

    garis[0].classList.remove("black");
    garis[1].classList.remove("black");
    garis[2].classList.remove("black");
    // back_top.classList.remove("show");
  }
};

const btn_submit = document.getElementById("btn_submit");
