/*
 A connector line between two shapes
 */

class LineSVG{
    constructor() {
        var svgns = "http://www.w3.org/2000/svg";
        this.line = document.createElementNS(svgns, 'line'); //Create a path in SVG's namespace
        $(".svg-pan-zoom_viewport").append(this.line)
    }
    // This will update the connective line's location. The line color is blue.
    // This will have the lines connect to the center of the each box.
    update_lines(x1,y1,x2,y2,fill,stroke,strokeWidth){
        this.line.setAttributeNS(null, 'x1', x1.toString());
        this.line.setAttributeNS(null, 'y1', y1.toString());
        this.line.setAttributeNS(null, 'x2', x2.toString());
        this.line.setAttributeNS(null, 'y2', y2.toString());
        this.line.setAttributeNS(null, 'fill', fill);
        this.line.setAttributeNS(null,"stroke", stroke);
        this.line.setAttributeNS(null,"stroke-width", strokeWidth);
    }

    remove(){
        this.line.setAttributeNS(null, 'x1', "0");
        this.line.setAttributeNS(null, 'y1', "0");
        this.line.setAttributeNS(null, 'x2', "0");
        this.line.setAttributeNS(null, 'y2', "0");
        this.line  = null
    }

}