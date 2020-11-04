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
    // get the current mouse position
    var mx = Math.floor(e.clientX - ctx.left);
    var my = Math.floor(e.clientY - ctx.top);
    // test each rect to see if mouse is inside
    dragok = false;
    for (var i = rects.length - 1; i >=0; i--) {
        var r = rects[i];
        if (mx > r.x && mx < r.x + r.width && my > r.y && my < r.y + r.height) {
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
    console.log("StartX,StartY:",startX,startY)
}


// handle mouseup events
function myUp(e) {
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

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
    if (dragok) {
        // tell the browser we're handling this mouse event
        // get the current mouse position
        var mx = Math.floor(e.clientX - ctx.left);
        var my = Math.floor(e.clientY - ctx.top);

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

        //Move scroll left only
        let left = $('#mainPanel').scrollLeft()
        if(r.x >  left + $('#mainPanel').width() - r.width){
            $('#mainPanel').scrollLeft(left + 30);
           // $('#mainPanel').scrollTop(height);
        }
        else if( r.x < left + 5){
            $('#mainPanel').scrollLeft(left - 30);
        }

        // Redraw
        draw(index);
        // reset the starting mouse position for the next mousemove
        startX = mx;
        startY = my;
    }
    //For selectedRectangle only
    else if(mousedown){
        //Calculate new mouse position
        var mx = Math.floor(e.clientX - ctx.left);
        var my = Math.floor(e.clientY - ctx.top);
        // calculate the distance the mouse has moved
        // since the last mousemove
        var dx = mx - startX;
        var dy = my - startY;

        //current mouse on the 4/4 quarter
        if(rectX <= mx && rectY <= my) {
            selectedRectangle.update(rectX.toString(),rectY.toString(),(dy).toString(),(dx).toString(),"#FFC433",'1')
            for (var i = 0; i < rects.length; i++) {
                var r = rects[i];
                if ( r.x > rectX && r.x < mx && r.y > rectY && r.y <my && r.y + r.height < my && r.width < mx) {
                    // if yes, set that rects isDragging=true
                    console.log("")
                    rectsSVG[i].highlight()
                }
            }
        }
        //current mouse on the 3/4 quarter
        else if(rectX >= mx && rectY < my){
            selectedRectangle.update((mx).toString(),(rectY).toString(),(my-rectY).toString(),(rectX-mx).toString(),"#FFC433",'1')
        }
        //current mouse on the 2/4 quarter
        else if(rectX > mx && rectY > my){
            selectedRectangle.update((mx).toString(),(my).toString(),(rectY-my).toString(),(rectX-mx).toString(),"#FFC433",'1')
        }
        //current mouse on the 1/4 quarter
        else if(rectX < mx && rectY > my){
            selectedRectangle.update((mx-(mx-rectX)).toString(),(my).toString(), (rectY-my).toString(),(mx-rectX).toString(),"#FFC433",'1')
        }
        //While doing this should highlight all the rectangle within the range



    }
}