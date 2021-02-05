/*
This file will be our main function
 */

let score = 0


function populateRec(answer){
    let index,title,progress_bar
    let rects = config.getRects()
    //Here is the logic to expand question

    // This will set the predefine levels for the questionnaires. This is used to display the progress bar value
    if(config.getQuestionPosition() === 0)
    {
        progress_bar = 0
        config.setLevel(progress_bar)
        config.questionnaireLevel = 8
        // config.update_progress = (100/config.questionnaireLevel) // This brings it to 12.5 percent
        config.update_progress = 12
        config.updateTest_Progress_Bar(progress_bar)
    }
    else if(config.getQuestionPosition() === 8)
    {
        config.questionnaireLevel = 8
        // config.update_progress = (100/config.questionnaireLevel) // This brings it to 12.5 percent
        config.update_progress = 12
    }
    else if(config.getQuestionPosition() === 17)
    {
        progress_bar = 0
        config.updateTest_Progress_Bar(progress_bar)
        config.questionnaireLevel = 10
        config.update_progress = (100/config.questionnaireLevel)
    }
    else if(config.getQuestionPosition() === 28)
    {
        progress_bar = 0
        config.updateTest_Progress_Bar(progress_bar)
        config.questionnaireLevel = 8
        // config.update_progress = (100/config.questionnaireLevel) // Ths bring it up to 12.5 percent
        config.update_progress = 12
    }
    else if(config.getQuestionPosition() === 37)
    {
        config.questionnaireLevel = 11
        // new_progress = (100/config.questionnaireLevel) // Equals to about 9.09
        config.update_progress = 9
    }
    else if(config.getQuestionPosition() === 49)
    {
        config.questionnaireLevel = 11
        // new_progress = (100/config.questionnaireLevel) // Equals to about 9.09
        config.update_progress = 9
    }

    // Gets the answer from the user and will send them to the next question based off their answer
    if (answer) { // If the user selects yes, go to next question corresponding to yes
        index = data[config.getQuestionPosition()].yes
        if (index === undefined) {
            index = data[config.getQuestionPosition()].goto
        }
        score += 1
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
        config.setLevel(progress_bar)
        config.updateTest_Progress_Bar(progress_bar)
        console.log("Current level:",config.getCurrentLevel())
        $('#progress-bar').width(config.getCurrentLevel() + '%')
        $('#progress-bar').text(config.getCurrentLevel() + '%')
        if(score < 4)
        {
            main.insertTheFinalBox(title,"CPT code:38592")
        }
        else
        {
            main.insertTheFinalBox(title,"CPT code:84919")
        }
        main.setFinal(true)
        main.slide(0)
    }

    // If we reach the final box for CCM questionnaire, populate the final box
    else if(data[index].loading === 8) {
        // Create a final box here
        if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
            let width = $('#svg').width()
            $('#svg').width(width + width)
        }
        // If we reach the final box, progress bar goes to 100%
        let progress_bar = 100
        config.setLevel(progress_bar)
        config.updateTest_Progress_Bar(progress_bar)

        $('#progress-bar').width(config.getCurrentLevel() + '%')
        $('#progress-bar').text(config.getCurrentLevel() + '%')

        if(score < 3)
        {
            main.insertTheFinalBox(title,"CPT code:63833")
        }
        else
        {
            main.insertTheFinalBox(title,"CPT code:17490")
        }
        main.setFinal(true)
        main.slide(0)
    }

    // If we reach the final box for the depression questionnaire
    else if(data[index].loading === 17) {
        // Create a final box here
        if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
            let width = $('#svg').width()
            $('#svg').width(width + width)
        }
        // If we reach the final box, progress bar goes to 100%
        let progress_bar = 100
        config.setLevel(progress_bar)
        config.updateTest_Progress_Bar(progress_bar)
        $('#progress-bar').width(config.getCurrentLevel() + '%')
        $('#progress-bar').text(config.getCurrentLevel() + '%')

        if(score < 4)
        {
            main.insertTheFinalBox(title,"CPT code:38592")
        }
        else
        {
            main.insertTheFinalBox(title,"CPT code:84919")
        }
        main.setFinal(true)
        main.slide(0)
    }

    // If we reach the final box for the anxiety questionnaire
    else if(data[index].loading === 28) {
        // Create a final box here
        if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
            let width = $('#svg').width()
            $('#svg').width(width + width)
        }
        // If we reach the final box, progress bar goes to 100%
        let progress_bar = 100
        config.setLevel(progress_bar)
        config.updateTest_Progress_Bar(progress_bar)
        console.log(progress_bar)
        $('#progress-bar').width(config.getCurrentLevel() + '%')
        $('#progress-bar').text(config.getCurrentLevel() + '%')

        if(score < 4)
        {
            main.insertTheFinalBox(title,"CPT code:38491")
        }
        else
        {
            main.insertTheFinalBox(title,"CPT code:99944")
        }
        main.setFinal(true)
        main.slide(0)
    }

    // If we reach the final box for the alcohol questionnaire
    else if(data[index].loading === 37) {
        // Create a final box here
        if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
            let width = $('#svg').width()
            $('#svg').width(width + width)
        }
        // If we reach the final box, progress bar goes to 100%
        let progress_bar = 100
        config.setLevel(progress_bar)
        config.updateTest_Progress_Bar(progress_bar)

        console.log(progress_bar)
        $('#progress-bar').width(config.getCurrentLevel() + '%')
        $('#progress-bar').text(config.getCurrentLevel() + '%')

        if(score < 5)
        {
            main.insertTheFinalBox(title,"CPT code:64829")
        }
        else
        {
            main.insertTheFinalBox(title,"CPT code:38485")
        }
        main.setFinal(true)
        main.slide(0)
    }

    // If we reach the final box for the drug questionnaire
    else if(data[index].loading === 49) {
        // Create a final box here
        if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
            let width = $('#svg').width()
            $('#svg').width(width + width)
        }
        // If we reach the final box, progress bar goes to 100%
        let progress_bar = 100
        config.setLevel(progress_bar)
        config.updateTest_Progress_Bar(progress_bar)
        $('#progress-bar').width(config.getCurrentLevel() + '%')
        $('#progress-bar').text(config.getCurrentLevel() + '%')

        if(score < 5)
        {
            main.insertTheFinalBox(title,"CPT code:93836")
        }
        else
        {
            main.insertTheFinalBox(title,"CPT code:76547")
        }
        main.setFinal(true)
        main.slide(0)
    }

    // If we did not reach any of the final boxes, we will populate next question.
    else{
        if (index !== 0 || index !== 8) {
            if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
                let width = $('#svg').width()
                $('#svg').width(width + width)
            }

            if(index == 0 || index == 17 || index == 28 || index == 37 || index == 49 || index == 8){
                progress_bar = 0
                config.setLevel(progress_bar)
            }
            else
            {
                progress_bar = config.getCurrentLevel()+ config.update_progress
                config.setLevel(progress_bar)
            }
            console.log("Current level:",config.getCurrentLevel())
            config.updateTest_Progress_Bar(progress_bar)
            $('#progress-bar').width(config.getCurrentLevel() + '%')
            $('#progress-bar').text(config.getCurrentLevel() + '%')
            main.insertShape(title)
            main.slide(0)
        }
    }
    config.updateQuestionPosition(index)
    console.log("Question link:",config.getQuestionPosition())
}


