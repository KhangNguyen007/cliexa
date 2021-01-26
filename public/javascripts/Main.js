/*
This file will be our main function
 */
let score = 0
function populateRec(answer){
    let index
    let title
    let rects = config.getRects()
    let test_progress_bar = config.getTest_Progress_bar()

    //Here is the logic to expand question

    // This will set the predefine levels for the questionnaires. This is used to display the progress bar value
    if(config.getQuestionPosition() === 0)
    {
        questionnaireLevel = 5
        update_progress = (100/questionnaireLevel)
    }
    else if(config.getQuestionPosition() === 7)
    {
        questionnaireLevel = 8
        update_progress = (100/questionnaireLevel)
    }
    else if(config.getQuestionPosition() === 16)
    {
        questionnaireLevel = 10
        update_progress = (100/questionnaireLevel)
    }
    else if(config.getQuestionPosition() === 27)
    {
        questionnaireLevel = 8
        update_progress = (100/questionnaireLevel)
    }
    else if(config.getQuestionPosition() === 36)
    {
        questionnaireLevel = 11
        new_progress = (100/questionnaireLevel) // Equals to about 9.09
        update_progress = 9.25
    }
    else if(config.getQuestionPosition() === 48)
    {
        questionnaireLevel = 11
        new_progress = (100/questionnaireLevel) // Equals to about 9.09
        update_progress = 9.25
    }

    // Gets the answer from the user and will send them to the next question based off their answer
    if (answer) { // If the user selects yes, go to next question corresponding to yes
        index = data[config.getQuestionPosition()].yes
        if (index === undefined) {
            index = data[config.getQuestionPosition()].goto
        }
        score += 1
        // alert(score)
        // Update title and index for the new rectangle
        title = data[index].q
    }
    else { // If the user selects no, go to the next question corresponding to no
        index = data[config.getQuestionPosition()].no

        if (index === undefined) {
            index = data[config.getQuestionPosition()].goto
        }
        //Update title and index for the new rectangle
        title = data[index].q
    }

    // If we reach the final box for smoking cessation questionnaire, populate the final box.
    if(data[index].loading === 0) {
        //Create a final box here
        if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
            let width = $('#svg').width()
            $('#svg').width(width + width)
        }
        // If we reach the final box, progress bar goes to 100%
        let progress_bar = 100
        config.updateTest_Progress_Bar(progress_bar)
        console.log(progress_bar)
        $('#progress-bar').width(progress_bar + '%')
        $('#progress-bar').text(progress_bar + '%')
        main.slide(0)
    }

    // If we reach the final box for CCM questionnaire, populate the final box
    else if(data[index].loading === 7) {
        // Create a final box here
        if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
            let width = $('#svg').width()
            $('#svg').width(width + width)
        }
        // If we reach the final box, progress bar goes to 100%
        let progress_bar = 100
        config.updateTest_Progress_Bar(progress_bar)
        console.log(progress_bar)
        $('#progress-bar').width(progress_bar + '%')
        $('#progress-bar').text(progress_bar + '%')

        main.drawTheFinalBox(title,"CPT code:2000")


        if(score < 3)
        {
            main.drawTheFinalBox(title,"CPT code:63833")
        }
        else
        {
            main.drawTheFinalBox(title,"CPT code:17490")
        }
        main.slide(0)
    }

    // If we reach the final box for the depression questionnaire
    else if(data[index].loading === 16) {
        // Create a final box here
        if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
            let width = $('#svg').width()
            $('#svg').width(width + width)
        }
        // If we reach the final box, progress bar goes to 100%
        let progress_bar = 100
        config.updateTest_Progress_Bar(progress_bar)
        console.log(progress_bar)
        $('#progress-bar').width(progress_bar + '%')
        $('#progress-bar').text(progress_bar + '%')

        if(score < 4)
        {
            main.drawTheFinalBox(title,"CPT code:38592")
        }
        else
        {
            main.drawTheFinalBox(title,"CPT code:84919")
        }
        main.slide(0)
    }

    // If we reach the final box for the anxiety questionnaire
    else if(data[index].loading === 27) {
        // Create a final box here
        if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
            let width = $('#svg').width()
            $('#svg').width(width + width)
        }
        // If we reach the final box, progress bar goes to 100%
        let progress_bar = 100
        config.updateTest_Progress_Bar(progress_bar)
        console.log(progress_bar)
        $('#progress-bar').width(progress_bar + '%')
        $('#progress-bar').text(progress_bar + '%')

        if(score < 4)
        {
            main.drawTheFinalBox(title,"CPT code:38491")
        }
        else
        {
            main.drawTheFinalBox(title,"CPT code:99944")
        }

        main.slide(0)
    }

    // If we reach the final box for the alcohol questionnaire
    else if(data[index].loading === 36) {
        // Create a final box here
        if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
            let width = $('#svg').width()
            $('#svg').width(width + width)
        }
        // If we reach the final box, progress bar goes to 100%
        let progress_bar = 100
        config.updateTest_Progress_Bar(progress_bar)
        console.log(progress_bar)
        $('#progress-bar').width(progress_bar + '%')
        $('#progress-bar').text(progress_bar + '%')

        if(score < 5)
        {
            main.drawTheFinalBox(title,"CPT code:64829")
        }
        else
        {
            main.drawTheFinalBox(title,"CPT code:38485")
        }
        main.slide(0)
    }

    // If we reach the final box for the drug questionnaire
    else if(data[index].loading === 48) {
        // Create a final box here
        if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
            let width = $('#svg').width()
            $('#svg').width(width + width)
        }
        // If we reach the final box, progress bar goes to 100%
        let progress_bar = 100
        config.updateTest_Progress_Bar(progress_bar)
        console.log(progress_bar)
        $('#progress-bar').width(progress_bar + '%')
        $('#progress-bar').text(progress_bar + '%')

        if(score < 5)
        {
            main.drawTheFinalBox(title,"CPT code:93836")
        }
        else
        {
            main.drawTheFinalBox(title,"CPT code:76547")
        }
        main.slide(0)
    }

    // If we did not reach any of the final boxes, we will populate next question.
    else{
        if (index !== 0 || index !== 7) {
            if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
                let width = $('#svg').width()
                $('#svg').width(width + width)
            }

            // Update progress bar
            let progress_bar = config.getTest_Progress_bar() + update_progress//(100/questionnaireLevel)

            //let update_progress = config.getTest_Progress_bar() + (100/questionnaireLevel)
            //let progress_bar = update_bar.toPrecision(3)

            config.updateTest_Progress_Bar(progress_bar)
            console.log(progress_bar)
            $('#progress-bar').width(progress_bar + '%')
            $('#progress-bar').text(progress_bar + '%')
            //Should change to focus and not focus
            main.drawTheShape(title)
            config.updateQuestionPosition(index)
            main.slide(0)
        }
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

        if(rectsSVG.length > index) {
            rectsSVG[index].update(rects[index].x, rects[index].y, rects[index].width, rects[index].height, "#FFFFFF", '1')
        }
        if(titleTextSVG.length > index) {
            titleTextSVG[index].update(rects[index].x, rects[index].y + 50, '#444444', rects[index].title)
        }
        if(yesRectSVG.length > index) {
            yesRectSVG[index].updateWithOnClick(rects[index].x, rects[index].y + heightSize / 3, widthSize / 3, heightSize / 3, 'green', '1', "populateRec(1)")
        }
        if(yesTextSVG.length > index) {
            yesTextSVG[index].update(rects[index].x, rects[index].y + rects[index].height / 2, '#000', "Yes")
        }
        if(noRectSVG.length > index) {
            noRectSVG[index].updateWithOnClick(rects[index].x + rects[index].width - widthSize / 3, rects[index].y + heightSize / 3, widthSize / 3, heightSize / 3, 'red', '1', "populateRec(0)")
        }
        if(noTextSVG.length > index) {
            noTextSVG[index].update(rects[index].x + rects[index].width - 25, rects[index].y + rects[index].height / 2, '#000', "No")
        }

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

    // When a question is answered, it will slide to the next question automatically.
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

    // Stays in the focus of the current box.
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

    // Update the final box.
    drawTheFinalBox(title,cptcode_){
        let width =  Math.floor(config.getMainPanelWidth() - $("#leftPanel").width() - $("#rightPanel").width());
        let height = Math.floor(config.getMainPanelHeight() - $("#topPanel").height());
        let x = 0.05 * width
        let shape_width = width - 0.1 * width
        let y = 0.05 * height
        let shape_height = height - 0.1 * height
        let rects = config.getRects()
        let linesSVG = config.getLinesSVG()
        let rectsSVG = config.getRectSVG()
        let titleTextSVG = config.getTitleTextSVG()


        // Will create the first rectangle with questions. Sets up shape, size, and color of first rectangle
        let newRect

        if(rects.length === 0) {
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
        // Updates the new rectangle's size and question
        // Includes a "yes" button colored green and a "no" button colored red, along with button location
        // If no boolean is 0, if yes boolean is 1
        newRectSVG.update(newRect.x, newRect.y, newRect.width, newRect.height, newRect.fill, 0)
        newQuestionTextSVG.update(newRect.x, newRect.y+ 50, '#000000', newRect.title)

        let cptCode = new TextSVG()
        cptCode.update(newRect.x+newRect.width/2, newRect.y + newRect.height/2, '\'#000000',cptcode_)
        // Populates/draws the rectangle with the updated question to the screen
        // Will create a new rectangle with updated question when patient answers "yes" or "no"
        rects.push(newRect)
        rectsSVG.push(newRectSVG)
        titleTextSVG.push(newQuestionTextSVG)
        titleTextSVG.push(cptCode)
        // Populates/draws the rectangle with the updated question to the screen
        // Will create a new rectangle with updated question when patient answers "yes" or "no"
        config.updateRects(rects)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        this.draw(newRect.id)
    }

    // Automatically draw the rectangle shape with the question and the yes or no button
    drawTheShape(title){
        // Sets up the size of the rectangle
        let width =  Math.floor(config.getMainPanelWidth() - $("#leftPanel").width() - $("#rightPanel").width());
        let height = Math.floor(config.getMainPanelHeight() - $("#topPanel").height());
        let x = 0.05 * width
        let shape_width = width - 0.1 * width
        let y = 0.05 * height
        let shape_height = height - 0.1 * height
        let rects = config.getRects()
        let linesSVG = config.getLinesSVG()
        let rectsSVG = config.getRectSVG()
        let titleTextSVG = config.getTitleTextSVG()
        let yesRectSVG   = config.getYesRectSVG()
        let noRectSVG    = config.getNoRectSVG()
        let yesTextSVG   = config.getYesTextSVG()
        let noTextSVG    = config.getNoTextSVG()

        // Will create the first rectangle with questions. Sets up shape, size, and color of first rectangle
        let newRect
        if(rects.length === 0) {
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
        newQuestionTextSVG.update(newRect.x, newRect.y+ 50, '#000', newRect.title)
        newYesRectSVG.updateWithOnClick(newRect.x, newRect.y + height/2, 25, 25,
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

        // Populates/draws the rectangle with the updated question to the screen
        // Will create a new rectangle with updated question when patient answers "yes" or "no"
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
