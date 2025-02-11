/*
RectangleSVG class will responsible for directly modifying the look of the question box
including  position, highlight.
 */

class RectangleSVG{
    //x
    constructor() {
        let svgns = "http://www.w3.org/2000/svg"
        this.persistent = false
        this.rect = document.createElementNS(svgns, 'rect'); //Create a path in SVG's namespace
        $(".svg-pan-zoom_viewport").append(this.rect);

    }


    // Update without onClick -> final box
    update_boxes(x,y,width,height,fill,zIndex){
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
    updateWithOnClick(x,y,width,height,fill,zIndex,onclick,persistentHighLight){
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
        this.rect.setAttributeNS(null,"class", "answer_box_borderline");


        if(persistentHighLight){
            this.rect.setAttributeNS(null, "stroke", "darkblue");
            this.rect.setAttributeNS(null, "stroke-width","3.5");
            this.rect.setAttributeNS(null, "fill", "#1E99D6")
            this.rect.setAttributeNS(null, 'text-fill', "#FFFFFF")
        }
    }



    // This will keep the highlight on after the user has clicked an answer.
    // May have to update this section of code based on Arin's feedback
    updateStoreHighLight(){
        //console.log("This will store the highlight based on the user selection")
        this.rect.setAttributeNS(null, "stroke", "darkblue");
        this.rect.setAttributeNS(null, "stroke-width","3.5");
        this.rect.setAttributeNS(null, "fill", "#1E99D6")
        this.rect.setAttributeNS(null, 'text-fill', "#FFFFFF")
    }

    // Will highlight the box when it is clicked by the user
    highlight(){
        this.rect.setAttributeNS(null,"stroke", "blue");
        this.rect.setAttributeNS(null,"stroke-width", "3");
    }
    // Will take the highlight off the box when user clicks on the page
    offHighlight(){
        this.rect.setAttributeNS(null,"stroke", "#707070");
        this.rect.setAttributeNS(null,"stroke-width", "0.5");
    }

}