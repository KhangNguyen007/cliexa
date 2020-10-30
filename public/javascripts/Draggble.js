/*
Draggble is a function to move object around SVG
 */



// get canvas related references
// drag related variables
var dragok = false;
var startX;
var startY;


// handle mousedown events
function myDown(e,svg) {
    // tell the browser we're handling this mouse event
    let ctx = svg.getBoundingClientRect();
    // get the current mouse position
    var mx = Math.floor(e.clientX - ctx.left);
    var my = Math.floor(e.clientY - ctx.top);
    // test each rect to see if mouse is inside
    dragok = false;
    for (var i = 0; i < rects.length; i++) {
        var r = rects[i];
        if (mx > r.x && mx < r.x + r.width && my > r.y && my < r.y + r.height) {
            // if yes, set that rects isDragging=true
            dragok = true;
            r.isDragging = true;
        }
    }
    // save the current mouse position
    startX = mx;
    startY = my;
}


// handle mouseup events
function myUp(e) {
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // clear all the dragging flags
    dragok = false;
    for (var i = 0; i < rects.length; i++) {
        rects[i].isDragging = false;
    }
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

        let left = $('#mainPanel').scrollLeft()

        if(r.x >  left + $('#mainPanel').width() - r.width){
            $('#mainPanel').scrollLeft(left + 30);
           // $('#mainPanel').scrollTop(height);
        }

        else if( r.x < left + 5){
            $('#mainPanel').scrollLeft(left - 30);
        }



        // Redraw
        clear()
        draw();

        // reset the starting mouse position for the next mousemove
        startX = mx;
        startY = my;

    }
}