/*


 */

class Text{
    constructor() {
    }
    create(x,y,fill,title){
        //Create text
        var svgns = "http://www.w3.org/2000/svg";
        var text = document.createElementNS(svgns, 'text'); //Create a path in SVG's namespace
        //<text x="0" y="15" fill="red">I love SVG!</text>
        text.setAttributeNS(null,'x',x);
        text.setAttributeNS(null,'y',y);
        text.setAttributeNS(null,'fill',fill);
        text.textContent = title;
        $("svg").append(text)
    }
}