/*
This file will be our main function
 */

function populateRec(answer){
    let index
    let title
    let rects = config.getRects()
    let test_progress_bar = config.getTest_Progress_bar()
    //Here is the logic to expand question
    if(answer){
        index = data[config.getQuestionPosition()].yes
        if(index === undefined) {
            index = data[config.getQuestionPosition()].goto
        }
        title = data[index].q
    }
    else{
        index = data[config.getQuestionPosition()].no

        if(index === undefined) {
            index = data[config.getQuestionPosition()].goto
        }
        //Update title and index for the new rectangle
        title = data[index].q
    }

    if(index !== 13){
        if(rects[rects.length-1].x + $('#mainPanel').width() >= $('#svg').width()){
            let width = $('#svg').width()
            $('#svg').width(width+width)
        }

        console.log("populate:")
        //Update progress bar
        let progress_bar = config.getTest_Progress_bar() + 25
        config.updateTest_Progress_Bar(progress_bar)
        console.log(progress_bar)
        $('#progress-bar').width(progress_bar + '%')
        $('#progress-bar').text(progress_bar +'%')
        //Should change to focus and not focus
        main.drawTheShape(title)
        config.updateQuestionPosition(index)
        main.slide(0)
    }
    else{
        alert("You hit the final wall")
    }


}


class Main{
    constructor(){

    }
    drawAll(){
        let rects = config.getRects()
        let rectsSVG = config.getRectSVG()
        let titleTextSVG = config.getTitleTextSVG()
        let yesRectSVG = config.getYesRectSVG()
        let noRectSVG = config.getNoRectSVG()
        let linesSVG = config.getLinesSVG()
        let yesTextSVG = config.getYesTextSVG()
        let noTextSVG = config.getNoTextSVG()
        let heightSize = config.getHeight()
        let widthSize  = config.getWidth()

        for(let i = 1 ; i < rects.length;i++){
            linesSVG[i-1].update(rects[i-1].x+rects[i-1].width/2,rects[i-1].y+rects[i-1].height/2,rects[i].x+rects[i].width/2,rects[i].y+rects[i].height/2,"red")
        }

        for(let i = 0 ; i < rects.length;i++){
            titleTextSVG[i].update(rects[i].x, rects[i].y + 50, '#444444', rects[i].title)
            rectsSVG[i].update(rects[i].x, rects[i].y, rects[i].width,rects[i].height, "#FFFFFF", '1')
            yesRectSVG[i].updateWithOnClick(rects[i].x, rects[i].y + heightSize/3, widthSize/3,heightSize/3, 'green', '1', "populateRec(1)")
            noRectSVG[i].updateWithOnClick(rects[i].x + rects[i].width - widthSize/3, rects[i].y + heightSize/3, widthSize/3,heightSize/3, 'red', '1', "populateRec(0)")
            yesTextSVG[i].update(rects[i].x, rects[i].y + rects[i].height/2, '#000', "Yes")
            noTextSVG[i].update(rects[i].x + rects[i].width - 25, rects[i].y+ rects[i].height/2,'#000', "No")
        }

        config.updateLinesSVG(linesSVG)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        config.updateYesRectSVG(yesRectSVG)
        config.updateNoRectSVG(noRectSVG)
        config.updateYesTextSVG(yesTextSVG)
        config.updateNoTextSVG(noTextSVG)
    }

    draw(index) {

        let rects = config.getRects()
        let rectsSVG = config.getRectSVG()
        let titleTextSVG = config.getTitleTextSVG()
        let yesRectSVG = config.getYesRectSVG()
        let noRectSVG = config.getNoRectSVG()
        let linesSVG = config.getLinesSVG()
        let yesTextSVG = config.getYesTextSVG()
        let noTextSVG = config.getNoTextSVG()
        let heightSize = config.getHeight()
        let widthSize  = config.getWidth()


        rectsSVG[index].update(rects[index].x, rects[index].y, rects[index].width,rects[index].height, "#FFFFFF", '1')
        titleTextSVG[index].update(rects[index].x, rects[index].y + 50, '#444444', rects[index].title)
        yesRectSVG[index].updateWithOnClick(rects[index].x, rects[index].y + heightSize / 3, widthSize / 3,heightSize / 3, 'green', '1', "populateRec(1)")
        yesTextSVG[index].update(rects[index].x, rects[index].y + rects[index].height/2, '#000', "Yes")
        noRectSVG[index].updateWithOnClick(rects[index].x + rects[index].width - widthSize / 3, rects[index].y + heightSize / 3, widthSize / 3,heightSize / 3, 'red', '1', "populateRec(0)")
        noTextSVG[index].update(rects[index].x + rects[index].width - 25, rects[index].y+ rects[index].height/2,'#000', "No")


        for(let i = 1 ; i < rects.length;i++){
            linesSVG[i-1].update(rects[i-1].x+rects[i-1].width/2,rects[i-1].y+rects[i-1].height/2,rects[i].x+rects[i].width/2,rects[i].y+rects[i].height/2,"red")
        }

        config.updateLinesSVG(linesSVG)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        config.updateYesRectSVG(yesRectSVG)
        config.updateNoRectSVG(noRectSVG)
        config.updateYesTextSVG(yesTextSVG)
        config.updateNoTextSVG(noTextSVG)

    }


