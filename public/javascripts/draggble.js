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


function draw(){
    $("svg").empty();
    var svgns = "http://www.w3.org/2000/svg";
    for(let i = 1; i < rects.length;i++){
        var line = document.createElementNS(svgns, 'line'); //Create a path in SVG's namespace
        line.setAttributeNS(null, 'x1', (rects[i-1].x + rects[i-1].width/2).toString());
        line.setAttributeNS(null, 'y1', (rects[i-1].y + rects[i-1].height/2).toString());
        line.setAttributeNS(null, 'x2', (rects[i].x + rects[i].width/2).toString());
        line.setAttributeNS(null, 'y2', (rects[i].y + rects[i].height/2).toString());
        line.setAttributeNS(null, 'style', 'stroke:rgb(255,0,0);stroke-width:2;z-index:-1');
        $("svg").append(line);
    }
    for(let i = 0; i < rects.length;i++) {


        var rect = document.createElementNS(svgns, 'rect'); //Create a path in SVG's namespace
        //Main rectangle
        rect.setAttributeNS(null, 'x', rects[i].x.toString());
        rect.setAttributeNS(null, 'y', rects[i].y.toString());
        rect.setAttributeNS(null, 'height', rects[i].height.toString());
        rect.setAttributeNS(null, 'width', rects[i].width.toString());
        rect.setAttributeNS(null, 'fill', '#444444');
        rect.setAttributeNS(null, 'z-index', '1');
        $("svg").append(rect);
        //Text for main rectangle
        //Create text
        var text = document.createElementNS(svgns, 'text'); //Create a path in SVG's namespace
        //<text x="0" y="15" fill="red">I love SVG!</text>
        text.setAttributeNS(null,'x',rects[i].x);
        text.setAttributeNS(null,'y',rects[i].y);
        text.setAttributeNS(null,'fill','#000');
        text.textContent = rects[i].title;
        $("svg").append(text)

        //Yes rectangle
        var rect = document.createElementNS(svgns, 'rect'); //Create a path in SVG's namespace
        rect.setAttributeNS(null, 'x', rects[i].x.toString());
        rect.setAttributeNS(null, 'y', rects[i].y.toString());
        rect.setAttributeNS(null, 'height', "25");
        rect.setAttributeNS(null, 'width', "25");
        rect.setAttributeNS(null, 'fill', 'red');
        rect.setAttributeNS(null, 'z-index', '1');
        rect.setAttributeNS(null, 'onclick', "populateRec(1)");
        $("svg").append(rect)

        //No rectangle (Nick will work on this) 



    }
    console.log(rects[0].x,rects[0].y)
}

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
            // Borderline function here
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
        draw();

        // reset the starting mouse position for the next mousemove
        startX = mx;
        startY = my;

    }
}