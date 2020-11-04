/*
 A connector line between two shapes
 */

class Line{
    constructor() {
        var svgns = "http://www.w3.org/2000/svg";
        this.line = document.createElementNS(svgns, 'line'); //Create a path in SVG's namespace
        $("svg").append(this.line);
    }
    create(x1,y1,x2,y2,style){

        this.line.setAttributeNS(null, 'x1', x1.toString());
        this.line.setAttributeNS(null, 'y1', y1.toString());
        this.line.setAttributeNS(null, 'x2', x2.toString());
        this.line.setAttributeNS(null, 'y2', y2.toString());
        this.line.setAttributeNS(null, 'style', style)
    }
}