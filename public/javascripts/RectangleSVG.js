/*

 */

class RectangleSVG{
    //x
    constructor() {
        let svgns = "http://www.w3.org/2000/svg"
        this.rect = document.createElementNS(svgns, 'rect'); //Create a path in SVG's namespace
        $(".svg-pan-zoom_viewport").append(this.rect);

    }

    // Updates the position of the boxes
    updatePosition(x,y,width,height){
        this.rect.setAttributeNS(null, 'x', x.toString());
        this.rect.setAttributeNS(null, 'y', y.toString());
        this.rect.setAttributeNS(null, 'width', width.toString());
        this.rect.setAttributeNS(null, 'height', height.toString());
    }

    // Update without onClick
    // This allows the users to click on the boxes.
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


    // Update with onClick
    // Allows the users to select a specific questionnaire from the search box
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

    // Allows the resizing of the boxes containing the questions
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

    // Will highlight the box when it is clicked by the user
    highlight(){
        this.rect.setAttributeNS(null,"stroke", "blue");
        this.rect.setAttributeNS(null,"stroke-width", "1");
    }
    // Will take the highlight off the box when user clicks on the page
    offHighlight(){
        this.rect.setAttributeNS(null,"stroke", "#707070");
        this.rect.setAttributeNS(null,"stroke-width", "0.5");
    }
}