    clear(){

        let rects = config.getRects()
        let rectsSVG = config.getRectSVG()
        let titleTextSVG = config.getTitleTextSVG()
        let yesRectSVG = config.getYesRectSVG()
        let noRectSVG = config.getNoRectSVG()
        let linesSVG = config.getLinesSVG()
        let yesTextSVG = config.getYesTextSVG()
        let noTextSVG = config.getNoTextSVG()

        rects.pop()
        rectsSVG[rectsSVG.length-1].remove()
        titleTextSVG[titleTextSVG.length-1].remove()
        yesRectSVG[yesRectSVG.length-1].remove()
        noRectSVG[noRectSVG.length-1].remove()
        yesTextSVG[yesTextSVG.length-1].remove()
        noTextSVG[noTextSVG.length-1].remove()
        if(linesSVG.length >= 1)
            linesSVG[linesSVG.length-1].remove()
        rectsSVG.pop()
        yesTextSVG.pop()
        noTextSVG.pop()
        titleTextSVG.pop()
        yesRectSVG.pop()
        noRectSVG.pop()
        if(linesSVG.length >= 1)
            linesSVG.pop()

        config.popQuestionPosition()
        config.updateRects(rects)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        config.updateYesRectSVG(yesRectSVG)
        config.updateNoRectSVG(noRectSVG)
        config.updateYesTextSVG(yesTextSVG)
        config.updateNoTextSVG(noTextSVG)
        config.updateLinesSVG(linesSVG)
    }

    slide(slide){
        if(config.getMode() === false) {
            if(slide === 0) {
                let left = $('#mainPanel').scrollLeft();
                $('#mainPanel').scrollLeft(left + $('#mainPanel').width());
            }
            else if(slide === 1){
                $('#mainPanel').scrollLeft(0);
            }
        }
    }

    reAlign(){

        let width =  Math.floor(config.getMainPanelWidth() - $("#leftPanel").width() - $("#rightPanel").width());
        let height = Math.floor(config.getMainPanelHeight() - $("#topPanel").height());
        //Calculate the new position for the first shape, then go from there
        let x = 0.05*width
        let shape_width = width-0.1*width
        let y = 0.05 *height
        let shape_height = height -0.1*height
        let rects = config.getRects()
        //Initalize the first rect to origin position
        rects[0].update(x,y,shape_width,shape_height)
        //Update new position for all when realign
        for(let i = 1; i < rects.length; i++){
            rects[i].update(rects[i-1].x + width,rects[i-1].y,shape_width,shape_height)
        }
        config.setScaleTranslate(1,1,0,0)
        panZoom.reset()
        panZoom.zoom(1)
        this.drawAll()
        //1 means go back to
        //Slide to the last element
        this.slide(1)
    }

    drawTheShape(title){
        let width =  Math.floor(config.getMainPanelWidth() - $("#leftPanel").width() - $("#rightPanel").width());
        let height = Math.floor(config.getMainPanelHeight() - $("#topPanel").height());
        let x = 0.05*width
        let shape_width = width-0.1*width
        let y = 0.05 *height
        let shape_height = height -0.1*height
        let rects = config.getRects()
        let linesSVG = config.getLinesSVG()
        let rectsSVG = config.getRectSVG()
        let titleTextSVG = config.getTitleTextSVG()
        let yesRectSVG   = config.getYesRectSVG()
        let noRectSVG    = config.getNoRectSVG()
        let yesTextSVG   = config.getYesTextSVG()
        let noTextSVG    = config.getNoTextSVG()

        let newRect

        if(rects.length === 0) {
            newRect = new Rectangle(x, y, shape_width, shape_height, "#FFFFFF", false, title, rects.length)
        }
        else{
            newRect = new Rectangle(rects[rects.length-1].x + width, rects[rects.length-1].y, shape_width, shape_height, "#FFFFFF", false, title, rects.length)
            let newLineSVG = new LineSVG()
            linesSVG.push(newLineSVG)
        }


        let newRectSVG = new RectangleSVG()
        let newTitleTextSVG = new TextSVG()
        let newYesRectSVG   = new RectangleSVG()
        let newYesTextSVG = new TextSVG()
        let newNoRectSVG    = new RectangleSVG()
        let newNoTextSVG = new TextSVG()


        newRectSVG.update(newRect.x,newRect.y,newRect.width,newRect.height,newRect.fill,0)
        newTitleTextSVG.update(newRect.x, newRect.y+ 50, '#000', newRect.title)
        newYesRectSVG.updateWithOnClick(newRect.x, newRect.y + height/2, 25, 25, 'green', '1', "populateRec(1)")
        newYesTextSVG.update(newRect.x, newRect.y + height/2, '#000', "Yes")
        newNoRectSVG.updateWithOnClick(newRect.x + newRect.width - 25, newRect.y, 25, 25, 'red', '1', "populateRec(0)")
        newNoTextSVG.update(newRect.x + newRect.width - 25, newRect.y+ height/2,'#000', "No")

        rects.push(newRect)
        rectsSVG.push(newRectSVG)
        titleTextSVG.push(newTitleTextSVG)
        yesRectSVG.push(newYesRectSVG)
        noRectSVG.push(newNoRectSVG)
        yesTextSVG.push(newYesTextSVG)
        noTextSVG.push(newNoTextSVG)

        config.updateRects(rects)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        config.updateYesRectSVG(yesRectSVG)
        config.updateYesTextSVG(yesTextSVG)
        config.updateNoRectSVG(noRectSVG)
        config.updateNoTextSVG(noTextSVG)

        this.draw(newRect.id)
    }
}
<<<<<<< Updated upstream





