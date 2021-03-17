const splash = document.querySelector('.splash');
const whitescreen = document.querySelector('.whitescreen');
document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("Dom Loaded");
    
    setTimeout(()=>{
      splash.classList.add('display-none');
      whitescreen.classList.add('display-none');
    }, 3000);
    
    document
      .getElementById("instructionStartButton")
      .addEventListener("click", instructionStartButtonClickHandler);
    document
      .getElementById("memberButton")
      .addEventListener("click", showMemberPopup);
    document
      .getElementById("memberContentButton")
      .addEventListener("click", closeMemberPopup);
    document
      .getElementById("infoContentItem2Button")
      .addEventListener("click", closeInfoPopup);
    document
      .getElementById("resultContentItem2Button")
      .addEventListener("click", closeResultPopup);
    document
      .getElementById("pelletFood")
      .addEventListener("click", () => showInfoPopup("อาหารเม็ด.png"));
    document
      .getElementById("rice")
      .addEventListener("click", () => showInfoPopup("ข้าว.png"));
    document
      .getElementById("grillFish")
      .addEventListener("click", () => showInfoPopup("ปลา1.png"));
    document
      .getElementById("salmon")
      .addEventListener("click", () => showInfoPopup("ปลา2.png"));
    document
      .getElementById("snack")
      .addEventListener("click", () => showInfoPopup("ขนมแมว.png"));
  
  },
  false
);

function instructionStartButtonClickHandler() {
  document.getElementById("instructionPopup").style.display = "none";
}

function showMemberPopup() {
  document.getElementById("memberPopup").style.display = "block";
}
function closeMemberPopup() {
  document.getElementById("memberPopup").style.display = "none";
}
function showInfoPopup(imageName) {
  document.getElementById("infoContentItem1Image").src =
    "./src/img/" + imageName;
  if (imageName == "ข้าว.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คือข้าวสวยร้อน ๆ";
    document.getElementById("infoContentItem1Image").style.width = "320px";
    document.getElementById("infoContentItem1Image").style.height = "300px";
  } else if (imageName == "ขนมแมว.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คือขนมแมวยังไงล่ะ";
    document.getElementById("infoContentItem1Image").style.width = "150px";
    document.getElementById("infoContentItem1Image").style.height = "300px";
  } else if (imageName == "ปลา1.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คือปลาย่างยังไงล่ะ";
    document.getElementById("infoContentItem1Image").style.width = "350px";
    document.getElementById("infoContentItem1Image").style.height = "300px";
  } else if (imageName == "ปลา2.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คือปลาแซลมอนยังไงล่ะ";
    document.getElementById("infoContentItem1Image").style.width = "300px";
    document.getElementById("infoContentItem1Image").style.height = "300px";
  } else if (imageName == "อาหารเม็ด.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คืออาหารเม็ดสำหรับน้อนแมววว";
    document.getElementById("infoContentItem1Image").style.width = "300px";
    document.getElementById("infoContentItem1Image").style.height = "300px";
  }

  document.getElementById("infoPopup").style.display = "block";
}
function closeInfoPopup() {
  document.getElementById("infoPopup").style.display = "none";
}

function showResultPopup(imageName) {
  document.getElementById("resultContentItem1Image").src =
    "./src/img/" + imageName;
  if (imageName == "ข้าว.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "นี่คือข้าวววว";
    document.getElementById("resultContentItem1Image").style.width = "320px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "อาหารเม็ด.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "นี่คืออาหารเม็ดดดด";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "ข้าวหน้าปลาดิบ.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "นี่คือข้าวหน้าปลาดิบ";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "ข้าวหน้าปลาย่าง.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "นี่คือข้าวหน้าปลาย่าง";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "อาหารเม็ดใส่ปลาดิบ.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "นี่คืออาหารเม็ดใส่ปลาดิบ";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "อาหารเม็ดใส่ปลาย่าง.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "นี่คืออาหารเม็ดใส่ปลาย่าง";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "ข้าวหน้าปลาดิบ_ขนมแมว.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "นี่คือข้าวหน้าปลาดิบกับขนมแมวนะจ๊ะ";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "ข้าวหน้าปลาย่าง_ขนมแมว.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "นี่คือข้าวหน้าปลาย่างกับขนมแมวนะจ๊ะ";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "อาหารเม็ดใส่ปลาดิบ_ขนมแมว.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "นี่คืออาหารเม็ดใส่ปลาดิบกับขนมแมวนะจ๊ะ";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "อาหารเม็ดใส่ปลาย่าง_ขนมแมว.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "นี่คืออาหารเม็ดใส่ปลาย่างกับขนมแมวนะจ๊ะ";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
    

  document.getElementById("resultPopup").style.display = "block";
}
function closeResultPopup() {
  document.getElementById("resultPopup").style.display = "none";
}