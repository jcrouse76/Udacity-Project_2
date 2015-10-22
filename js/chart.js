$("#header").append(HTMLskillsStart);

var diameter = 720;
 
var tree = d3.layout.tree()
    .size([360, diameter / 2 - 50])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });
 
var diagonal = d3.svg.diagonal.radial()
    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });
 
var svg = d3.select("div#header").append("svg")
    .attr("width", diameter)
    .attr("height", diameter) /* original code was diameter - 150 */
  .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
 
var root = {
 "name": "Skills",
    "children": [
    {
        "name": "Programming",
        "children": [
            {"name" : "JavaScript", "size": 3938},
            {"name" : "C++", "size": 3812},
            {"name" : "HTML", "size": 6714},
            {"name" : "CSS", "size": 3000},
        ]
    },
    {
        "name": "Operating Systems",
        "children": [
            {"name" : "Mac", "size": 3534},
            {"name" : "Windows", "size": 5731},
            {"name" : "Linux", "size": 7840},
        ]
    },
        {
        "name": "Telefony Platforms",
        "children": [
            {"name" : "Genesys", "size": 3534},
            {"name" : "Cisco", "size": 5731},
            {"name" : "Unix", "size": 7840},
        ]
    },
            {
        "name": "QA",
        "children": [
            {"name" : "Automated Test Tools", "size": 3534},
            {"name" : "Enhancement", "size": 5731},
            {"name" : "Regression", "size": 7840},
        ]
    },
  ]
};
 
  var nodes = tree.nodes(root),
      links = tree.links(nodes);
 
  var link = svg.selectAll(".link")
      .data(links)
    .enter().append("path")
      .attr("class", "link")
      .attr("d", diagonal);
 
  var node = svg.selectAll(".node")
      .data(nodes)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
 
  node.append("circle")
      .attr("r", 4.5);
 
  node.append("text")
      .attr("dy", ".31em")
      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
     .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
     .text(function(d) { return d.name; });
 
d3.select(self.frameElement).style("height", diameter - 150 + "px");
 