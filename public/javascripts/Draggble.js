/*
Description: Draggble is a collection of functions to move/scale/translate object in SVG
Author: Khang Nguyen
 */

class Draggble {
    constructor() {
        this.dragok = false;
        this.mousedown = false;
        this.index = -1
        this.startX = 0
        this.startY = 0
        this.rectX = 0
        this.rectY = 0
    }

    // handle mousedown events
    myDown(e, svg) {
        // tell the browser we're handling this mouse event
        let ctx = svg.getBoundingClientRect();
        let rectsSVG = config.getRectSVG()
        let rects = config.getRects()
        let scale_and_translate = config.getScaleTranslate()
        // get the current mouse position
        var mx = Math.floor((e.clientX - ctx.left - scale_and_translate.translateX) / scale_and_translate.x_scale);
        var my = Math.floor((e.clientY - ctx.top - scale_and_translate.translateY) / scale_and_translate.y_scale);

        // test each rect to see if mouse is inside
        this.dragok = false;
        for (var i = rects.length - 1; i >= 0; i--) {
            var r = rects[i];
            let x = r.x
            let width = r.width
            let height = r.height
            let y = r.y
            if (mx > x && mx < x + width && my > y && my < y + height) {
                // if yes, set that rects isDragging=true
                this.dragok = true;
                this.index = i
                r.isDragging = true;
                rectsSVG[i].highlight()
                break
            } else {
                rectsSVG[i].offHighlight()
            }
        }
        if (this.dragok === false) {
            this.mousedown = true
            this.rectX = mx
            this.rectY = my
            for (let i = 0; i < rects.length; i++) {
                rectsSVG[i].offHighlight()
            }
        }
        config.updateRects(rects)
        config.updateRectsSVG(rectsSVG)
        // save the current mouse position
        this.startX = mx;
        this.startY = my;
    }

    // handle mouseup events
    myUp(e) {
        // tell the browser we're handling this mouse event
        e.preventDefault();
        e.stopPropagation();
        let rects = config.getRects()
        // clear all the dragging flags
        this.dragok = false;
        this.mousedown = false
        this.index = -1
        for (var i = 0; i < rects.length; i++) {
            rects[i].isDragging = false;
        }
        config.updateRects(rects)
        selectedRectangle.update_boxes(0,0,0,0,"#FFC433",'1')
    }

    // handle mouse moves
    myMove(e,svg,rects1) {
        // if we're dragging anything...
        let ctx = svg.getBoundingClientRect();
        let rects = config.getRects()
        let rectsSVG = config.getRectSVG()
        let scale_and_translate = config.getScaleTranslate()
        if (this.dragok) {
            // tell the browser we're handling this mouse event
            // get the current mouse position
            var mx = Math.floor((e.clientX - ctx.left - scale_and_translate.translateX) / scale_and_translate.x_scale);
            var my = Math.floor((e.clientY - ctx.top - scale_and_translate.translateY) / scale_and_translate.y_scale);

            // calculate the distance the mouse has moved
            // since the last mousemove
            var dx = mx - this.startX;
            var dy = my - this.startY;

            // move each rect that isDragging
            // by the distance the mouse has moved
            // since the last mousemove
            for (var i = 0; i < rects.length; i++) {
                var r = rects[i];
                var jj = rectsSVG[i];
                if (r.isDragging) {
                    r.x += dx;
                    r.y += dy;
                }
            }
            config.updateRectsSVG(rectsSVG)
            config.updateRects(rects)
            // If  final
            if(main.getFinal() && this.index === rects.length-1 ) {
                main.drawFinalBox(this.index);
            }
            //If not final
            else{
                main.draw(this.index);
            }

            //If final box
            // reset the starting mouse position for the next mousemove
            this.startX = mx;
            this.startY = my;
        }
        //For selectedRectangle only
        else if (this.mousedown) {
            //Calculate new mouse position
            var mx = Math.floor(e.clientX - ctx.left - scale_and_translate.translateX) / scale_and_translate.x_scale;
            var my = Math.floor(e.clientY - ctx.top - scale_and_translate.translateY) / scale_and_translate.y_scale;
            // calculate the distance the mouse has moved
            // since the last mousemove
            var dx = mx - this.startX;
            var dy = my - this.startY;

            //current mouse on the 4/4 quarter
            if (this.startX <= mx && this.startY <= my) {
                selectedRectangle.update_boxes(this.startX.toString(), this.startY.toString(), dx.toString(), dy.toString(), "#FFC433", '1')
                for (var i = 0; i < rects.length; i++) {
                    var r = rects[i];
                    if (r.x > this.startX && r.x < mx && r.y > this.startY && r.y < my && r.y + r.height < my && r.width < mx) {
                        rectsSVG[i].highlight()
                    }
                }
            }
            //current mouse on the 3/4 quarter
            else if (this.startX >= mx && this.startY < my) {
                selectedRectangle.update_boxes((mx).toString(), (this.rectY).toString(), (this.rectX - mx).toString(), (my - this.rectY).toString(), "#FFC433", '1')
            }
            //current mouse on the 2/4 quarter
            else if (this.startX > mx && this.startY > my) {
                selectedRectangle.update_boxes((mx).toString(), (my).toString(), (this.rectX - mx).toString(), (this.rectY - my).toString(), "#FFC433", '1')
            }
            //current mouse on the 1/4 quarter
            else if (this.startX < mx && this.startY > my) {
                selectedRectangle.update_boxes((mx - (mx - this.rectX)).toString(), (my).toString(), (mx - this.rectX).toString(), (this.rectY - my).toString(), "#FFC433", '1')
            }
            //While doing this should highlight all the rectangle within the range
        }
    }

    //Handle when wheeling the mouse
    //Update relative scale and translate in SVG
    myWheel(e,panZoom){
        let value = ($('.svg-pan-zoom_viewport').css('transform'));
        let matrix = value.substring(value.lastIndexOf("(") + 1, value.lastIndexOf(")")).split(',')
        config.setScaleTranslate(matrix[0],matrix[3],matrix[4],matrix[5])
     }

}