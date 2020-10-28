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
function draw(){
    for(let i = 0; i < rects.length;i++) {

        //The line to connect rectangle
        if(i>0) {
            var newLine = new Line()
            newLine.create(rects[i-1].x + rects[i-1].width/2,rects[i-1].y + rects[i-1].height/2,rects[i].x + rects[i].width/2,rects[i].y + rects[i].height/2,'stroke:rgb(255,0,0);stroke-width:2')
        }

        //Main rectangle
        let newRect = new Rectangle()
        newRect.create(rects[i].x,rects[i].y,rects[i].height,rects[i].width,'#444444','1')
        //Text for main rectangle
        let newText = new Text()
        newText.create(rects[i].x,rects[i].y,'#000',rects[i].title)
        //Yes rectangle
        let yesRect = new Rectangle()
        yesRect.createWithOnClick(rects[i].x,rects[i].y,25,25,'red','1',"populateRec(1)")
        //No rectangle
        let noRect = new Rectangle()
        noRect.createWithOnClick(rects[i].x+rects[i].width-25,rects[i].y,25,25,'blue','1',"populateRec(0)")

    }
}

function clear(){
    $("svg").empty();
}

