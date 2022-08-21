"use strict";

const navToggle = document.querySelector("[data-nav-toggle-btn]");
const header    = document.querySelector("[data-header]");

navToggle.addEventListener("click", function()
{
    header.classList.toggle("active");
});

window.onscroll = () =>
{
    header.classList.remove("active");
}