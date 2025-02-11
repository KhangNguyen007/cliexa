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
class TextSVG{
    constructor(x,leftAlign,y,rightAlign,fill,title,property) {

        var svgns = "http://www.w3.org/2000/svg";
        this.text = document.createElementNS(svgns, 'text'); //Create a path in SVG's namespace
        $(".svg-pan-zoom_viewport").append(this.text)
        this.rect = document.createElementNS(svgns, 'rect'); //Create a path in SVG's namespace
        $(".svg-pan-zoom_viewport").append(this.rect);
        this.line= 1
        this.emMul = 2
        this.x = 0
        this.y = 0

        if(property === "description"){
            this.emMul = 2
        }

        if(arguments.length) {
            let nOfLine = 1,line
            let rect = config.getLastRect()
            //1em -> 16px, how many em depend on the width
            //Who decide how many em?
            if( rect.width <= 1200){
                this.emMul = 2

            }

            let title_width = (title.length)*this.emMul*8 // Calculate the end boundary of box

            // If the title is longer than the box, create multiple lines as needed
            let CPT_buffer = config.getCPTDetailBuffer()

            if (title_width >= rect.width) {

                nOfLine = Math.ceil(title_width/(rect.width))
                line = new Array(nOfLine)
                for(let i = 0 ; i < line.length; i++){
                    line[i] = ""
                }
                let splitTitle = title.split(" ")
                let count = 0, i = 0, saveCH = 0

                while(count < splitTitle.length){
                    // * 7.45
                    if((line[i].length)*this.emMul*7.40 + leftAlign + CPT_buffer <= rect.width) {
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
                this.contentNode[i].innerHTML = line[i]
                this.text.append(this.contentNode[i])
            }
        }
    }


    updateTitle(x,leftAlign,y,heightAlign,fill){
        let sEmMul = this.emMul.toString() + 'em'
        for(let i = 0; i < this.contentNode.length;i++){
            this.contentNode[i].setAttributeNS(null,'x',x + leftAlign)
            this.contentNode[i].setAttributeNS(null,'y',y+35 + i*35 + heightAlign-30)
            this.contentNode[i].setAttributeNS(null,'fill',fill);
            this.contentNode[i].setAttributeNS(null,'font-size',sEmMul)
        }
    }

    update_yes_no_text(x,y,fill,title,onclick){
        let sEmMul = this.emMul.toString() + 'em'
        this.text.setAttributeNS(null,'x',x);
        this.text.setAttributeNS(null,'y',y);
        this.text.setAttributeNS(null,'fill',fill);
        this.text.setAttributeNS(null,'font-size',sEmMul)
        this.text.setAttributeNS(null,'onclick',onclick)
        this.text.innerHTML = title;
    }

    update_CPT_Text(x,y,fill,title){
        let sEmMul = this.emMul.toString() + 'em'
        this.text.setAttributeNS(null,'x',x);
        this.text.setAttributeNS(null,'y',y);
        this.text.setAttributeNS(null,'fill',fill);
        this.text.setAttributeNS(null,'font-size',sEmMul)
        this.text.innerHTML = title;
    }



}
