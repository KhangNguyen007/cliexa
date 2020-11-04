/*

 */

class RectangleSVG{
    //x
    constructor() {
        let svgns = "http://www.w3.org/2000/svg"
        this.rect = document.createElementNS(svgns, 'rect'); //Create a path in SVG's namespace
        $("svg").append(this.rect);

    }
    //Update without onClick
    create(x,y,height,width,fill,zIndex){
        this.rect.setAttributeNS(null, 'x', x.toString());
        this.rect.setAttributeNS(null, 'y', y.toString());
        this.rect.setAttributeNS(null, 'height', height.toString());
        this.rect.setAttributeNS(null, 'width', width.toString());
        this.rect.setAttributeNS(null, 'fill', fill);
        this.rect.setAttributeNS(null, 'z-index', zIndex);
    }
    //Update with onClick
    createWithOnClick(x,y,height,width,fill,zIndex,onclick){
        this.rect.setAttributeNS(null, 'x', x.toString());
        this.rect.setAttributeNS(null, 'y', y.toString());
        this.rect.setAttributeNS(null, 'height', height.toString());
        this.rect.setAttributeNS(null, 'width', width.toString());
        this.rect.setAttributeNS(null, 'fill', fill);
        this.rect.setAttributeNS(null, 'z-index', zIndex);
        this.rect.setAttributeNS(null, 'onclick', onclick);
    }

    resize(x,y,height,width,fill,zIndex){
        this.rect.setAttributeNS(null, 'x', x.toString());
        this.rect.setAttributeNS(null, 'y', y.toString());
        this.rect.setAttributeNS(null, 'height', height.toString());
        this.rect.setAttributeNS(null, 'width', width.toString());
        this.rect.setAttributeNS(null, 'fill', fill);
        this.rect.setAttributeNS(null, 'z-index', zIndex);
    }
    remove(){
        this.rect.setAttributeNS(null, 'x', "0");
        this.rect.setAttributeNS(null, 'y', "0");
        this.rect.setAttributeNS(null, 'height',"0");
        this.rect.setAttributeNS(null, 'width', "0");
        this.rect.setAttributeNS(null, 'fill', "0");
        this.rect.setAttributeNS(null, 'z-index', "0");
        this.rect  = null
    }
    highlight(){
        this.rect.setAttribute("stroke", "blue");
        this.rect.setAttribute("stroke-width", "4");
    }
    offHighlight(){
        this.rect.setAttribute("stroke", null);
        this.rect.setAttribute("stroke-width", null);
    }
}