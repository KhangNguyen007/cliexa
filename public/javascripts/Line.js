/*
 A connector line between two shapes
 */

class Line{
    constructor() {
    }
    create(x1,y1,x2,y2,style){
        var svgns = "http://www.w3.org/2000/svg";
        var line = document.createElementNS(svgns, 'line'); //Create a path in SVG's namespace
        line.setAttributeNS(null, 'x1', x1.toString());
        line.setAttributeNS(null, 'y1', y1.toString());
        line.setAttributeNS(null, 'x2', x2.toString());
        line.setAttributeNS(null, 'y2', y2.toString());
        line.setAttributeNS(null, 'style', style);
        $("svg").append(line);
    }
}