class Main{
    constructor(){
        this.final = false //Indicate final box
    }
    //Think about Tree Hireachy which easier to manager
    // Class Inheritance and Interface
    setFinal(final){
        this.final = final
    }
    getFinal(){
        return this.final
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
             titleTextSVG[index].updateTitle(rects[index].x+45, rects[index].y + 50, '#444444', rects[index].title)
        }
        if(yesRectSVG.length > index) {
            yesRectSVG[index].updateWithOnClick(rects[index].x, rects[index].y + heightSize / 3, widthSize / 3, heightSize / 3, '#1E99D6', '1', "populateRec(1)")
        }
        if(yesTextSVG.length > index) {
            yesTextSVG[index].update(rects[index].x + (rects[index].width * (1/9)) , rects[index].y + rects[index].height / 2.25, '#FFFFFF', "Yes")
        }
        if(noRectSVG.length > index) {
            noRectSVG[index].updateWithOnClick(rects[index].x + rects[index].width - widthSize / 3, rects[index].y + heightSize / 3, widthSize / 3, heightSize / 3, '#999999', '1', "populateRec(0)")
        }
        if(noTextSVG.length > index) {
            noTextSVG[index].update(rects[index].x + rects[index].width*(31/36), rects[index].y + rects[index].height / 2.25, '#FFFFFF', "No")
        }
        for(let i = 1 ; i < rects.length; i++){
            linesSVG[i-1].update(rects[i-1].x+rects[i-1].width/2,rects[i-1].y+rects[i-1].height/2,rects[i].x+rects[i].width/2,rects[i].y+rects[i].height/2,"red","blue","1")
        }

