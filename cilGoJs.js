var now = 0;
var oldFrom = -1,
  oldTo = 0,
  toggleOpacity = 0;
nodeDataArray = [
  { key: -1, loc: "-75 28" },

  { key: 0, loc: "0 0", text: "เริ่มต้น", category: "rStart" },

  { key: 1, loc: "200 -100", text: "ข้าว", category: "Start" },
  { key: 2, loc: "200 100", text: "อาหารเม็ด", category: "Start" },

  { key: 3, loc: "400 -250", text: "ข้าวหน้า\nปลาดิบ", category: "Start" },
  { key: 4, loc: "400 -84", text: "ข้าวหน้า\nปลาย่าง", category: "Start" },

  { key: 5, loc: "400 84", text: "อาหารเม็ดใส่ปลาดิบ", category: "Start" },
  { key: 6, loc: "400 250", text: "อาหารเม็ดใส่ปลาย่าง", category: "Start" },

  {
    key: 7,
    loc: "600 -200",
    text: "ข้าวหน้า\nปลาดิบ\n+ขนมแมว",
    category: "Start",
  },
  {
    key: 8,
    loc: "600 -100",
    text: "ข้าวหน้า\nปลาย่าง\n+ขนมแมว",
    category: "Start",
  },

  {
    key: 9,
    loc: "600 100",
    text: "อาหารเม็ดใส่ปลาดิบ\n+ขนมแมว",
    category: "Start",
  },
  {
    key: 10,
    loc: "600 200",
    text: "อาหารเม็ดใส่ปลาย่าง\n+ขนมแมว",
    category: "Start",
  },

  { key: 11, loc: "800 -125", text: "น้อน\nอ้วก", category: "End" },
  { key: 12, loc: "800 0", text: "น้อน\nถูกใจ", category: "End" },
  { key: 13, loc: "800 125", text: "น้อน\nไม่กิน", category: "End" },

  { key: 14, loc: "1000 0", text: "Trap\nstate", category: "Start" },
];

