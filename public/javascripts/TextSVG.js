/*


 */

class TextSVG{
    constructor(x,y,fill,title) {
        var svgns = "http://www.w3.org/2000/svg";
        this.text = document.createElementNS(svgns, 'text'); //Create a path in SVG's namespace
        //Create a subpath here
        $(".svg-pan-zoom_viewport").append(this.text)
        this.line= 1
        let endQuestion = config.getQuestionPosition()
        if(arguments.length) {
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
            let emWidth = 6.5
            let emHeight = 16
            let emMul = (rect1.height / 16) / emHeight
            var sEmMul = emMul.toString() + 'em'
            let title_width = rect1.width / (emMul * emWidth) * .85

            //else {


            if (title.length >= title_width) {
                console.log(endQuestion)
                nOfLine = 2
                line = new Array(nOfLine)
                let startIndex = 0
                let endIndex = (title.length * 0.80)
                title_width = Math.round(title_width)
                let line1 = ""
                let line2 = ""
                for (let i = title_width; i > 0; i--) {

                    if (title[i] == " ") {
                        //console.log("What is the last number:", i)
                        let saveCharacter = i
                        for (let j = 0; j < saveCharacter; j++) {
                            line1 += title[j]
                        }
                        for (let k = i + 1; k < title.length; k++) {
                            line2 += title[k]
                        }
                        //console.log(line1)
                        //console.log(line2)
                        break
                    }
                }

                // This will split the title by the number of spaces. Ex: start = 0 and end = 12 this
                // will split the title of the text by counting 12 spaces
                for (let i = 0; i < nOfLine; i++) {
                    if (i == 0) {
                        line[i] = line1
                    }
                    if (i == 1) {
                        line[i] = line2
                    }
                    //line[i] = title.slice(startIndex,endIndex).join(" ");
                    //startIndex = endIndex
                    //endIndex = title.length
                }
                //console.log("This is in line", line)
            } else {
                line = new Array(nOfLine)
                title = title.split(" ")
                let startIndex = 0
                let endIndex = title.length
                for (let i = 0; i < nOfLine; i++) {
                    line[i] = title.slice(startIndex, endIndex).join(" ");
                    startIndex = endIndex
                    endIndex = title.length
                }

            }

            //}


            //Get the width length
            let rect = config.getLastRect()
            //let rectWidth = rect.width
            //Math formula to calculate this
            //var textNode = document.createTextNode("milind morey");
            //this.text.append(textNode)

            // Nick added this when we reach the end of the box
            // If this does not work remove this if statement and all contents inside
            // Remove the else statements and brackets only
            if (endQuestion == 6 || endQuestion == 14 || endQuestion == 25 || endQuestion == 36 || endQuestion == 46 || endQuestion == 58) {
                console.log("SECOND")
                this.contentNode = new Array(2)
                let cptcode = config.getCPTCODE()
                line[1] = cptcode

                this.contentNode[0] = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                this.contentNode[0].setAttributeNS(null, 'x', x + 30)
                this.contentNode[0].setAttributeNS(null, 'y', y + 35 )//+ i * 35)
                this.contentNode[0].setAttributeNS(null, 'fill', fill);
                this.contentNode[0].setAttributeNS(null, 'font-size', sEmMul)
                this.contentNode[0].innerHTML = line[0]
                this.text.append(this.contentNode[0])
                this.contentNode[1] = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                this.contentNode[1].setAttributeNS(null,'x',x + 360)
                this.contentNode[1].setAttributeNS(null,'y',y+35 + 1 * 250)
                this.contentNode[1].setAttributeNS(null,'fill',fill);
                this.contentNode[1].setAttributeNS(null,'font-size',sEmMul)
                this.contentNode[1].innerHTML = line[1]
                this.text.append(this.contentNode[1])
                this.line = nOfLine
            } // Delete everything in between including this bracket
            else { // Delete this line only
                //console.log("Not 6")
                this.contentNode = new Array(nOfLine)

                for (let i = 0; i < this.contentNode.length; i++) {
                    this.contentNode[i] = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                    this.contentNode[i].setAttributeNS(null, 'x', x + 30)
                    this.contentNode[i].setAttributeNS(null, 'y', y + 35 + i * 35)
                    this.contentNode[i].setAttributeNS(null, 'fill', fill);
                    this.contentNode[i].setAttributeNS(null, 'font-size', sEmMul)
                    this.contentNode[i].innerHTML = line[i]
                    this.text.append(this.contentNode[i])
                }
                this.line = nOfLine
            } // Delete this bracket only
        }

    }
    updatePosition(x,y){
        this.text.setAttributeNS(null,'x',x);
        this.text.setAttributeNS(null,'y',y);
    }
    updateTitle(x,y,fill,title){
        let rect1 = config.getLastRect()
        let emWidth = 6.5
        let emHeight = 16
        let emMul = (rect1.height/16)/emHeight
        var sEmMul = emMul.toString()+'em'
        for(let i = 0; i < this.contentNode.length;i++){
            this.contentNode[i].setAttributeNS(null,'x',x + 30)
            this.contentNode[i].setAttributeNS(null,'y',y+35 + i*35)
            this.contentNode[i].setAttributeNS(null,'fill',fill);
            this.contentNode[i].setAttributeNS(null,'font-size',sEmMul)
        }
    }
    updateCPT_Code(x,y,fill,title,cpt_code){
        // Below is needed to create a second line on the table if it is needed.
        // Modify this
        // Updates the new rectangle's size and question
        // Includes a "yes" button colored green and a "no" button colored red, along with button location
        // If no boolean is 0, if yes boolean is 1
        // Calculate newRect.title * 4em => The width of the rectangle
        // I only need newQuestionTextSVG

        ///////////////// COMMENTED SECTION OUT. UNCOMMENT IF NEEDED ///////////////////////////
        /* ///////  REMOVE THIS '/*' FOR THE FINAL BOX, CURRENTLY UPDATING IN CONSTRUCTOR
        let rect2 = config.getLastRect()
        let emWidth = 6.5
        let emHeight = 16
        let emMul = ((rect2.width)*.011)/emWidth
        var sEmMul = emMul.toString()+'em'

        this.text.setAttributeNS(null,'x',x);
        this.text.setAttributeNS(null,'y',y);
        this.text.setAttributeNS(null,'fill',fill);
        //this.text.setAttributeNS(null,'font-size',sEmMul)
        let contentNode = new Array(2)

        contentNode[0] = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        contentNode[0].setAttributeNS(null,'x',x + 35)
        contentNode[0].setAttributeNS(null,'y',y + 35 )
        contentNode[0].setAttributeNS(null,'fill',fill);
        contentNode[0].setAttributeNS(null,'font-size',sEmMul)
        contentNode[0].innerHTML = title
        this.text.append(contentNode[0])


        contentNode[1] = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        contentNode[1].setAttributeNS(null,'x',x + 360)
        contentNode[1].setAttributeNS(null,'y',y+35 + 250)
        contentNode[1].setAttributeNS(null,'fill',fill);
        contentNode[1].setAttributeNS(null,'font-size',sEmMul)
        contentNode[1].innerHTML = cpt_code
        this.text.append(contentNode[1])
        console.log("LASSST")
        */
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
