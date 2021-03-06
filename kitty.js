// ==UserScript==
// @name         Colab Kitties
// @namespace    https://www.twitch.tv/riallymundane
// @version      0.1
// @description  add Google Colab's Kitty & Corgi modes to Twitch
// @author       Ria
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

let kitties = [
  "/src/img/FIREFOX.gif",
  "/src/img/KINAKO.gif",
  "/src/img/MANEKI.gif",
  "/src/img/MIDNIGHT.gif",
  "/src/img/PUMPKINSPICELATTE.gif",
  "/src/img/STRIPES.gif",
  "/src/img/xX_vampiregoth91_Xx.gif",
  "/src/img/GHOSTPUFFS.gif",
];

let header = document.querySelector("#header-background");
let right = true;
let flip = (banner) => {
  if (banner.style.transform === "scaleX(-1)") {
    banner.style.transform = "";
  } else {
    banner.style.transform = "scaleX(-1)";
  }
};
let createBanner = () => {
  let random = Math.round(Math.random() * (kitties.length - 1));
  let div = document.createElement("div");
  div.innerHTML = `<img src="${kitties[random]}" height="60">`;
  div.style.position = "absolute";
  div.style.top = "20px";
  div.style.zIndex = "0";
  div.style.width = "65px";
  div.style.left = "0px";
  return div;
};
let banner = createBanner();
header.insertAdjacentElement("beforebegin", banner);
let animate = () => {
  const len = parseInt(banner.style.left.split("px")[0]);
  let w = window.innerWidth;
  if (len === w - 65) {
    right = false;
    flip(banner);
  } else if (len === 0) {
    right = true;
    flip(banner);
  }
  if (right) {
    banner.style.left = `${len + 1}px`;
  } else {
    banner.style.left = `${len - 1}px`;
  }
};
setInterval(animate, 10);
