/*

 */

class Rectangle{
    constructor() {
    }
    //Create without onClick
    create(x,y,height,width,fill,zIndex){
        let svgns = "http://www.w3.org/2000/svg"
        var rect = document.createElementNS(svgns, 'rect'); //Create a path in SVG's namespace
        rect.setAttributeNS(null, 'x', x.toString());
        rect.setAttributeNS(null, 'y', y.toString());
        rect.setAttributeNS(null, 'height', height.toString());
        rect.setAttributeNS(null, 'width', width.toString());
        rect.setAttributeNS(null, 'fill', fill);
        rect.setAttributeNS(null, 'z-index', zIndex);
        $("svg").append(rect);
    }
    //Create with onClick
    createWithOnClick(x,y,height,width,fill,zIndex,onclick){
        let svgns = "http://www.w3.org/2000/svg"
        var rect = document.createElementNS(svgns, 'rect'); //Create a path in SVG's namespace
        rect.setAttributeNS(null, 'x', x.toString());
        rect.setAttributeNS(null, 'y', y.toString());
        rect.setAttributeNS(null, 'height', height.toString());
        rect.setAttributeNS(null, 'width', width.toString());
        rect.setAttributeNS(null, 'fill', fill);
        rect.setAttributeNS(null, 'z-index', zIndex);
        rect.setAttributeNS(null, 'onclick', onclick);
        $("svg").append(rect);
    }
}