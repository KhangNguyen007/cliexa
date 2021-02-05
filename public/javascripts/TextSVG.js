/*


 */

class TextSVG{
    constructor() {
        var svgns = "http://www.w3.org/2000/svg";
        this.text = document.createElementNS(svgns, 'text'); //Create a path in SVG's namespace
        //Create a subpath here
        $(".svg-pan-zoom_viewport").append(this.text)
    }
    updatePosition(x,y){
        this.text.setAttributeNS(null,'x',x);
        this.text.setAttributeNS(null,'y',y);
    }
    updateTitle(x,y,fill,title){
        // Below is needed to create a second line on the table if it is needed.
        // Modify this
        // Updates the new rectangle's size and question
        // Includes a "yes" button colored green and a "no" button colored red, along with button location
        // If no boolean is 0, if yes boolean is 1
        // Calculate newRect.title * 4em => The width of the rectangle
        // I only need newQuestionTextSVG
        let nOfLine = 1
        let line
        let rect1 = config.getLastRect()
        let title_width= (rect1.width/13)-20
        console.log(title_width)
        if(title.length >= title_width){
            title = title.split(" ")
            nOfLine = 2
            line = new Array(nOfLine)
            let startIndex = 0
            let endIndex = title.length*.82
            for(let i = 0 ; i < nOfLine;i++){
                line[i] = title.slice(startIndex,endIndex).join(" ");
                startIndex = endIndex
                endIndex = title.length
            }
        }
        else{
            line = new Array(nOfLine)
            title = title.split(" ")
            let startIndex = 0
            let endIndex = title.length
            for(let i = 0 ; i < nOfLine;i++){
                line[i] = title.slice(startIndex,endIndex).join(" ");
                startIndex = endIndex
                endIndex = title.length
            }

        }

        this.text.innerHTML = title;
        //Get the width length
        let rect = config.getLastRect()
        //let rectWidth = rect.width
        //Math formula to calculate this
        //var textNode = document.createTextNode("milind morey");
        //this.text.append(textNode)
        var contentNode = new Array(nOfLine)

        for(let i = 0; i < contentNode.length;i++){
            contentNode[i] = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            contentNode[i].setAttributeNS(null,'x',x + 35)
            contentNode[i].setAttributeNS(null,'y',y+35 + i*35)
            contentNode[i].setAttributeNS(null,'fill',fill);
            contentNode[i].setAttributeNS(null,'font-size','2em')
            contentNode[i].innerHTML =line[i]
            this.text.append(contentNode[i])
        }

        //Create span

        //Create multiple lines
        //this.text.tspan = "Hello World1"
        //this.text.tspan = "Hello World2"
    }
    updateCPT_Code(x,y,fill,title,cpt_code){
        // Below is needed to create a second line on the table if it is needed.
        // Modify this
        // Updates the new rectangle's size and question
        // Includes a "yes" button colored green and a "no" button colored red, along with button location
        // If no boolean is 0, if yes boolean is 1
        // Calculate newRect.title * 4em => The width of the rectangle
        // I only need newQuestionTextSVG

        this.text.setAttributeNS(null,'x',x);
        this.text.setAttributeNS(null,'y',y);
        this.text.setAttributeNS(null,'fill',fill);
        this.text.setAttributeNS(null,'font-size','4em')
        var contentNode = new Array(2)
        contentNode[0] = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        contentNode[0].setAttributeNS(null,'x',x + 35)
        contentNode[0].setAttributeNS(null,'y',y+35 + 35)
        contentNode[0].setAttributeNS(null,'fill',fill);
        contentNode[0].setAttributeNS(null,'font-size','0.5em')
        contentNode[0].innerHTML = title
        this.text.append(contentNode[0])
        contentNode[1] = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        contentNode[1].setAttributeNS(null,'x',x + 360)
        contentNode[1].setAttributeNS(null,'y',y+35 + 300)
        contentNode[1].setAttributeNS(null,'fill',fill);
        contentNode[1].setAttributeNS(null,'font-size','0.5em')
        contentNode[1].innerHTML = cpt_code
        this.text.append(contentNode[1])


    }
    update(x,y,fill,title){
        // Below is needed to create a second line on the table if it is needed.
        // Modify this
        // Updates the new rectangle's size and question
        // Includes a "yes" button colored green and a "no" button colored red, along with button location
        // If no boolean is 0, if yes boolean is 1
        // Calculate newRect.title * 4em => The width of the rectangle
        // I only need newQuestionTextSVG
        this.text.setAttributeNS(null,'x',x);
        this.text.setAttributeNS(null,'y',y);
        this.text.setAttributeNS(null,'fill',fill);
        this.text.setAttributeNS(null,'font-size','2em')
        this.text.innerHTML = title;
    }


    remove(){
        this.text.setAttributeNS(null,'x',"0");
        this.text.setAttributeNS(null,'y',"0");
        this.text.setAttributeNS(null,'fill',"0");
        this.text.textContent = null
        this.text = null
    }
}
