/*
This file will be our main function
 */

/*
function main(){
    let main_object = {'rectangle':[],'circle':[]}
    var prev = -1 //To keep track of the question
        var rects = [];
        // an array of objects that define different rectangles

    //Rects format example
    // x: 50,
    // y: 50,
    //             width: 100,
    //             height: 100,
    //             fill: "#444444",
    //             isDragging: false,
    //             title:  $(this).html()



    clear()
    for (const property in main_object) {
        console.log(`${property}: ${main_object[property]}`);
        draw()
    }
    //Go back function

    //Draw shape

    //Hightlight shape when click

    //Draw

}
*/

function drawAll(){

    for(let i = 1 ; i < rects.length;i++){
        linesSVG[i-1].update(rects[i-1].x+rects[i-1].width/2,rects[i-1].y+rects[i-1].height/2,rects[i].x+rects[i].width/2,rects[i].y+rects[i].height/2,"red")
    }

    for(let i = 0 ; i < rects.length;i++){
        rectsSVG[i].update(rects[i].x, rects[i].y, rects[i].height, rects[i].width, "#FFFFFF", '1')
        titleTextSVG[i].update(rects[i].x, rects[i].y, '#444444', rects[i].title)
        yesRectSVG[i].updateWithOnClick(rects[i].x, rects[i].y + heightSize/3, heightSize/3, widthSize/3, 'green', '1', "populateRec(1)")
        noRectSVG[i].updateWithOnClick(rects[i].x + rects[i].width - widthSize/3, rects[i].y + heightSize/3, heightSize/3, widthSize/3, 'red', '1', "populateRec(0)")
    }

}
function draw(index) {



    rectsSVG[index].update(rects[index].x, rects[index].y, rects[index].height, rects[index].width, "#FFFFFF", '1')
    titleTextSVG[index].update(rects[index].x, rects[index].y + 50, '#444444', rects[index].title)
    yesRectSVG[index].updateWithOnClick(rects[index].x, rects[index].y + heightSize / 3, heightSize / 3, widthSize / 3, 'green', '1', "populateRec(1)")
    noRectSVG[index].updateWithOnClick(rects[index].x + rects[index].width - widthSize / 3, rects[index].y + heightSize / 3, heightSize / 3, widthSize / 3, 'red', '1', "populateRec(0)")

    for(let i = 1 ; i < rects.length;i++){
        linesSVG[i-1].update(rects[i-1].x+rects[i-1].width/2,rects[i-1].y+rects[i-1].height/2,rects[i].x+rects[i].width/2,rects[i].y+rects[i].height/2,"red")
    }

}

function clear(){
    rects.pop()
    rectsSVG[rectsSVG.length-1].remove()
    titleTextSVG[titleTextSVG.length-1].remove()
    yesRectSVG[yesRectSVG.length-1].remove()
    noRectSVG[noRectSVG.length-1].remove()
    if(linesSVG.length >= 1)
        linesSVG[linesSVG.length-1].remove()
    rectsSVG.pop()
    titleTextSVG.pop()
    yesRectSVG.pop()
    noRectSVG.pop()
    if(linesSVG.length >= 1)
        linesSVG.pop()
}
/*
function clear(){
    $("svg").empty();
}
 */
//Click the mousedown and will not touch any shape and will highlight the selected shape
function selectShape(){

}

function populateRec(answer){
    console.log("Expand new rectangle: ",answer)
    let index
    let title
    //Here is the logic to expand question
    if(answer){
        index = data[prev].yes
        if(index === undefined) {
            index = data[prev].goto
        }
        title = data[index].q
    }
    else{
        index = data[prev].no

        if(index === undefined) {
            index = data[prev].goto
        }
        //Update title and index for the new rectangle
        title = data[index].q
    }


    if(rects[rects.length-1].x + $('#mainPanel').width() > $('#svg').width()){
        $('#svg').width( rects[rects.length-1].x + $('#mainPanel').width() )
    }

    else {

        let newRect = new Rectangle(rects[rects.length - 1].x + $('#mainPanel').width(), rects[rects.length - 1].y, widthSize, heightSize, "#444444", false, title, rects.length)
        let newRectSVG = new RectangleSVG()
        let newTitleTextSVG = new TextSVG()
        let newYesRectSVG = new RectangleSVG()
        let newNoRectSVG = new RectangleSVG()
        let newLineSVG = new LineSVG()

        if(rects.length >= 1){
            newLineSVG.update(rects[rects.length-1].x+rects[rects.length-1].width/2,rects[rects.length-1].y+rects[rects.length-1].height/2,newRect.x + newRect.width/2,newRect.y+newRect.height/2,"red")

        }
        newRectSVG.update(newRect.x, newRect.y, heightSize, widthSize, "#FFFFFF", 0)
        newTitleTextSVG.update(newRect.x, newRect.y+50, '#000', newRect.title)
        newYesRectSVG.updateWithOnClick(newRect.x, newRect.y, 25, 25, 'green', '1', "populateRec(1)")
        newNoRectSVG.updateWithOnClick(newRect.x + newRect.width - 25, newRect.y, 25, 25, 'red', '1', "populateRec(0)")
        linesSVG.push(newLineSVG)
        rects.push(newRect)
        rectsSVG.push(newRectSVG)
        titleTextSVG.push(newTitleTextSVG)
        yesRectSVG.push(newYesRectSVG)
        noRectSVG.push(newNoRectSVG)


        prev = index
        //Should slide to the new rectangle position
        slide()
        draw(newRect.id)
    }
}
function slide(){
  //  let left = $('#mainPanel').scrollLeft();
   // $('#mainPanel').scrollLeft(left+$('#mainPanel').width());
}

