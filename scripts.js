var $ = go.GraphObject.make;
var myDiagram = $(go.Diagram, "myDiagramDiv");
var node = [
  { key: "Hello" }, // two node data, in an Array
  { key: "World!" },
];
var link = [{ from: "Hello", to: "World!" }];
myDiagram.model = new go.GraphLinksModel(node, link);
document.addEventListener(
  "DOMContentLoaded",
  function () {
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
    "./src/img" + imageName;
  if (imageName == "ข้าว.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คือข้าวสวยร้อน ๆ";
  } else if (imageName == "ขนมแมว.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คือข้าวขนมแมวยังไงล่ะ";
  } else if (imageName == "ปลา1.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คือปลาย่างยังไงล่ะ";
  } else if (imageName == "ปลา2.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คือปลาแซลมอนยังไงล่ะ";
  } else if (imageName == "ปลา2.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "นี่คืออาหารเม็ดสำหรับน้อนแมววว";
  }

  document.getElementById("infoPopup").style.display = "block";
}
function closeInfoPopup() {
  document.getElementById("infoPopup").style.display = "none";
}
