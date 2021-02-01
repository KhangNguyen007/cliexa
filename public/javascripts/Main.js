/*
This file will be our main function
 */
let score = 0

//Populate rectangle contain question info

let line1 = ""
let line2 = ""
let firstQuestion = 0

function populateRec(answer){
    let index
    let title
    let progress_bar
    let rects = config.getRects()
    let test_progress_bar = config.getTest_Progress_bar()

    //Here is the logic to expand question

    // This will set the predefine levels for the questionnaires. This is used to display the progress bar value
    if(config.getQuestionPosition() === 0)
    {
        progress_bar = 0
        config.updateTest_Progress_Bar(progress_bar)
        config.questionnaireLevel = 8
        // config.update_progress = (100/config.questionnaireLevel) // This brings it to 12.5 percent
        config.update_progress = 12
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
    else if(data[index].loading === 8) {
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
    else if(data[index].loading === 17) {
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
    else if(data[index].loading === 28) {
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
    else if(data[index].loading === 37) {
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
    else if(data[index].loading === 49) {
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
        if (index !== 0 || index !== 8) {
            if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
                let width = $('#svg').width()
                $('#svg').width(width + width)
            }

            if(index == 0 || index == 17 || index == 28 || index == 37 || index == 49 || index == 8){
                progress_bar = 0
            }
            else
            {
                progress_bar = config.getTest_Progress_bar() + config.update_progress
            }

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
    //Think about Tree Hireachy which easier to manager
    // Class Inheritance and Interface
    drawAll(){
        let rects = config.getRects()
        let rectsSVG = config.getRectSVG()
        let titleTextSVG = config.getTitleTextSVG()
        let titleTextSVGLine2 = config.getTitleTextSVGLine2()
        let yesRectSVG = config.getYesRectSVG()
        let noRectSVG = config.getNoRectSVG()
        let linesSVG = config.getLinesSVG()
        let yesTextSVG = config.getYesTextSVG()
        let noTextSVG = config.getNoTextSVG()
        let heightSize = config.getHeight()
        let widthSize  = config.getWidth()

        for(let i = 1 ; i < rects.length;i++){
            linesSVG[i-1].update(rects[i-1].x+rects[i-1].width/2,rects[i-1].y+rects[i-1].height/2,rects[i].x+rects[i].width/2,rects[i].y+rects[i].height/2,"red","blue","1")
        }

        for(let i = 0 ; i < rects.length;i++){
            titleTextSVG[i].update(rects[i].x, rects[i].y + 50, '#444444', rects[i].title)
            titleTextSVGLine2[i].update(rects[i].x, rects[i].y + 75, '#444444', rects[i].title)
            rectsSVG[i].update(rects[i].x, rects[i].y, rects[i].width,rects[i].height, "#FFFFFF", '1')
            yesRectSVG[i].updateWithOnClick(rects[i].x, rects[i].y + heightSize/3, widthSize/3,heightSize/3, 'green', '1', "populateRec(1)")
            noRectSVG[i].updateWithOnClick(rects[i].x + rects[i].width - widthSize/3, rects[i].y + heightSize/3, widthSize/3,heightSize/3, 'red', '1', "populateRec(0)")
            yesTextSVG[i].update(rects[i].x, rects[i].y + rects[i].height/2, '#000', "Yes")
            noTextSVG[i].update(rects[i].x + rects[i].width - 25, rects[i].y+ rects[i].height/2,'#000', "No")
        }

        //onmouse

        config.updateLinesSVG(linesSVG)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        config.updateTitleTextSVGLine2(titleTextSVGLine2)
        config.updateYesRectSVG(yesRectSVG)
        config.updateNoRectSVG(noRectSVG)
        config.updateYesTextSVG(yesTextSVG)
        config.updateNoTextSVG(noTextSVG)
    }

    draw(index) {

        let rects = config.getRects()
        let rectsSVG = config.getRectSVG()
        let titleTextSVG = config.getTitleTextSVG()
        let titleTextSVGLine2 = config.getTitleTextSVGLine2()
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
             titleTextSVG[index].update(rects[index].x+45, rects[index].y + 50, '#444444', rects[index].title)
            //  alert(rects[index].title) // Contains the question in the box. How to separate it to two lines

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

        for(let i = 1 ; i < rects.length;i++){
            linesSVG[i-1].update(rects[i-1].x+rects[i-1].width/2,rects[i-1].y+rects[i-1].height/2,rects[i].x+rects[i].width/2,rects[i].y+rects[i].height/2,"red","blue","1")
        }

        config.updateLinesSVG(linesSVG)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        config.updateTitleTextSVGLine2(titleTextSVGLine2)
        config.updateYesRectSVG(yesRectSVG)
        config.updateNoRectSVG(noRectSVG)
        config.updateYesTextSVG(yesTextSVG)
        config.updateNoTextSVG(noTextSVG)

    }

    //
    clear(){
        let rects = config.getRects()
        let rectsSVG = config.getRectSVG()
        let titleTextSVG = config.getTitleTextSVG()
        let titleTextSVGLine2 = config.getTitleTextSVGLine2()
        let yesRectSVG = config.getYesRectSVG()
        let noRectSVG = config.getNoRectSVG()
        let linesSVG = config.getLinesSVG()
        let yesTextSVG = config.getYesTextSVG()
        let noTextSVG = config.getNoTextSVG()

        rects.pop()
        rectsSVG[rectsSVG.length-1].remove()
        titleTextSVG[titleTextSVG.length-1].remove()
        titleTextSVGLine2[titleTextSVGLine2.length-1].remove()
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
        titleTextSVGLine2.pop()
        yesRectSVG.pop()
        noRectSVG.pop()
        if(linesSVG.length >= 1)
            linesSVG.pop()

        config.popQuestionPosition()
        config.updateRects(rects)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        config.updateTitleTextSVGLine2(titleTextSVGLine2)
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
        let rectsSVG = config.getRectSVG()
        let titleTextSVG = config.getTitleTextSVG()

        let yesRectSVG = config.getYesRectSVG()
        let noRectSVG = config.getNoRectSVG()
        let linesSVG = config.getLinesSVG()
        let yesTextSVG = config.getYesTextSVG()
        let noTextSVG = config.getNoTextSVG()

        let titleTextSVGLine2 = config.getTitleTextSVGLine2()


        let newRect = null
        if(rects.length === 0) {
             newRect = new Rectangle(x, y, shape_width, shape_height, "#FFFFFF",
                false, title, rects.length)
        }
        else{
            // Sets up the shape, size, and color, then creates the new Rectangle
            newRect = new Rectangle(rects[rects.length - 1].x + width, rects[rects.length - 1].y,
                shape_width, shape_height, "#FFFFFF", false, title, rects.length)
        }
        // Creates a new instance of the rectangle
        let finalRectSVG = new RectangleSVG()
        let finalQuestionTextSVG = new TextSVG()
        let finalYesRectSVG = new RectangleSVG()
        let finalNoRectSVG  = new RectangleSVG()
        let finalLineSVG    =  new LineSVG()
        let finalYesTextSVG = new TextSVG()
        let finalNoTextSVG  = new TextSVG()
        // Updates the new rectangle's size and question
        // Includes a "yes" button colored green and a "no" button colored red, along with button location
        // If no boolean is 0, if yes boolean is 1
        finalRectSVG.update(newRect.x, newRect.y, newRect.width, newRect.height, newRect.fill, 0)
        finalQuestionTextSVG.update(newRect.x, newRect.y+ 50, '#000000', newRect.title)
        finalYesRectSVG.updateWithOnClick(newRect.x, newRect.y + height/2, 0, 0,
            'green', '1', null)
        finalNoRectSVG.updateWithOnClick(newRect.x + newRect.width - 25, newRect.y, 0, 0,
            'red', '1', null)
        finalYesTextSVG.update(0, 0, '#000', null)
        finalNoTextSVG.update(0,0,'#000', null)


        let cptCode = new TextSVG()
        cptCode.update(newRect.x+newRect.width/2, newRect.y + newRect.height/2, '\'#000000',cptcode_)
        // Populates/draws the rectangle with the updated question to the screen
        // Will create a new rectangle with updated question when patient answers "yes" or "no"
        rects.push(newRect)

        rectsSVG.push(finalRectSVG)
        titleTextSVG.push(finalQuestionTextSVG)
        titleTextSVG.push(cptCode)//?
        yesRectSVG.push(finalYesRectSVG)
        noRectSVG.push(finalNoRectSVG)
        yesTextSVG.push(finalYesTextSVG)
        noTextSVG.push(finalNoTextSVG)
        linesSVG.push(finalLineSVG)

        rectsSVG.push(newRectSVG)
        titleTextSVG.push(newQuestionTextSVG)
        titleTextSVG.push(cptCode)
        titleTextSVGLine2.push(newQuestionTextSVG)
        titleTextSVGLine2.push(cptCode)

        // Populates/draws the rectangle with the updated question to the screen
        // Will create a new rectangle with updated question when patient answers "yes" or "no"
        config.updateRects(rects)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)

        config.updateYesRectSVG(yesRectSVG)
        config.updateNoRectSVG(noRectSVG)
        config.updateYesTextSVG(yesTextSVG)
        config.updateNoTextSVG(noTextSVG)
        config.updateLinesSVG(linesSVG)

        config.updateTitleTextSVGLine2(titleTextSVGLine2)

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
        let titleTextSVGLine2 = config.getTitleTextSVGLine2()
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


        // Below is needed to create a second line on the table if it is needed.
        let newSecondLine = new TextSVG()
        let questionTitle = newRect.title
        if(firstQuestion != 0){
            line1 = ""
            line2 = ""
            if(questionTitle.length > 60){
                this.createSecondLine(questionTitle) // Calls the function to split the question into 2 lines
                newRect.title = line1
            }
        }
        else
        {
            firstQuestion = 1
        }
        // This is the end of the creation of the new line


        // Updates the new rectangle's size and question
        // Includes a "yes" button colored green and a "no" button colored red, along with button location
        // If no boolean is 0, if yes boolean is 1
        newRectSVG.update(newRect.x, newRect.y, newRect.width, newRect.height, newRect.fill, 0)
        newQuestionTextSVG.update(newRect.x+45, newRect.y + 50, '#444444', newRect.title)
        newSecondLine.update(newRect.x+45, newRect.y + 80, '#444444', line2)
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
        //titleTextSVG.push(secondline)
        yesRectSVG.push(newYesRectSVG)
        noRectSVG.push(newNoRectSVG)
        yesTextSVG.push(newYesTextSVG)
        noTextSVG.push(newNoTextSVG)

        // Populates/draws the rectangle with the updated question to the screen
        // Will create a new rectangle with updated question when patient answers "yes" or "no"
        config.updateRects(rects)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        config.updateTitleTextSVGLine2(titleTextSVGLine2)
        config.updateYesRectSVG(yesRectSVG)
        config.updateYesTextSVG(yesTextSVG)
        config.updateNoRectSVG(noRectSVG)
        config.updateNoTextSVG(noTextSVG)
        this.draw(newRect.id)
    }

    // This will read through the question title and split it into two lines
    // The lines will be displayed in the same position as before and the other line will be below it.
    createSecondLine(title){
        let count = title.length;
        if(count >= 60){
            let counter = 0
            for(let i = 0; i < count; i++){
                if(i > 60 && i < 80){
                    if(title[i] == " "){
                        line1 += title[i]
                        counter++
                        break
                    }
                    else{
                        line1 += title[i]
                        counter++
                    }
                }
                else
                {
                    line1 += title[i]
                    counter++
                }
            }
            for(let i = counter; i < count; i++)
            {
                line2 += title[i]
            }
            title = line1
        }
        else{
            titleTextSVG[index].update(rects[index].x, rects[index].y + 50, '#444444', rects[index].title)
        }
    }
}
