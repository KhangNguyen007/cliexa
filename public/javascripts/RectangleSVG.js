/*

 */

class RectangleSVG{
    //x
    constructor() {
        let svgns = "http://www.w3.org/2000/svg"
        this.rect = document.createElementNS(svgns, 'rect'); //Create a path in SVG's namespace
        $(".svg-pan-zoom_viewport").append(this.rect);

    }
    updatePosition(x,y,width,height){
        this.rect.setAttributeNS(null, 'x', x.toString());
        this.rect.setAttributeNS(null, 'y', y.toString());
        this.rect.setAttributeNS(null, 'width', width.toString());
        this.rect.setAttributeNS(null, 'height', height.toString());
    }
    //Update without onClick
    update(x,y,width,height,fill,zIndex){
        this.rect.setAttributeNS(null, 'x', x.toString());
        this.rect.setAttributeNS(null, 'y', y.toString());
        this.rect.setAttributeNS(null, 'rx',"10");
        this.rect.setAttributeNS(null, 'ry',"10");
        this.rect.setAttributeNS(null, 'height', height.toString());
        this.rect.setAttributeNS(null, 'width', width.toString());
        this.rect.setAttributeNS(null, 'fill', fill);
        this.rect.setAttributeNS(null, 'z-index', zIndex);
        this.rect.setAttributeNS(null,"stroke", "#707070");
        this.rect.setAttributeNS(null,"stroke-width", "0.5");
    }
    //Update with onClick
    updateWithOnClick(x,y,width,height,fill,zIndex,onclick){
        this.rect.setAttributeNS(null, 'x', x.toString());
        this.rect.setAttributeNS(null, 'y', y.toString());
        this.rect.setAttributeNS(null, 'rx',"5");
        this.rect.setAttributeNS(null, 'ry',"5");
        this.rect.setAttributeNS(null, 'height', height.toString());
        this.rect.setAttributeNS(null, 'width', width.toString());
        this.rect.setAttributeNS(null, 'fill', fill);
        this.rect.setAttributeNS(null, 'z-index', zIndex);
        this.rect.setAttributeNS(null, 'onclick', onclick);
        this.rect.setAttributeNS(null,"stroke", "#707070");
        this.rect.setAttributeNS(null,"stroke-width", "0.5");
    }

    resize(x,y,width,height,fill,zIndex){
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
        this.rect.setAttributeNS(null,"stroke", "blue");
        this.rect.setAttributeNS(null,"stroke-width", "1");
    }
    offHighlight(){
        this.rect.setAttributeNS(null,"stroke", "#707070");
        this.rect.setAttributeNS(null,"stroke-width", "0.5");
    }
}