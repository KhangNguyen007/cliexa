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
    console.log("Calling this function")
    for(let i = 0 ; i < rects.length;i++){
        rectsSVG[i].create(rects[i].x, rects[i].y, rects[i].height, rects[i].width, '#444444', '1')
        titleTextSVG[i].create(rects[i].x, rects[i].y, '#444444', rects[i].title)
        yesRectSVG[i].createWithOnClick(rects[i].x, rects[i].y, 25, 25, 'red', '1', "populateRec(1)")
        noRectSVG[i].createWithOnClick(rects[i].x + rects[i].width - 25, rects[i].y, 25, 25, 'blue', '1', "populateRec(0)")
    }
}
function draw(index){
    console.log("My Index:",index)
    rectsSVG[index].create(rects[index].x, rects[index].y, rects[index].height, rects[index].width, '#444444', '1')
    titleTextSVG[index].create(rects[index].x, rects[index].y, '#444444', rects[index].title)
    yesRectSVG[index].createWithOnClick(rects[index].x, rects[index].y, 25, 25, 'red', '1', "populateRec(1)")
    noRectSVG[index].createWithOnClick(rects[index].x + rects[index].width - 25, rects[index].y, 25, 25, 'blue', '1', "populateRec(0)")
}

function clear(){
    rects.pop()
    rectsSVG[rectsSVG.length-1].remove()
    titleTextSVG[titleTextSVG.length-1].remove()
    yesRectSVG[yesRectSVG.length-1].remove()
    noRectSVG[noRectSVG.length-1].remove()
    rectsSVG.pop()
    titleTextSVG.pop()
    yesRectSVG.pop()
    noRectSVG.pop()
    console.log("Rects:",rects)
}
/*
function clear(){
    $("svg").empty();
}
 */
//Click the mousedown and will not touch any shape and will highlight the selected shape
function selectShape(){

}

