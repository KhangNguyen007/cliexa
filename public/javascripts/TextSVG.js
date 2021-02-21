/*


 */

class TextSVG{
    constructor(x,y,fill,title) {
        /*
          TextSVG constructor will decide if we need one line or multi line in a box
          Example:
          a/ Do you feel bad about yourself - or think that you are a failure or have let you or your family down?
          This sentence should become 2 lines
          b/ Are you experiencing symptoms of depression?
          This sentence should become one line

           Moreover, SVG with Yes or No will go in here without any argument in the constructor
           SVG with Title will go in here with argument in the constructor
         */
        var svgns = "http://www.w3.org/2000/svg";
        this.text = document.createElementNS(svgns, 'text'); //Create a path in SVG's namespace
        $(".svg-pan-zoom_viewport").append(this.text)
        this.line= 1
        if(arguments.length) {

            let nOfLine = 1,line
            let rect = config.getLastRect()
            let emWidth = 6.5,emHeight = 16,emMul = (rect.height / 16) / emHeight,sEmMul = emMul.toString() + 'em'
            let title_width = rect.width / (emMul * emWidth) * .85
            title_width = Math.ceil(title_width)
            if (title.length + 8 >= title_width) {
                nOfLine = Math.ceil(title.length/title_width)
                line = new Array(nOfLine)
                for(let i = 0 ; i < line.length; i++){
                    line[i] = ""
                }
                let splitTitle = title.split(" ")
                let count = 0, i = 0
                while(count < splitTitle.length){
                    if(line[i].length <= title_width) {
                        line[i] += splitTitle[count++]
                        line[i] += " "
                    }
                    else{
                        i++
                    }
                }

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
        }
    }

    updatePosition(x,y){
        this.text.setAttributeNS(null,'x',x);
        this.text.setAttributeNS(null,'y',y);
    }
    updateTitle(x,y,fill,title){
        let rect = config.getLastRect()
        let emWidth = 6.5,emHeight = 16,emMul = (rect.height/16)/emHeight,sEmMul = emMul.toString()+'em'
        for(let i = 0; i < this.contentNode.length;i++){
            this.contentNode[i].setAttributeNS(null,'x',x + 30)
            this.contentNode[i].setAttributeNS(null,'y',y+35 + i*35)
            this.contentNode[i].setAttributeNS(null,'fill',fill);
            this.contentNode[i].setAttributeNS(null,'font-size',sEmMul)
        }
    }

    update(x,y,fill,title){
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
