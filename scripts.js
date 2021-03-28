const splash = document.querySelector('.splash');
const whitescreen = document.querySelector('.whitescreen');

let isClickNext = false;

document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("Dom Loaded");

    setTimeout(() => {
      splash.classList.add('display-none');
      whitescreen.classList.add('display-none');
    }, 2000);

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
    document
      .getElementById("restart-btn")
      .addEventListener("click", resetClickNext);

  },
  false
);

function resetClickNext(){
  isClickNext=false;
  console.log(isClickNext);
}

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
      "ข้าวสวยร้อน ๆ ที่อุดมไปด้วยคาร์โบไฮเดรต ที่ช่วยในการสร้างพลังงานให้กับน้อนแมว อย่างไรก็ตาม รสชาติของข้าวอาจจะจืดไปสักหน่อย แนะนำให้รับประทานคู่กับอาหารอื่น ๆ ";
    document.getElementById("infoContentItem1Image").style.width = "320px";
    document.getElementById("infoContentItem1Image").style.height = "300px";
  } else if (imageName == "ขนมแมว.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "ขนมแมว เป็นขนมที่ออกแบบมาเพื่อให้น้อนแมวได้เพลิดเพลินไปกับของว่างหลังอาหาร ด้วยรสชาติที่แสนอร่อย";
    document.getElementById("infoContentItem1Image").style.width = "150px";
    document.getElementById("infoContentItem1Image").style.height = "300px";
  } else if (imageName == "ปลา1.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "ปลาคุณภาพสูง นำมาผ่านกรรมวิธีการย่างอย่างพิถีพิถัน จนได้รสชาติที่อร่อย และกลิ่นหอมอันแสนเย้ายวน เป็นที่ชื่นชอบของน้อนแมว";
    document.getElementById("infoContentItem1Image").style.width = "350px";
    document.getElementById("infoContentItem1Image").style.height = "300px";
  } else if (imageName == "ปลา2.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "ปลาดิบที่เป็นที่ชื่นชอบของเหล่าทาส รสชาติอร่อย แต่ให้น้อนแมวกินปลาดิบจะปลอดภัยรึเปล่านะ ??";
    document.getElementById("infoContentItem1Image").style.width = "300px";
    document.getElementById("infoContentItem1Image").style.height = "300px";
  } else if (imageName == "อาหารเม็ด.png") {
    document.getElementById("info-content-item2-text").innerHTML =
      "อาหารเม็ด เป็นอาหารสำเร็จรูปที่ถูกผลิตขึ้นเพื่อน้อนแมวโดยเฉพาะ อุดมไปด้วยสารอาหารที่ครบถ้วน รสชาติถูกปาก จะรับประทานอย่างเดียว หรือ คู่กับอย่างอื่นก็ได้นะ";
    document.getElementById("infoContentItem1Image").style.width = "300px";
    document.getElementById("infoContentItem1Image").style.height = "300px";
  }

  document.getElementById("infoPopup").style.display = "block";
}
function closeInfoPopup() {
  document.getElementById("infoPopup").style.display = "none";
}

