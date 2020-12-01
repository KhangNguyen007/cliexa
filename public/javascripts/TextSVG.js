/*


 */

class TextSVG{
    constructor() {
        var svgns = "http://www.w3.org/2000/svg";
        this.text = document.createElementNS(svgns, 'text'); //Create a path in SVG's namespace
        $(".svg-pan-zoom_viewport").append(this.text)
    }
    updatePosition(x,y){
        this.text.setAttributeNS(null,'x',x);
        this.text.setAttributeNS(null,'y',y);
    }
    update(x,y,fill,title){
        //Create text
        //<text x="0" y="15" fill="red">I love SVG!</text>
        this.text.setAttributeNS(null,'x',x);
        this.text.setAttributeNS(null,'y',y);
        this.text.setAttributeNS(null,'fill',fill);
        this.text.setAttributeNS(null,"font-size","2em")
        this.text.textContent = title;
    }


    remove(){
        this.text.setAttributeNS(null,'x',"0");
        this.text.setAttributeNS(null,'y',"0");
        this.text.setAttributeNS(null,'fill',"0");
        this.text.textContent = null
        this.text = null
    }
}