linkDataArray = [
  //start
  {
    from: 0,
    to: 0,
    points: [5, 60, -30, 60, -30, 100, 10, 100, 10, 65],
    segmentIndex: 2,
    segmentFraction: 0.5,
    text: "ปลาดิบ,ปลาย่าง,\nขนมแมว,Restart,\nConfirm",
  },
  { from: 0, to: 1, text: "ข้าว", segmentIndex: 2, segmentFraction: 0.4 },
  { from: 0, to: 2, text: "อาหารเม็ด", segmentIndex: 2, segmentFraction: 0.4 },

  //ข้าว

  {
    from: 1,
    to: 0,
    points: [208, -40, 70, -40, 70, 10],
    text: "ข้าว",
    segmentIndex: 0,
    segmentFraction: 1,
  },
  {
    from: 1,
    to: 1,
    points: [273, -40, 300, -40, 300, -20, 250, -20],
    text: "ขนมแมว",
    segmentIndex: 1,
    segmentFraction: 1,
  },
  {
    from: 1,
    to: 2,
    points: [210, -35, 210, 115],
    text: "อาหารเม็ด",
    segmentFraction: 0.4,
  },
  {
    from: 1,
    to: 3,
    points: [273, -80, 310, -80, 310, -180, 413, -180],
    text: "ปลาดิบ",
    segmentIndex: 1,
    segmentFraction: 0.35,
  },
  {
    from: 1,
    to: 4,
    points: [273, -50, 300, -50, 325, -50, 400, -50],
    text: "ปลาย่าง",
    segmentIndex: 2,
    segmentFraction: 0.4,
  },
  {
    from: 1,
    to: 13,
    text: "Confirm",
    points: [250, -20, 250, 50, 785, 50, 785, 150, 803, 150],
    segmentIndex: 0,
    segmentFraction: 0.2,
  },

  //อาหารเม็ด
  {
    from: 2,
    to: 0,
    points: [208, 120, 70, 120, 70, 70],
    text: "อาหารเม็ด",
    segmentIndex: 0,
    segmentFraction: 0.9,
  },
  {
    from: 2,
    to: 1,
    points: [230, 103, 230, -22],
    text: "ข้าว",
    segmentFraction: 0.4,
  },
  {
    from: 2,
    to: 2,
    points: [273, 160, 300, 160, 300, 180, 250, 180],
    text: "ขนมแมว",
    segmentIndex: 1,
    segmentFraction: 1,
  },
  {
    from: 2,
    to: 5,
    points: [273, 120, 400, 120],
    text: "ปลาดิบ",
    segmentIndex: 2,
    segmentFraction: 0.4,
  },
  {
    from: 2,
    to: 6,
    points: [280, 150, 320, 150, 320, 310, 405, 310],
    text: "ปลาย่าง",
    segmentIndex: 1,
    segmentFraction: 0.35,
  },
  {
    from: 2,
    to: 12,
    text: "Confirm",
    points: [240, 100, 240, 40, 800, 40],
    segmentIndex: 0,
    segmentFraction: 0.2,
  },

  // ข้าวหน้าปลาดิบ
  {
    from: 3,
    to: 1,
    points: [400, -200, 285, -200, 285, -90, 265, -90],
    text: "ปลาดิบ",
    segmentIndex: 1,
    segmentFraction: 0.35,
  },
  {
    from: 3,
    to: 3,
    points: [406, -230, 370, -230, 370, -250, 427, -250],
    segmentIndex: 1,
    segmentFraction: 0.5,
    text: "ข้าว",
  },
  {
    from: 3,
    to: 4,
    text: "ปลาย่าง",
    points: [430, -171, 430, -83],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 3,
    to: 5,
    text: "อาหารเม็ด",
    points: [465, -240, 570, -240, 570, 100, 475, 100],
    segmentIndex: 1,
    segmentFraction: 0.05,
  },
  {
    from: 3,
    to: 7,
    text: "ขนมแมว",
    points: [465, -180, 612, -180],
    segmentIndex: 0,
    segmentFraction: 0.19,
  },
  {
    from: 3,
    to: 11,
    text: "Confirm",
    points: [478, -210, 820, -210, 820, -120],
    segmentIndex: 1,
    segmentFraction: 0.05,
  },

  //ข้าวหน้าปลาย่าง
  {
    from: 4,
    to: 1,
    points: [407, -65, 280, -65],
    text: "ปลาย่าง",
    segmentIndex: 0,
    segmentFraction: 0.5,
  },
  {
    from: 4,
    to: 3,
    text: "ปลาดิบ",
    points: [450, -83, 450, -171],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 4,
    to: 4,
    text: "ข้าว",
    points: [402, -40, 370, -40, 370, -20, 406, -20],
    segmentIndex: 1,
    segmentFraction: 1,
  },
  {
    from: 4,
    to: 6,
    text: "อาหาร\nเม็ด",
    points: [471, -20, 580, -20, 580, 300, 480, 300],
    segmentIndex: 1,
    segmentFraction: 0.05,
  },
  {
    from: 4,
    to: 8,
    text: "ขนมแมว",
    points: [455, -80, 605, -80],
    segmentIndex: 0,
    segmentFraction: 0.25,
  },
  {
    from: 4,
    to: 12,
    text: "Confirm",
    points: [480, -50, 510, -50, 510, 40, 800, 40],
    segmentIndex: 1,
    segmentFraction: 0.25,
  },

  //อาหารเม็ดใส่ปลาดิบ
  {
    from: 5,
    to: 2,
    points: [407, 105, 262, 105],
    text: "ปลาดิบ",
    segmentIndex: 2,
    segmentFraction: 0.4,
  },
  {
    from: 5,
    to: 5,
    points: [400, 130, 370, 130, 370, 150, 410, 150],
    segmentIndex: 1,
    segmentFraction: 1,
    text: "อาหาร\nเม็ด",
  },
  {
    from: 5,
    to: 6,
    text: "ปลาย่าง",
    points: [430, 162, 430, 251],
    segmentIndex: 0,
    segmentFraction: 0.3,
  },
  {
    from: 5,
    to: 9,
    text: "ขนมแมว",
    points: [470, 150, 600, 150],
    segmentIndex: 0,
    segmentFraction: 0.22,
  },
  {
    from: 5,
    to: 11,
    text: "Confirm",
    points: [470, 150, 600, 150],
    segmentIndex: 0,
    segmentFraction: 0.22,
  },

  // อาหารเม็ดใส่ปลาย่าง
  {
    from: 6,
    to: 2,
    points: [400, 290, 340, 290, 340, 140, 280, 140],
    text: "ปลาย่าง",
    segmentIndex: 1,
    segmentFraction: 0.35,
  },
  {
    from: 6,
    to: 3,
    text: "ข้าว",
    points: [460, 90, 560, 90, 560, -230, 475, -230],
    segmentIndex: 1,
    segmentFraction: 0.05,
  },
  {
    from: 6,
    to: 4,
    text: "ข้าว",
    points: [474, 310, 550, 310, 550, -10, 462, -10],
    segmentIndex: 1,
    segmentFraction: 0.1,
  },
  {
    from: 6,
    to: 5,
    text: "ปลาดิบ",
    points: [450, 252, 450, 165],
    segmentIndex: 0,
    segmentFraction: 0.5,
  },
  {
    from: 6,
    to: 6,
    points: [406, 270, 370, 270, 370, 250, 427, 250],
    segmentIndex: 1,
    segmentFraction: 0.5,
    text: "อาหารเม็ด",
  },
  {
    from: 6,
    to: 10,
    text: "ขนมแมว",
    points: [465, 260, 605, 260],
    segmentIndex: 0,
    segmentFraction: 0.2,
  },
  {
    from: 6,
    to: 12,
    text: "Confirm",
    points: [480, 280, 510, 280, 510, 40, 800, 40],
    segmentIndex: 1,
    segmentFraction: 0.2,
  },

  // ข้าวหน้าปลาดิบ_ขนมแมว
  {
    from: 7,
    to: 3,
    text: "ขนมแมว",
    points: [615, -190, 475, -190],
    segmentIndex: 0,
    segmentFraction: 0.19,
  },
  {
    from: 7,
    to: 7,
    text: "ข้าว,\nปลาดิบ",
    points: [660, -195, 660, -230, 690, -230, 690, -190, 667, -190],
    segmentIndex: 1,
    segmentFraction: 0.5,
  },
  {
    from: 7,
    to: 8,
    text: "ปลาย่าง",
    points: [610, -135, 610, -85],
    segmentIndex: 0,
    segmentFraction: 0.5,
  },
  {
    from: 7,
    to: 9,
    text: "อาหาร\nเม็ด",
    points: [679, -170, 720, -170, 720, 120, 675, 120],
    segmentIndex: 1,
    segmentFraction: 0.15,
  },
  {
    from: 7,
    to: 11,
    text: "Confirm",
    points: [680, -160, 780, -160, 780, -120, 818, -120],
    segmentIndex: 0,
    segmentFraction: 0.9,
  },

  // ข้าวหน้าปลาย่าง_ขนมแมว
  {
    from: 8,
    to: 4,
    text: "ขนมแมว",
    points: [600, -70, 472, -70],
    segmentIndex: 0,
    segmentFraction: 0.7,
  },
  {
    from: 8,
    to: 7,
    text: "ปลาดิบ",
    points: [670, -85, 670, -135],
    segmentIndex: 0,
    segmentFraction: 0.5,
  },
  {
    from: 8,
    to: 8,
    text: "ข้าว,\nปลาย่าง",
    points: [660, -25, 660, 0, 690, 0, 690, -30, 666, -30],
    segmentIndex: 1,
    segmentFraction: 0.5,
  },
  {
    from: 8,
    to: 10,
    text: "อาหาร\nเม็ด",
    points: [677, -50, 750, -50, 750, 250, 675, 250],
    segmentIndex: 1,
    segmentFraction: 0.15,
  },
  {
    from: 8,
    to: 112,
    text: "Confirm",
    points: [677, -60, 777, -60, 777, 10, 810, 10],
    segmentIndex: 0,
    segmentFraction: 1,
  },

  // อาหารเม็ดใส่ปลาดิบ_ขนมแมว
  {
    from: 9,
    to: 5,
    text: "ขนมแมว",
    points: [600, 160, 462, 160],
    segmentIndex: 0,
    segmentFraction: 0.75,
  },
  {
    from: 9,
    to: 7,
    text: "ข้าว",
    points: [680, 130, 730, 130, 730, -150, 680, -150],
    segmentIndex: 1,
    segmentFraction: 0.4,
  },
  {
    from: 9,
    to: 9,
    text: "อาหารเม็ด,\nปลาดิบ",
    points: [660, 105, 660, 80, 690, 80, 690, 110, 665, 110],
    segmentIndex: 1,
    segmentFraction: 0.5,
  },
  {
    from: 9,
    to: 10,
    text: "ปลาย่าง",
    points: [610, 165, 610, 215],
    segmentIndex: 0,
    segmentFraction: 0.5,
  },
  {
    from: 9,
    to: 11,
    text: "Confirm",
    points: [680, 140, 760, 140, 760, -90, 800, -90],
    segmentIndex: 0,
    segmentFraction: 0.33,
  },

  // อาหารเม็ดใส่ปลาย่าง_ขนมแมว
  {
    from: 10,
    to: 6,
    text: "ขนมแมว",
    points: [615, 270, 475, 270],
    segmentIndex: 0,
    segmentFraction: 0.75,
  },
  {
    from: 10,
    to: 8,
    text: "ข้าว",
    points: [678, 240, 740, 240, 740, -40, 675, -40],
    segmentIndex: 1,
    segmentFraction: 0.15,
  },
  {
    from: 10,
    to: 9,
    text: "ปลาดิบ",
    points: [670, 215, 670, 165],
    segmentIndex: 0,
    segmentFraction: 0.5,
  },
  {
    from: 10,
    to: 10,
    text: "อาหารเม็ด,\nปลาย่าง",
    points: [660, 275, 660, 300, 690, 300, 690, 270, 666, 270],
    segmentIndex: 1,
    segmentFraction: 0.5,
  },
  {
    from: 10,
    to: 12,
    text: "Confirm",
    points: [678, 230, 770, 230, 770, 40, 800, 40],
    segmentIndex: 1,
    segmentFraction: 0.25,
  },

  // น้อนอ้วก
  {
    from: 11,
    to: 14,
    text: "ข้าว,อาหารเม็ด,\nปลาดิบ,ปลาย่าง,\nขนมแมว,Confirm",
    points: [880, -90, 1040, -90, 1040, 0],
    segmentIndex: 1,
    segmentFraction: 0.25,
  },

  // น้อนถูกใจสิ่งนี้
  {
    from: 12,
    to: 14,
    text: "ข้าว,อาหารเม็ด,\nปลาดิบ,ปลาย่าง,\nขนมแมว,Confirm",
    points: [880, 40, 1000, 40],
    segmentIndex: 0,
    segmentFraction: 0.45,
  },

  // Trap_state
  {
    from: 14,
    to: 14,
    points: [1075, 20, 1190, 20, 1190, 60, 1075, 60],
    segmentIndex: 1,
    segmentFraction: 0.5,
    text: "ข้าว,อาหารเม็ด\n,ปลาดิบ,ปลาย่าง,\nขนมแมว,Confirm\nRestart",
  },

  // น้อนไม่กิน
  {
    from: 13,
    to: 14,
    text: "ข้าว,อาหารเม็ด,\nปลาดิบ,ปลาย่าง,\nขนมแมว,Confirm",
    points: [880, 160, 1040, 160, 1040, 80],
    segmentIndex: 1,
    segmentFraction: 0.25,
  },
  // Restart
  { from: -1, to: 0, text: "" },
  // {
  //   from: 1,
  //   to: 0,
  //   text: "Restart",
  //   points: [240, -100, 240, -270, 40, -270, 40, 0],
  // },
  // {
  //   from: 2,
  //   to: 0,
  //   text: "Restart",
  //   points: [240, 180, 240, 350, 40, 350, 40, 80],
  // },
  // {
  //   from: 3,
  //   to: 0,
  //   text: "Restart",
  //   points: [440, -250, 440, -270, 40, -270, 40, 0],
  //   segmentFraction: 0.5,
  // },
  // {
  //   from: 4,
  //   to: 0,
  //   text: "Restart",
  //   points: [475, -30, 530, -60, 530, -270, 40, -270, 40, 0],
  //   segmentFraction: 0.55,
  // },
  // {
  //   from: 5,
  //   to: 0,
  //   text: "Restart",
  //   points: [475, 110, 530, 140, 530, 350, 40, 350, 40, 80],
  //   segmentFraction: 0.55,
  // },
  // {
  //   from: 7,
  //   to: 0,
  //   text: "Restart",
  //   points: [440, 330, 440, 350, 40, 350, 40, 80],
  //   segmentFraction: 0.5,
  // },
  // {
  //   from: 7,
  //   to: 0,
  //   text: "Restart",
  //   points: [640, -200, 640, -270, 40, -270, 40, 0],
  //   segmentFraction: 0.7,
  // },
  // {
  //   from: 8,
  //   to: 0,
  //   text: "Restart",
  //   points: [680, -60, 710, -100, 710, -270, 40, -270, 40, 0],
  //   segmentFraction: 0.7,
  // },
  // {
  //   from: 9,
  //   to: 0,
  //   text: "Restart",
  //   points: [680, 140, 710, 180, 710, 350, 40, 350, 40, 80],
  //   segmentFraction: 0.7,
  // },
  // {
  //   from: 10,
  //   to: 0,
  //   text: "Restart",
  //   points: [640, 280, 640, 350, 40, 350, 40, 80],
  //   segmentIndex: 0,
  //   segmentFraction: 0.7,
  // },
  // {
  //   from: 11,
  //   to: 0,
  //   points: [876, -100, 1125, -100, 1125, -270, 40, -270, 40, 0],
  //   segmentIndex: 0,
  //   segmentFraction: 0.25,
  //   text: "Restart",
  // },
  // {
  //   from: 12,
  //   to: 0,
  //   points: [
  //     870,
  //     20,
  //     870,
  //     -30,
  //     876,
  //     -30,
  //     1125,
  //     -30,
  //     1125,
  //     -100,
  //     1125,
  //     -270,
  //     40,
  //     -270,
  //     40,
  //     0,
  //   ],
  //   segmentIndex: 1,
  //   segmentFraction: 0.25,
  //   text: "Restart",
  // },
  // {
  //   from: 13,
  //   to: 0,
  //   text: "Restart",
  //   points: [840, 205, 840, 350, 40, 350, 40, 80],
  //   segmentIndex: 0,
  //   segmentFraction: 0.5,
  // },
  // {
  //   from: 14,
  //   to: 0,
  //   points: [1080, 40, 1125, 40, 1125, 350, 40, 350, 40, 80],
  //   segmentIndex: 1,
  //   segmentFraction: 0.5,
  //   text: "Restart",
  // },
];