function showResultPopup(imageName) {
  if (isClickNext) {
    //fix double confirm bug
    imageName = "Trap_state.png";
    isClickNext = false;
  }
  document.getElementById("resultContentItem1Image").src =
    "./src/img/" + imageName;
  if (imageName == "ข้าว.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "ข้าวเปล่าๆ ไม่ใส่อะไรเพิ่มเติม รสชาติจืดๆ แบบนี้ น้อนแมวจะกินรึเปล่านะ?";
    document.getElementById("resultContentItem1Image").style.width = "320px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "อาหารเม็ด.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "อาหารเม็ด อุดมไปด้วยสารอาหารที่ครบถ้วน รสชาติถูกปากน้อนแมว ไม่ต้องมีอะไรมาเพิ่มเติมก็น่าถูกใจน้อนแมวอยู่แล้วหละ ";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "ข้าวหน้าปลาดิบ.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "ข้าวหน้าปลาดิบที่ใช้วัตถุดิบอย่างดี แต่เอนไซม์ในปลาดิบนั้นสามารถทำลายวิตามิน B1 ซึ่งจำเป็นสำหรับน้อนแมว ซึ่งอาจทำให้เกิดอันตรายได้ ควรปรุงให้สุกก่อนนะ";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "ข้าวหน้าปลาย่าง.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "ข้าวหน้าปลาย่างแสนอร่อย ที่ผ่านการคัดสรรวัตถุดิบมาอย่างดี มีประโยขน์ ไม่ว่าใครก็ชอบกันทั้งนั้น!!";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "อาหารเม็ดใส่ปลาดิบ.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "อาหารเม็ดกับปลาดิบที่ดูไม่เข้ากันเท่าไหร่นัก และเอนไซม์ในปลาดิบนั้นยังสามารถทำลายวิตามิน B1 ซึ่งจำเป็นสำหรับน้อนแมวอีกด้วย อาจทำให้เกิดอันตรายต่อร่างกายได้";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "อาหารเม็ดใส่ปลาย่าง.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "นี่คืออาหารเม็ดใส่ปลาย่าง อาจจะดูแปลกๆ แต่ก็รับประทานได้หายห่วง มีสารอาหารครบถ้วน หวังว่าน้อนแมวจะชอบนะ";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "ข้าวหน้าปลาดิบ_ขนมแมว.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      " ข้าวหน้าปลาดิบแสนอร่อยที่มาพร้อมกับขนมแมว แต่เอนไซม์ในปลาดิบนั้นสามารถทำลายวิตามิน B1 ซึ่งจำเป็นสำหรับน้อนแมว อาจทำให้เกิดอันตรายได้";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "ข้าวหน้าปลาย่าง_ขนมแมว.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "ข้าวหน้าปลาย่างที่มาพร้อมกับขนมแมว นอกจากจะได้ลิ้มรสอันแสนอร่อยแล้ว ยังมีของว่างเพิ่มอีก นี่มันเยี่ยมสุดๆไปเลย";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "อาหารเม็ดใส่ปลาดิบ_ขนมแมว.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "อาหารเม็ดกับปลาดิบที่ดูไม่เข้ากันเท่าไหร่นัก ปลาดิบนั้นเป็นอันตรายต่อน้อนแมว ต่อให้มีขนมแมวก็คงไม่ช่วยอะไร...";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  }
  else if (imageName == "อาหารเม็ดใส่ปลาย่าง_ขนมแมว.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "อาหารเม็ดใส่ปลาย่างกับขนมแมว ดูไม่เข้ากันแต่ก็รับประทานได้ มีสารอาหารครบถ้วน แถมยังมีขนมแมวที่น้อนแมวชอบอีกด้วย";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px";
  } else if (imageName == "Trap_state.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "กรุณากดปุ่ม Restart";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px"
    document.getElementById("result-btn").style.display = "none";
  } else if (imageName == "Start_state.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "กรุณาเลือกเมนูอาหาร";
    document.getElementById("resultContentItem1Image").style.width = "300px";
    document.getElementById("resultContentItem1Image").style.height = "300px"
    document.getElementById("result-btn").style.display = "none";
  } else if (imageName == "น้อนถูกใจสิ่งนี้.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "";
    document.getElementById("resultContentItem1Image").style.width = "800px";
    document.getElementById("resultContentItem1Image").style.height = "450px";
    document.getElementById("resultContentItem1Image").style.marginTop = "-80px";
    document.getElementById("resultContentItem1Image").style.marginLeft = "50px";
    document.getElementById("result-btn").style.display = "none";
    isClickNext = true;

  } else if (imageName == "น้อนไม่กิน.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "";
    document.getElementById("resultContentItem1Image").style.width = "800px";
    document.getElementById("resultContentItem1Image").style.height = "450px";
    document.getElementById("resultContentItem1Image").style.marginTop = "-80px";
    document.getElementById("resultContentItem1Image").style.marginLeft = "50px";
    document.getElementById("result-btn").style.display = "none";
    isClickNext = true;

  } else if (imageName == "น้อนอ้วก.png") {
    document.getElementById("result-content-item2-text").innerHTML =
      "";
    document.getElementById("resultContentItem1Image").style.width = "800px";
    document.getElementById("resultContentItem1Image").style.height = "450px";
    document.getElementById("resultContentItem1Image").style.marginTop = "-80px";
    document.getElementById("resultContentItem1Image").style.marginLeft = "50px";
    document.getElementById("result-btn").style.display = "none";
    isClickNext = true;

  }

  document.getElementById("resultPopup").style.display = "block";
}
function closeResultPopup() {
  document.getElementById("result-btn").style.display = "block";
  document.getElementById("resultContentItem1Image").style.margin = "0px 0px";
  document.getElementById("resultPopup").style.display = "none";
}