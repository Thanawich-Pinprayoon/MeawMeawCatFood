document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("Dom Loaded");
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
  } else if (imageName == "ขนมแมว.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คือขนมแมวยังไงล่ะ";
  } else if (imageName == "ปลา1.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คือปลาย่างยังไงล่ะ";
  } else if (imageName == "ปลา2.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คือปลาแซลมอนยังไงล่ะ";
  } else if (imageName == "อาหารเม็ด.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คืออาหารเม็ดสำหรับน้อนแมววว";
  }

  document.getElementById("infoPopup").style.display = "block";
}
function closeInfoPopup() {
  document.getElementById("infoPopup").style.display = "none";
}