=======


function reAlign(){
    let width =  Math.floor(mainPanelWidth - $("#leftPanel").width() - $("#rightPanel").width());
    let height = Math.floor(mainPanelHeight - $("#topPanel").height());
    //Calculate the new position for the first shape, then go from there
    let x = 0.05*width
    let shape_width = width-0.1*width
    let y = 0.05 *height
    let shape_height = height -0.1*height
    rects[0].update(x,y,shape_width,shape_height)
    //Update new position for all when realign
    for(let i = 1; i < rects.length; i++){
        rects[i].update(rects[i-1].x + width,rects[i-1].y,shape_width,shape_height)
    }
    x_scale=1
    y_scale=1
    translateX=0
    translateY=0
    panZoom.reset()
    panZoom.zoom(1)
    drawAll()
    // 1 means go back to
    slide(1)
}


// Automatically draw the rectangle shape with the question and the yes or no button
function drawTheShape(title){
    // Sets up the size of the rectangle
    let width =  Math.floor(mainPanelWidth - $("#leftPanel").width() - $("#rightPanel").width());
    let height = Math.floor(mainPanelHeight - $("#topPanel").height());
    let x = 0.05 * width
    let shape_width = width - 0.1 * width
    let y = 0.05 * height
    let shape_height = height - 0.1 * height

    // Will create the first rectangle with questions. Sets up shape, size, and color of first rectangle
    let newRect
    if(rects.length == 0) {
        newRect = new Rectangle(x, y, shape_width, shape_height, "#FFFFFF",
            false, title, rects.length)
    }

    // If the first rectangle is populated, all the rectangles after will have connective box
    else{
        // Sets up the shape, size, and color, then creates the new Rectangle
        newRect = new Rectangle(rects[rects.length - 1].x + width, rects[rects.length - 1].y,
            shape_width, shape_height, "#FFFFFF", false, title, rects.length)

        // Creates a new line that connects the previous box to the next box
        let newLineSVG = new LineSVG()
        linesSVG.push(newLineSVG)
    }

    // Creates a new instance of the rectangle
    let newRectSVG = new RectangleSVG()
    let newQuestionTextSVG = new TextSVG()
    let newYesRectSVG   = new RectangleSVG()
    let newYesTextSVG = new TextSVG()
    let newNoRectSVG    = new RectangleSVG()
    let newNoTextSVG = new TextSVG()

    // Updates the new rectangle's size and question
    // Includes a "yes" button colored green and a "no" button colored red, along with button location
    // If no boolean is 0, if yes boolean is 1
    newRectSVG.update(newRect.x, newRect.y, newRect.width, newRect.height, newRect.fill, 0)
    newQuestionTextSVG.update(newRect.x, newRect.y + 50, '#000', newRect.title)
    newYesRectSVG.updateWithOnClick(newRect.x, newRect.y + height / 2, 25, 25,
        'green', '1', "populateRec(1)")
    newYesTextSVG.update(newRect.x, newRect.y + height / 2, '#000', "Yes")
    newNoRectSVG.updateWithOnClick(newRect.x + newRect.width - 25, newRect.y, 25, 25,
        'red', '1', "populateRec(0)")
    newNoTextSVG.update(newRect.x + newRect.width - 25, newRect.y + height / 2,'#000', "No")

    // Populates/draws the rectangle with the updated question to the screen
    // Will create a new rectangle with updated question when patient answers "yes" or "no"
    rects.push(newRect)
    rectsSVG.push(newRectSVG)
    titleTextSVG.push(newQuestionTextSVG)
    yesRectSVG.push(newYesRectSVG)
    noRectSVG.push(newNoRectSVG)
    yesTextSVG.push(newYesTextSVG)
    noTextSVG.push(newNoTextSVG)
    draw(newRect.id)
}
>>>>>>> Stashed changes