        config.updateLinesSVG(linesSVG)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        config.updateYesRectSVG(yesRectSVG)
        config.updateNoRectSVG(noRectSVG)
        config.updateYesTextSVG(yesTextSVG)
        config.updateNoTextSVG(noTextSVG)
    }

    drawFinalBox(index,cpt_code) {
        let rects = config.getRects()
        let rectsSVG = config.getRectSVG()
        let titleTextSVG = config.getTitleTextSVG()

        if(rectsSVG.length > index) {
            rectsSVG[index].update(rects[index].x, rects[index].y, rects[index].width, rects[index].height, "#FFFFFF", '1')
        }
        if(titleTextSVG.length > index) {
            titleTextSVG[index].updateCPT_Code(rects[index].x+45, rects[index].y + 50, '#444444', rects[index].title, cpt_code)
        }
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
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
        //Initialize the first rect to origin position
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
    insertTheFinalBox(title,cptcode_){
        let width =  Math.floor(config.getMainPanelWidth() - $("#leftPanel").width() - $("#rightPanel").width());
        let height = Math.floor(config.getMainPanelHeight() - $("#topPanel").height());
        let x = 0.05 * width
        let shape_width = width - 0.1 * width
        let y = 0.05 * height
        let shape_height = height - 0.1 * height
        let rects = config.getRects()
        let rectsSVG = config.getRectSVG()
        let titleTextSVG = config.getTitleTextSVG()
        let newRect = new Rectangle(rects[rects.length - 1].x + width, rects[rects.length - 1].y,
                shape_width, shape_height, "#FFFFFF", false, title, rects.length)
        let newRectSVG = new RectangleSVG()
        let newTitleText = new TextSVG()
        rects.push(newRect)
        rectsSVG.push(newRectSVG)
        titleTextSVG.push(newTitleText)
        config.updateRects(rects)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        this.drawFinalBox(newRect.id,cptcode_)
    }

    // Automatically draw the rectangle shape with the question and the yes or no button
    insertShape(title){
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
        let lineSVG      = config.getLinesSVG()
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
        let newRectSVG = new RectangleSVG()    //Big rectangle
        let newQuestionTextSVG = new TextSVG()   //Title center of rectangle
        let newYesRectSVG   = new RectangleSVG()   // Yes Rectangle on the left
        let newYesTextSVG = new TextSVG()          //  Text of Yes Rectangle on the left
        let newNoRectSVG    = new RectangleSVG()   //  No Rectangle on the right
        let newNoTextSVG = new TextSVG()           //  Text of No Rectangle on the right
        let newLineSVG = new LineSVG()

        // Populates/draws the rectangle with the updated question to the screen
        // Will create a new rectangle with updated question when patient answers "yes" or "no"
        rects.push(newRect)
        rectsSVG.push(newRectSVG)
        titleTextSVG.push(newQuestionTextSVG)
        yesRectSVG.push(newYesRectSVG)
        noRectSVG.push(newNoRectSVG)
        yesTextSVG.push(newYesTextSVG)
        noTextSVG.push(newNoTextSVG)
        lineSVG.push(newLineSVG)
        // Populates/draws the rectangle with the updated question to the screen
        // Will create a new rectangle with updated question when patient answers "yes" or "no"
        config.updateRects(rects)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        config.updateYesRectSVG(yesRectSVG)
        config.updateYesTextSVG(yesTextSVG)
        config.updateNoRectSVG(noRectSVG)
        config.updateNoTextSVG(noTextSVG)
        config.updateLinesSVG(lineSVG)
        this.draw(newRect.id)
    }
    // This will read through the question title and split it into two lines
    // The lines will be displayed in the same position as before and the other line will be below it.
}
