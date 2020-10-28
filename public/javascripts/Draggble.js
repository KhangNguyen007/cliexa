// get canvas related references
// drag related variables
var dragok = false;
var startX;
var startY;

// an array of objects that define different rectangles
var prev = -1 //To keep track of the question
var rects = [];
//Rects format example
// x: 50,
// y: 50,
//             width: 100,
//             height: 100,
//             fill: "#444444",
//             isDragging: false,
//             title:  $(this).html()



// handle mousedown events
function myDown(e,svg) {
    // tell the browser we're handling this mouse event
    let ctx = svg.getBoundingClientRect();
    e.preventDefault();
    e.stopPropagation();
    // get the current mouse position
    var mx = Math.floor(e.clientX - ctx.left);
    var my = Math.floor(e.clientY - ctx.top);
    console.log("Mouse down",mx,my)
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
        e.preventDefault();
        e.stopPropagation();
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

        // Redraw
        clear()
        draw();

        // reset the starting mouse position for the next mousemove
        startX = mx;
        startY = my;

    }
}