var $ = go.GraphObject.make; // for conciseness in defining templates

// How to use
// call this function with these parameters
// nodeId : [0,14] id of target node
// ex. highlightNode(2)
// *** only 1 node can highlighted ***
// if want more node to be highlighted, contact previous programmer na ja
function highlightNode(nodeId) {
  var node = myDiagram.findNodeForKey(nodeId++);
  // console.log(node);
  if (node !== null) {
    // make sure the selected node is in the viewport
    myDiagram.scrollToRect(node.actualBounds);
    // move the large yellow node behind the selected node to highlight it
    highlighter.location = new go.Point(
      node.location.x + 40,
      node.location.y + 40
    );
    // console.log(node.location)
    // console.log(highlighter.location)
  }
}

// How to use
// call this function with these parameters
// from : [-1,14] id of "from" node
// to : [-1,14] id of "to" node
// colorPath : value of RGB path's color [value also word ex. "#52ce60",'blue']
// colorText : value of RGB path's textBlock [value also word ex. "#52ce60",'red']
// ex. highlightPath(0,1,'blue','red')
// if want smth more , contact CXZ na ja
function highlightPath(
  from,
  to,
  colorPathf,
  colorTextf,
  colorPatht,
  colorTextt
) {
  for (p of myDiagram.model.linkDataArray) {
    if (p.from == from && p.to == to) {
      // console.log(p);
      myDiagram.model.set(p, "colorPath", colorPathf);
      myDiagram.model.set(p, "colorText", colorTextf);
      myDiagram.model.set(p, "bold", true);
      // break;
    } else if (p.from == to) {
      myDiagram.model.set(p, "colorPath", colorPatht);
      myDiagram.model.set(p, "colorText", colorTextt);
      myDiagram.model.set(p, "bold", true);
    } else {
      myDiagram.model.set(p, "bold", false);
    }
  }
  oldFrom = from;
  oldTo = to;
  if (toggleOpacity == 1) _toggleShowPath();
}

