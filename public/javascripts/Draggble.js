/*
Draggble is a collection of functions to move object around SVG
 */
// get canvas related references
// drag related variables
var dragok = false;
var mousedown = false;
var index = -1
var startX;
var startY;
var rectX
var rectY

// handle mousedown events
function myDown(e,svg) {
    // tell the browser we're handling this mouse event
    let ctx = svg.getBoundingClientRect();
    let rectsSVG = config.getRectSVG()
    let rects    = config.getRects()
    let scale_and_translate = config.getScaleTranslate()
    // get the current mouse position
    var mx = Math.floor((e.clientX - ctx.left - scale_and_translate.translateX)/scale_and_translate.x_scale);
    var my = Math.floor((e.clientY - ctx.top - scale_and_translate.translateY)/scale_and_translate.y_scale);

    // test each rect to see if mouse is inside
    dragok = false;
    for (var i = rects.length - 1; i >=0; i--) {
        var r = rects[i];
        let x = r.x
        let width = r.width
        let height = r.height
        let y = r.y
        if (mx > x && mx < x + width && my > y && my < y + height) {
            // if yes, set that rects isDragging=true
            dragok = true;
            index = i
            r.isDragging = true;
            rectsSVG[i].highlight()
            break
        }
        else{
            rectsSVG[i].offHighlight()
        }
    }
    if(dragok === false){
        mousedown = true
        rectX = mx
        rectY = my
        for(let i = 0; i < rects.length;i++){
            rectsSVG[i].offHighlight()
        }
    }
    // save the current mouse position
    startX = mx;
    startY = my;
    console.log("Mouse down:",startX,startY)
}


// handle mouseup events
function myUp(e) {
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();
    let rects = config.getRects()
    // clear all the dragging flags
    dragok = false;
    mousedown = false
    index = -1
    for (var i = 0; i < rects.length; i++) {
        rects[i].isDragging = false;
    }

    selectedRectangle.update(0,0,0,0,"#FFC433",'1')
}


// handle mouse moves
function myMove(e,svg) {
    // if we're dragging anything...
    let ctx = svg.getBoundingClientRect();
    let rects = config.getRects()
    let rectsSVG = config.getRectSVG()
    let scale_and_translate = config.getScaleTranslate()
    if (dragok) {
        // tell the browser we're handling this mouse event
        // get the current mouse position
        var mx = Math.floor((e.clientX - ctx.left - scale_and_translate.translateX)/scale_and_translate.x_scale);
        var my = Math.floor((e.clientY - ctx.top - scale_and_translate.translateY)/scale_and_translate.y_scale);

        // calculate the distance the mouse has moved
        // since the last mousemove
        var dx = mx - startX;
        var dy = my - startY;

        // move each rect that isDragging
        // by the distance the mouse has moved
        // since the last mousemove
        for (var i = 0; i < rects.length; i++) {
            var r = rects[i];
            if (r.isDragging) {
                r.x += dx;
                r.y += dy;
            }
        }

        // Redraw
        main.draw(index);
        // reset the starting mouse position for the next mousemove
        startX = mx;
        startY = my;
    }
    //For selectedRectangle only
    else if(mousedown){
        //Calculate new mouse position
        var mx = Math.floor(e.clientX - ctx.left - scale_and_translate.translateX)/scale_and_translate.x_scale;
        var my = Math.floor(e.clientY - ctx.top - scale_and_translate.translateY)/scale_and_translate.y_scale;
        // calculate the distance the mouse has moved
        // since the last mousemove
        var dx = mx - startX;
        var dy = my - startY;


        //current mouse on the 4/4 quarter
        if(startX <= mx && startY <= my) {
            selectedRectangle.update(startX.toString(),startY.toString(),dx.toString(),dy.toString(),"#FFC433",'1')
            for (var i = 0; i < rects.length; i++) {
                var r = rects[i];
                if ( r.x > startX && r.x < mx && r.y > startY && r.y <my && r.y + r.height < my && r.width < mx) {
                    console.log("")
                    rectsSVG[i].highlight()
                }
            }
        }
        //current mouse on the 3/4 quarter
        else if(startX >= mx && startY < my){
            selectedRectangle.update((mx).toString(),(rectY).toString(),(rectX-mx).toString(),(my-rectY).toString(),"#FFC433",'1')
        }
        //current mouse on the 2/4 quarter
        else if(startX > mx && startY > my){
            selectedRectangle.update((mx).toString(),(my).toString(),(rectX-mx).toString(),(rectY-my).toString(),"#FFC433",'1')
        }
        //current mouse on the 1/4 quarter
        else if(startX < mx && startY > my){
            selectedRectangle.update((mx-(mx-rectX)).toString(),(my).toString(), (mx-rectX).toString(),(rectY-my).toString(),"#FFC433",'1')
        }
        //While doing this should highlight all the rectangle within the range



    }
}

function myWheel(e,panZoom){
    let value = ($('.svg-pan-zoom_viewport').css('transform'));
    let matrix = value.substring(value.lastIndexOf("(") + 1, value.lastIndexOf(")")).split(',')
    config.setScaleTranslate(matrix[0],matrix[3],matrix[4],matrix[5])
}