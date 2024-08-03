//hambureger
const hambureger = document.querySelector("#hamburger");
const garis = hambureger.querySelectorAll("div");
const menu_item = document.querySelector("#menu_item");

hambureger.addEventListener("click", function () {
  menu_item.classList.toggle("hidden");
});

//navbar fixed
const nav = document.querySelector("nav");
const contac_us = document.querySelector("#contac_us");
// const back_top = document.getElementById("back_top");
const fixedNav = nav.offsetTop;

window.onscroll = function () {
  if (window.pageYOffset > fixedNav) {
    nav.classList.add("bg-white");
    nav.classList.add("text-black");

    contac_us.classList.add("bg-emerald-500");
    contac_us.classList.add("text-white");
    contac_us.classList.remove("text-black");

    //hamburger
    garis[0].classList.add("bg-black");
    garis[1].classList.add("bg-black");
    garis[2].classList.add("bg-black");
    // back_top.classList.add("show");
  } else {
    nav.classList.remove("bg-white");
    nav.classList.remove("text-black");
    contac_us.classList.remove("bg-emerald-500");
    contac_us.classList.add("text-black");

    garis[0].classList.remove("bg-black");
    garis[1].classList.remove("bg-black");
    garis[2].classList.remove("bg-black");
    // back_top.classList.remove("show");
  }
};