function toggleShowPath() {
  if (toggleOpacity == 1) toggleOpacity = 0;
  else toggleOpacity = 1;
  _toggleShowPath();
}

function _toggleShowPath() {
  for (p of myDiagram.model.linkDataArray) {
    if (p.from == oldFrom && p.to == oldTo) {
      if (toggleOpacity == 1) myDiagram.model.set(p, "opacity", toggleOpacity);
    } else if (p.from == oldTo) {
      if (toggleOpacity == 1) myDiagram.model.set(p, "opacity", toggleOpacity);
    } else {
      myDiagram.model.set(p, "opacity", 1 - toggleOpacity);
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function init() {
  myDiagram = $(
    go.Diagram,
    "myDiagramDiv", // must name or refer to the DIV HTML element
    {
      // grid: $(go.Panel, "Grid",
      //   { gridCellSize: new go.Size(10, 10) },
      //   $(go.Shape, "LineH", { stroke: "lightgray", strokeWidth: 0.5 }),
      //   $(go.Shape, "LineV", { stroke: "lightgray", strokeWidth: 0.5 })
      // ),
      // "draggingTool.isGridSnapEnabled": true,

      "animationManager.initialAnimationStyle": go.AnimationManager.None,
      InitialAnimationStarting: function (e) {
        var animation = e.subject.defaultAnimation;
        animation.easing = go.Animation.EaseOutExpo;
        animation.duration = 1000;
        animation.add(e.diagram, "scale", 0.1, 1);
        animation.add(e.diagram, "opacity", 0, 1);
      },

      // have mouse wheel events zoom in and out instead of scroll up and down
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
      // enable undo & redo
      "undoManager.isEnabled": true,
      positionComputation: function (diagram, pt) {
        return new go.Point(Math.floor(pt.x), Math.floor(pt.y));
      },
      // "ChangedSelection": showLocalOnFullClick
    }
  );

  // define the Node template
  myDiagram.nodeTemplate = $(
    go.Node,
    "Auto",
    {
      // locationSpot: go.Spot.TopCenter,
      isShadowed: true,
      shadowBlur: 1,
      shadowOffset: new go.Point(0, 1),
      shadowColor: "rgba(0, 0, 0, .14)", //color of shadow
    },
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
      go.Point.stringify
    ),
    // define the node's outer shape, which will surround the TextBlock
    $(
      go.Shape,
      "RoundedRectangle",
      { parameter1: 20, spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight },
      {
        name: "SHAPE",
        fill: null,
        strokeWidth: 0,
        stroke: null,
        portId: "", // this Shape is the Node's port, not the whole Node
        fromLinkable: true,
        fromLinkableSelfNode: true,
        fromLinkableDuplicates: true,
        toLinkable: true,
        toLinkableSelfNode: true,
        toLinkableDuplicates: true,
        cursor: "pointer",
      }
    ),
    $(
      go.TextBlock,
      {
        font: "Quicksand, sans-serif",
        margin: 7,
        stroke: "rgba(0, 0, 0, .87)",
      },
      new go.Binding("text").makeTwoWay()
    )
  );

  myDiagram.nodeTemplateMap.add(
    "Start",
    $(
      go.Node,
      "Spot",
      { desiredSize: new go.Size(80, 80) },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(go.Shape, "Circle", {
        fill: "#d1d4c9" /* green */,
        stroke: null,
        portId: "",
        fromLinkable: true,
        fromLinkableSelfNode: true,
        fromLinkableDuplicates: true,
        toLinkable: true,
        toLinkableSelfNode: true,
        toLinkableDuplicates: true,
        // cursor: "pointer",
      }),
      $(
        go.TextBlock,
        "Start",
        {
          font: "bold 13pt Bai Jamjuree, sans-serif",
          textAlign: "center",
          stroke: "black",
        },
        new go.Binding("text").makeTwoWay()
      )
    )
  );
  myDiagram.nodeTemplateMap.add(
    "rStart",
    $(
      go.Node,
      "Spot",
      { desiredSize: new go.Size(80, 80) },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(go.Shape, "Circle", {
        fill: "#ff6768" /* green */,
        stroke: null,
        portId: "",
        fromLinkable: true,
        fromLinkableSelfNode: true,
        fromLinkableDuplicates: true,
        toLinkable: true,
        toLinkableSelfNode: true,
        toLinkableDuplicates: true,
        // cursor: "pointer",
      }),
      $(
        go.TextBlock,
        "Start",
        {
          font: "bold 14pt Quicksand, sans-serif",
          textAlign: "center",
          stroke: "white",
        },
        new go.Binding("text").makeTwoWay()
      )
    )
  );

  myDiagram.nodeTemplateMap.add(
    "End",
    $(
      go.Node,
      "Spot",
      { desiredSize: new go.Size(80, 80) },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(go.Shape, "Circle", {
        fill: "#17b794",
        stroke: null,
        portId: "",
        fromLinkable: true,
        fromLinkableSelfNode: true,
        fromLinkableDuplicates: true,
        toLinkable: true,
        toLinkableSelfNode: true,
        toLinkableDuplicates: true,
        cursor: "pointer",
      }),
      $(go.Shape, "Circle", {
        fill: null,
        desiredSize: new go.Size(70, 70),
        strokeWidth: 2,
        stroke: "whitesmoke",
      }),
      $(
        go.TextBlock,
        "Confirm",
        {
          font: "bold 13pt Quicksand, sans-serif",
          stroke: "whitesmoke",
        },
        new go.Binding("text").makeTwoWay()
      )
    )
  );

  myDiagram.linkTemplate = $(
    go.Link, // the whole link panel
    {
      relinkableFrom: true,
      relinkableTo: true,
      reshapable: true,
      resegmentable: true,
      layerName: "Background",
    },
    {
      routing: go.Link.AvoidsNodes,
      adjusting: go.Link.End,
      curve: go.Link.JumpOver,
      corner: 5,
      opacity: 1.0,
    },
    new go.Binding("opacity").makeTwoWay(),
    new go.Binding("points").makeTwoWay(),
    $(
      go.Shape, // the link path shape
      { isPanelMain: true, strokeWidth: 1 },
      new go.Binding("stroke", "colorPath", function (progress) {
        return progress;
      }),
      new go.Binding("strokeWidth", "bold", function (progress) {
        return progress == true ? 4 : 0.8;
      })
    ),

    $(
      go.Shape, // the arrowhead
      { toArrow: "Standard", stroke: null },
      new go.Binding("fill", "colorPath", function (progress) {
        return progress;
      }),
      new go.Binding("scale", "bold", function (progress) {
        return progress == true ? 2 : 1;
      })
    ),
    $(
      go.TextBlock,
      "transition", // the label text
      {
        textAlign: "center",
        font: "bold 9.9pt Bai Jamjuree, arial, sans-serif",
        // font: "15pt helvetica, arial, sans-serif",
        margin: 4,
        segmentIndex: 0,
        segmentFraction: 0.2,
        background: "#121212",
      },
      new go.Binding("text").makeTwoWay(),
      new go.Binding("segmentIndex").makeTwoWay(),
      new go.Binding("segmentFraction").makeTwoWay(),
      new go.Binding("stroke", "colorText", function (progress) {
        return progress;
      })
    )
  );

  // Create a part in the background of the full diagram to highlight the selected node
  highlighter = $(
    go.Part,
    "Auto",
    {
      layerName: "Background",
      selectable: false,
      isInDocumentBounds: false,
      locationSpot: go.Spot.Center,
    },
    $(go.Shape, "Ellipse", {
      fill: $(go.Brush, "Radial", { 0.5: "#ff004d", 1.0: "rgba(0, 0, 0, 0)" }), // shadow highlight
      stroke: null,
      desiredSize: new go.Size(150, 150),
    })
  );
  myDiagram.add(highlighter);

  myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
  // myDiagram.model.isReadOnly = true;
  myDiagram.isReadOnly = true;

  highlightNode(machine.current_State.key);
  resetPathColor();
  highlightPath(-1, 0, "#f30a49", "#F08080", "#17b794", "#40E0D0");
}

////////////////////////////////////////////////////////////////////////////
///////////////////// frame edit ////////////////////////////////

function restart() {
  document.getElementById("inputstring").innerHTML = "";
  document.getElementById("name").innerHTML = "ตำอะไรเอ่ย";
  document.getElementById("imgout").src =
    "image/" + imgmap["Start_state"] + ".png";
  machine.current_State = { name: "Start_state", key: 0 };
  machine.prev_State = { name: "none", key: -1 };
  highlightNode(machine.current_State.key);
  for (let i = 0; i < bottonList.length; i++) {
    document.getElementById(bottonList[i]).checked = false;
  }
  resetPathColor();
  highlightPath(-1, 0, "#f30a49", "#F08080", "#17b794", "#40E0D0");
  Botton.state = {
    ข้าว: false,
    อาหารเม็ด: false,
    ปลาดิบ: false,
    ปลาย่าง: false,
    ขนมแมว: false,
    Confirm: false,
    Restart: false,
  };
}

function handleClick(bottonName) {
  document.getElementById("inputstring").innerHTML += " " + bottonName;
  // botton something
  let indx = mixer.indexOf(bottonName);
  if (indx >= 0) {
    if (Botton.state[bottonName]) {
      document.getElementById(Botton.map[bottonName]).checked = false;
      Botton.state[mixer[indx]] = false;
    } else {
      Botton.state[mixer[indx]] = true;
    }
    for (let i = 0; i < mixer.length; i++) {
      if (i != indx) {
        Botton.state[mixer[i]] = false;
      }
    }
  }

  machine.input_String.push(bottonName);

  // clear highlight path

  highlightPath(
    machine.prev_State.key,
    machine.current_State.key,
    "#9C9C9C",
    "#828282",
    "#9C9C9C",
    "#828282"
  );

  //set prev state
  machine.prev_State = machine.current_State;

  // get next state
  let next = machine.getNext(bottonName);

  // highlight path from current state to next state
  highlightPath(
    machine.current_State.key,
    next.key,
    "#f30a49",
    "#F08080",
    "#17b794",
    "#40E0D0"
  );

  // highlight next state
  highlightNode(next.key);

  if (lfc1.indexOf(next.name) >= 0) {
    document.getElementById("plara").checked = false;
    Botton.state["ปลาร้า"] = false;
  }
  if (lfc2.indexOf(next.name) >= 0) {
    for (let i = 0; i < mixer.length; i++) {
      document.getElementById(Botton.map[mixer[i]]).checked = false;
      Botton.state[mixer[i]] = false;
    }
  }

  if (next.name == "Start_state") {
    document.getElementById("pednoi").checked = false;
    Botton.state["เผ็ดน้อย"] = false;
    document.getElementById("pedmak").checked = false;
    Botton.state["เผ็ดมาก"] = false;
  }

  // set current state = next state
  machine.setCurrentState(next);

  if (["Confirm", "Trap_state"].indexOf(machine.current_State.name) < 0) {
    document.getElementById(
      "name"
    ).innerHTML = machine.current_State.name.split("_").join("");
    document.getElementById("imgout").src =
      "image/" + imgmap[machine.current_State.name] + ".png";
  }
  if (machine.current_State.name == "Start_state") {
    document.getElementById("name").innerHTML = "ตำอะไรเอ่ย";
    document.getElementById("imgout").src =
      "image/" + imgmap["Start_state"] + ".png";
  }

  console.log(machine.current_State.name);
  saveKaikemPlara();

  /*
  .......##.......##.......##.......##.########....###.....#######.....########.########..####.########.########.########........##.......##.......##.......##.......##.......##
  ......##.......##.......##.......##.....##......##.##...##.....##....##.......##.....##..##.....##....##.......##.....##......##.......##.......##.......##.......##.......##.
  .....##.......##.......##.......##......##.....##...##..##.....##....##.......##.....##..##.....##....##.......##.....##.....##.......##.......##.......##.......##.......##..
  ....##.......##.......##.......##.......##....##.....##.##.....##....######...##.....##..##.....##....######...##.....##....##.......##.......##.......##.......##.......##...
  ...##.......##.......##.......##........##....#########.##.....##....##.......##.....##..##.....##....##.......##.....##...##.......##.......##.......##.......##.......##....
  ..##.......##.......##.......##.........##....##.....##.##.....##....##.......##.....##..##.....##....##.......##.....##..##.......##.......##.......##.......##.......##.....
  .##.......##.......##.......##..........##....##.....##..#######.....########.########..####....##....########.########..##.......##.......##.......##.......##.......##......
  */
  if (
    bottonName == "Confirm" &&
    document.getElementById("name").innerHTML != "ตำอะไรเอ่ย" &&
    machine.current_State.name == "Confirm"
  ) {
    let timerInterval;
    Swal.fire({
      title:
        "เมนูของคุณ" + " " + document.getElementById("name").innerHTML + "!👍",
      imageUrl: "image/papaya.svg",
      imageWidth: 160,
      imageHeight: 130,
      imageAlt: "Custom image",
      timerProgressBar: true,
      timer: 3000,
      onBeforeOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector("b");
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }
}

function resetPathColor() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      // highlightPath(i,j,'#666666','#666666')
      highlightPath(i, j, "#9C9C9C", "#9C9C9C", "#9C9C9C", "#9C9C9C");
      highlightPath(-1, -1, "#f30a49", "#f30a49", "#f30a49", "#f30a49");
    }
  }
}

function saveKaikemPlara() {
  if (machine.current_State.name.indexOf("ไข่") < 0) {
    document.getElementById("kaikem").checked = false;
    Botton.state["ไข่เค็ม"] = false;
    if (machine.current_State.name.indexOf("ปู") >= 0) {
      document.getElementById("pukem").checked = true;
      Botton.state["ปูเค็ม"] = true;
    } else if (machine.current_State.name.indexOf("หมู") >= 0) {
      document.getElementById("muyoo").checked = true;
      Botton.state["หมูยอ"] = true;
    }
  }
}

let Botton = {
  map: {
    ข้าว: "ข้าว",
    อาหารเม็ด: "อาหารเม็ด",
    ปลาดิบ: "ปลาดิบ",
    ปลาย่าง: "ปลาย่าง",
    ขนมแมว: "ขนมแมว",
    Confirm: "Confirm",
    Reset: "Reset",
  },
  state: {
    ข้าว: false,
    อาหารเม็ด: false,
    ปลาดิบ: false,
    ปลาย่าง: false,
    ขนมแมว: false,
    Confirm: false,
    Reset: false,
  },
};

let imgmap = {
  Start_state: "xxx",
  ข้าว: "1rice",
  อาหารเม็ด: "2med",
  ข้าวหน้าปลาดิบ: "3sashimiRice",
  ข้าวหน้าปลาย่าง: "4grillFishRice",
  อาหารเม็ดใส่ปลาดิบ: "5sashimiMed",
  อาหารเม็ดใส่ปลาย่าง: "6grillFishMed",
  ข้าวหน้าปลาดิบ_ขนมแมว: "7sashimiRice-S",
  ข้าวหน้าปลาย่าง_ขนมแมว: "8grillFishRice-S",
  อาหารเม็ดใส่ปลาดิบ_ขนมแมว: "9sashimiMed-S",
  อาหารเม็ดใส่ปลาย่าง_ขนมแมว: "10grillFishMed-S",
  น้อนอ้วก: "11:Yucky",
  น้อนถูกใจสิ่งนี้: "12Like",
  น้อนไม่กิน: "13Nope",
};

let mixer = ["ปูเค็ม", "หมูยอ", "ไข่เค็ม"];
let lfc1 = [
  // "Start_state",
  // "ตำไทย_เผ็ดน้อย",
  // "ตำไทย_เผ็ดมาก",
  // "ปูเค็ม_เผ็ดน้อย",
  // "หมูยอ_เผ็ดน้อย",
  // "ไข่เค็ม_เผ็ดน้อย",
  // "ปูเค็ม_เผ็ดมาก",
  // "หมูยอ_เผ็ดมาก",
  // "ไข่เค็ม_เผ็ดมาก",
  "Start_state",
  "ข้าว ",
  "อาหารเม็ด",
  "ข้าวหน้าปลาดิบ",
  "ข้าวหน้าปลาย่าง",
  "อาหารเม็ดใส่ปลาดิบ",
  "อาหารเม็ดใส่ปลาย่าง",
]; // listForClearActiveBotton

let lfc2 = ["Start_state", "ข้าว", "อาหารเม็ด"]; // same
let lfc3 = [];

let bottonList = [
  "ข้าว",
  "อาหารเม็ด",
  "ปลาดิบ",
  "ปลาย่าง",
  "ขนมแมว",
  "Confirm",
  "Reset",
];
