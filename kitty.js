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
let cat_count = 0;

function spawnCat() {
  console.log("spawning a cat");
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
    div.className = "cat";
    div.style.width = "65px";
    div.style.left = "0px";
    div.style.zIndex= 0;
    cat_count += 1;
    return div;
  };
  let banner = createBanner();
  header.insertAdjacentElement("beforebegin", banner);
  var bump_count = 0;
  let animate = () => {
    const len = parseInt(banner.style.left.split("px")[0]);
    let w = window.innerWidth;
    if (len === w - 65) {
      right = false;
      flip(banner);
      if (bump_count > 1) {
        // for (i = 0; i < banner.width; i++) {
        //   banner.style.left = `${len - 1}px`;
        // }
        banner.remove();
        clearInterval(animate_intv);
        cat_count -= 1;
        // return true;
      }
    } else if (len === 0) {
      right = true;
      flip(banner);
      bump_count += 1;
    }
    if (right) {
      banner.style.left = `${len + 1}px`;
    } else {
      banner.style.left = `${len - 1}px`;
    }
  };
  var animate_intv = setInterval(animate, 10);
}

function createCat() {
  if (cat_count < 5) {
    spawnCat();
  }
}

setInterval(createCat, Math.floor(Math.random() * 15000) + 5000);
