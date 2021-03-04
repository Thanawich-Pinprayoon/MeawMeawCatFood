var $ = go.GraphObject.make;
var myDiagram = $(go.Diagram, "myDiagramDiv");
var node = [
  { key: "Hello" }, // two node data, in an Array
  { key: "World!" },
];
var link = [{ from: "Hello", to: "World!" }];
myDiagram.model = new go.GraphLinksModel(node, link);
