/*
Main class will update/change and manage to the following:
- Populate new question box
- Slide to the new window when populate new box
 */

// Global variable for all assessments
let offsetX = 0
let score = 0

// Global variables specifically for CCM assessment
let CCM_Assessment = false
let CCM_PHQ_9_Score = 0
let CCM_PHQ_Boolean = false
let save_prev = 0

function populateRec(answer){
    {
        let index, title, progress_bar
        let Qualified_CPT
        let NotQualified_CPT = "You are not qualified for a CPT Code."
        let rects = config.getRects()
        let cptDetail = config.getCPTDescription()
        cptDetail = "CPT codes are numerical codes used to identify medical services."
        let noCPT = "", CPT_buffer = 0
        let yesRectSVG = config.getYesRectSVG()
        let noTextSVG = config.getNoRectSVG()

        if (answer == 1) {
            //console.log("Answer Yes")
            //console.log("Current length",rects.length-1)
            main.storedHighLight("Yes")
            yesRectSVG[yesRectSVG.length - 1].persistent = true
        } else if (answer == 0) {
            main.storedHighLight("No")
            noTextSVG[noTextSVG.length - 1].persistent = true
        }
        //Here is the logic to expand question

        // This will set the predefine levels for the questionnaires. This is used to display the progress bar value
        if (config.getQuestionPosition() === 0) {
            progress_bar = 0
            config.setLevel(progress_bar)
            config.questionnaireLevel = 8
            // config.update_progress = (100/config.questionnaireLevel) // This brings it to 12.5 percent
            config.update_progress = 15
            config.updateTest_Progress_Bar(progress_bar)
        } else if (config.getQuestionPosition() === 8 || config.getQuestionPosition() === 17) {
            if (config.getQuestionPosition() === 8) {
                config.questionnaireLevel = 8
                // config.update_progress = (100/config.questionnaireLevel) // This brings it to 12.5 percent
                config.update_progress = 12
                CCM_Assessment = true
            }
            if (CCM_Assessment == true && config.getQuestionPosition() === 17) {
                config.update_progress = 6
            }
        } else if (config.getQuestionPosition() === 16) {
            progress_bar = 0
            config.updateTest_Progress_Bar(progress_bar)
            config.questionnaireLevel = 10
            config.update_progress = (100 / config.questionnaireLevel)
        } else if (config.getQuestionPosition() === 27) {
            progress_bar = 0
            config.updateTest_Progress_Bar(progress_bar)
            config.questionnaireLevel = 8
            // config.update_progress = (100/config.questionnaireLevel) // Ths bring it up to 12.5 percent
            config.update_progress = 12
        } else if (config.getQuestionPosition() === 36) {
            config.questionnaireLevel = 11
            // new_progress = (100/config.questionnaireLevel) // Equals to about 9.09
            config.update_progress = 9
        } else if (config.getQuestionPosition() === 48) {
            config.questionnaireLevel = 11
            // new_progress = (100/config.questionnaireLevel) // Equals to about 9.09
            config.update_progress = 9
        }

        // Gets the answer from the user and will send them to the next question based off their answer
        if (answer) { // If the user selects yes, go to next question corresponding to yes
            index = data[config.getQuestionPosition()].yes
            //console.log("INDEX2221111:", index)
            if (index === undefined) {
                index = data[config.getQuestionPosition()].goto
            }
            if (CCM_PHQ_Boolean == true) {
                CCM_PHQ_9_Score += 1
            } else {
                score += 1
            }
            // Update title and index for the new rectangle
            title = data[index].q
            //console.log("INDEX:", index)
        } else { // If the user selects no, go to the next question corresponding to no
            index = data[config.getQuestionPosition()].no
            //console.log("NEW_INDEX:", index)
            if (index === undefined) {
                index = data[config.getQuestionPosition()].goto
            }
            //Update title and index for the new rectangle
            title = data[index].q
        }


        if (index == 10) {
            save_prev = index
        }
        if (save_prev == 10 && index == 17 && CCM_Assessment == true) {
            CCM_PHQ_Boolean = true
            CCM_PHQ_9_Score += 1
        }

        // This will back out of the depression assessment and back into the CCM questionnaire
        // This will only happen if we started in the CCM assessment first.
        if (CCM_Assessment == true && index == 25) {
            CCM_PHQ_Boolean = false

            // Once we are back from the PHQ-9 called from CCM, we return back to the CCM questionnaire
            if (CCM_PHQ_Boolean == false) {
                // If they score medium to high on PHQ-9, we go ask if they are enrolled with other physicans
                if (CCM_PHQ_9_Score > 4) {
                    score += 1
                    index = data[config.getQuestionPosition()].ccm
                    if (index === undefined) {
                        index = data[config.getQuestionPosition()].goto
                    }
                    index = 12
                    title = data[index].q
                }

                // If they score low on PHQ-9, we will finalize their result for CCM
                else {
                    index = data[config.getQuestionPosition()].ccm
                    if (index === undefined) {
                        index = data[config.getQuestionPosition()].goto
                    }
                    index = 15
                    title = data[index].q
                }
            }
        }

        //console.log("INDEX:", index)

        // If we reach the final box for smoking cessation questionnaire, populate the final box.
        if (data[index].loading === 0) {
            //console.log("HERE FIRST")
            // HERE WILL CONTAIN WHETHER THE CPT CODE IS QUALIFIED OR NOT
            Qualified_CPT = "You are qualified! CPT code: 99406"
            cptDetail = "Smoking and tobacco use cessation counseling " +
                "visit (intermediate) lasting 3 to 10 minutes."
            //NotQualified_CPT = "CPT code: 84919"
            //Create a final box here
            if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
                let width = $('#svg').width()
                $('#svg').width(width + width)
            }
            // If we reach the final box, progress bar goes to 100%
            let progress_bar = 100
            config.setLevel(progress_bar)
            config.updateTest_Progress_Bar(progress_bar)
            //console.log("Current level:",config.getCurrentLevel())
            $('#progress-bar').width(config.getCurrentLevel() + '%')
            $('#progress-bar').text(config.getCurrentLevel() + '%')

            // Gets the qualification for the assessment from configuration.js
            let qualified_smoking = config.getSmokingQualification()
            //console.log("Smoking",qualified_smoking)
            if (score > qualified_smoking) {
                main.insertTheFinalBox(title, Qualified_CPT, cptDetail)
            } else {
                main.insertTheFinalBox(title, NotQualified_CPT, noCPT)
            }
            main.setFinal(true)
            main.slide(0)

        }

        // If we reach the final box for CCM questionnaire, populate the final box
        else if (data[index].loading === 8) {
            // HERE WILL CONTAIN WHETHER THE CPT CODE IS QUALIFIED OR NOT
            Qualified_CPT = "You are qualified! CPT code: 99091"
            cptDetail = "Collection of physiologic data digitally stored and or " +
                "transmitted by the patient and or caregiver to the physician."
            //NotQualified_CPT = "CPT code: 17490"

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

            // Gets the qualification for the assessment from configuration.js
            let qualified_ccm = config.getCCMQualification()
            if (score > qualified_ccm) {
                main.insertTheFinalBox(title, Qualified_CPT, cptDetail)
            } else {
                main.insertTheFinalBox(title, NotQualified_CPT, noCPT)
            }
            main.setFinal(true)
            main.slide(0)
        }

        // If we reach the final box for the depression questionnaire
        else if (data[index].loading === 16) {
            // HERE WILL CONTAIN WHETHER THE CPT CODE IS QUALIFIED OR NOT
            Qualified_CPT = "You are qualified! CPT code: 96127"
            cptDetail = "Brief emotional or behavioral assessment with scoring and documentation."
            //NotQualified_CPT = "CPT code: 66190"
            CPT_buffer = 70
            config.updateCPTDetailBuffer(CPT_buffer)
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

            // Gets the qualification for the assessment from configuration.js
            let qualified_depression = config.getDepressionQualification()
            if (score > qualified_depression) {
                main.insertTheFinalBox(title, Qualified_CPT, cptDetail)
            } else {
                main.insertTheFinalBox(title, NotQualified_CPT, noCPT)
            }
            main.setFinal(true)
            main.slide(0)
        }

        // If we reach the final box for the anxiety questionnaire
        else if (data[index].loading === 27) {
            // HERE WILL CONTAIN WHETHER THE CPT CODE IS QUALIFIED OR NOT
            Qualified_CPT = "You are qualified! CPT code: 96127"
            cptDetail = "Brief emotional or behavioral assessment with scoring and documentation."
            //NotQualified_CPT = "You are not qualified for a CPT Code"
            CPT_buffer = 70
            config.updateCPTDetailBuffer(CPT_buffer)
            // Create a final box here
            if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
                let width = $('#svg').width()
                $('#svg').width(width + width)
            }
            // If we reach the final box, progress bar goes to 100%
            let progress_bar = 100
            config.setLevel(progress_bar)
            config.updateTest_Progress_Bar(progress_bar)
            //console.log(progress_bar)
            $('#progress-bar').width(config.getCurrentLevel() + '%')
            $('#progress-bar').text(config.getCurrentLevel() + '%')

            // Gets the qualification for the assessment from configuration.js
            let qualified_anxiety = config.getAnxietyQualification()
            if (score > qualified_anxiety) {
                main.insertTheFinalBox(title, Qualified_CPT, cptDetail)
            } else {
                main.insertTheFinalBox(title, NotQualified_CPT, noCPT)
            }
            main.setFinal(true)
            main.slide(0)
        }

        // If we reach the final box for the alcohol questionnaire
        else if (data[index].loading === 36) {
            // HERE WILL CONTAIN WHETHER THE CPT CODE IS QUALIFIED OR NOT
            Qualified_CPT = "You are qualified! CPT code: 99408"
            cptDetail = "Alcohol and/or substance abuse (other than tobacco) structured " +
                "screening (e.g., AUDIT, DAST), and brief intervention (SBI) services;" +
                " 15 to 30 minutes."
            //NotQualified_CPT = "You are not qualified for a CPT Code"

            // Create a final box here
            if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
                let width = $('#svg').width()
                $('#svg').width(width + width)
            }
            // If we reach the final box, progress bar goes to 100%
            let progress_bar = 100
            config.setLevel(progress_bar)
            config.updateTest_Progress_Bar(progress_bar)

            //console.log(progress_bar)
            $('#progress-bar').width(config.getCurrentLevel() + '%')
            $('#progress-bar').text(config.getCurrentLevel() + '%')

            // Gets the qualification for the assessment from configuration.js
            let qualified_alcohol = config.getAlcoholQualification()
            if (score > qualified_alcohol) {
                main.insertTheFinalBox(title, Qualified_CPT, cptDetail)
            } else {
                main.insertTheFinalBox(title, NotQualified_CPT, noCPT)
            }
            main.setFinal(true)
            main.slide(0)
        }

        // If we reach the final box for the drug questionnaire
        else if (data[index].loading === 48) {
            // HERE WILL CONTAIN WHETHER THE CPT CODE IS QUALIFIED OR NOT
            Qualified_CPT = "You are qualified! CPT code: 99408"
            cptDetail = "Alcohol and/or substance abuse (other than tobacco) structured " +
                "screening (e.g., AUDIT, DAST), and brief intervention (SBI) services;" +
                " 15 to 30 minutes."
            //NotQualified_CPT = "CPT code: 76547"
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

            // Gets the qualification for the assessment from configuration.js
            let qualified_drug = config.getDrugQualification()
            if (score > qualified_drug) {
                main.insertTheFinalBox(title, Qualified_CPT, cptDetail)
            } else {
                main.insertTheFinalBox(title, NotQualified_CPT, noCPT)
            }
            main.setFinal(true)
            main.slide(0)
        }

        // If we did not reach any of the final boxes, we will populate next question.
        else {
            if (index !== 0 || index !== 8) {
                if (rects[rects.length - 1].x + $('#mainPanel').width() >= $('#svg').width()) {
                    let width = $('#svg').width()
                    $('#svg').width(width + width)
                }

                // If we are at the beginning of the new questionnaire, set progress bar to 0
                if (index == 0 || index == 16 || index == 27 || index == 36 || index == 48 || index == 8) {

                    if (index == 16 && CCM_Assessment == true) {
                        progress_bar = config.getCurrentLevel() + config.update_progress
                        config.setLevel(progress_bar)
                        //console.log("THIS IS VERY TRUE")
                    } else {
                        progress_bar = 0
                        config.setLevel(progress_bar)
                    }

                }
                // Added the progress of the bars together.
                else {
                    progress_bar = config.getCurrentLevel() + config.update_progress
                    config.setLevel(progress_bar)
                }
                //console.log("Current level:",config.getCurrentLevel())
                config.updateTest_Progress_Bar(progress_bar)
                $('#progress-bar').width(config.getCurrentLevel() + '%')
                $('#progress-bar').text(config.getCurrentLevel() + '%')
                main.insertShape(title)

                main.slide(0)
                /*
                if(rects.length > 1){
                    main.slide(0)
                }
                else{
                    main.slide(1)
                }*/
            }
        }
        config.updateQuestionPosition(index)
        //console.log("Question link:", config.getQuestionPosition())
        //console.log("CCM:", CCM_Assessment)
    }
}



class Main{
    constructor(){
        this.final = false //Indicate final box
        this.translateX= 0
        this.translateY= 0
        this.scaleX = 0
        this.scaleY = 0
    }

    //Think about Tree Hierarchy which easier to manager
    // Class Inheritance and Interface
    setFinal(final){
        this.final = final
    }
    getFinal(){
        return this.final
    }
    setTranslateX(translateX){
        this.translateX = translateX
    }
    getTranslateX(){
        return this.translateX
    }
    setTranslateY(translateY){
        this.translateY = translateY
    }
    getTranslateY(){
        return this.translateY
    }
    setScaleX(scaleX){
        this.scaleX = scaleX
    }
    getScaleX(){
        return this.scaleX
    }
    setScaleY(scaleY){
        this.scaleY = scaleY
    }
    getScaleY(){
        return this.scaleY
    }

    storedHighLight(answer){
        let yesRectSVG = config.getYesRectSVG()
        let noRectSVG = config.getNoRectSVG()
        if(answer === "Yes"){
            //Update Yes here
            //console.log("Update Yes")
            yesRectSVG[yesRectSVG.length-1].updateStoreHighLight()
        }
        else if(answer === "No"){
            //Update No here
            noRectSVG[noRectSVG.length-1].updateStoreHighLight()
        }
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
            rectsSVG[index].update_boxes(rects[index].x, rects[index].y, rects[index].width, rects[index].height, "#FFFFFF", '1')
        }
        if(titleTextSVG.length > index) {
            titleTextSVG[index].updateTitle(rects[index].x,45, rects[index].y,70, '#000000', rects[index].title)
        }
        // The color of the light blue we use is #1E99D6
        // New color is grey which is #808080. Dark grey #696969, even darker grey #373131, hard dark grey #211D1D, super dark grey #151414
        if(yesRectSVG.length > index) {
            yesRectSVG[index].updateWithOnClick(rects[index].x+rects[index].width*(1/9), rects[index].y + heightSize / 2, widthSize / 3, heightSize / 3, '#151414', '1', "populateRec(1)",yesRectSVG[index].persistent)
        }
        if(yesTextSVG.length > index) {
            yesTextSVG[index].update_yes_no_text(rects[index].x + rects[index].width*(1/9) + widthSize/6 -23.25 , rects[index].y + rects[index].height / 1.66, '#FFFFFF', "Yes","populateRec(1)")
            //yesRectSVG[index].updateWithOnClick(rects[index].x+rects[index].width*(1/9), rects[index].y + heightSize / 2, widthSize / 3, heightSize / 3, '#151414', '1', "populateRec(1)",yesRectSVG[index].persistent)
        }
        // The color of the light blue we use is #1E99D6
        // New color is grey which is #808080
        if(noRectSVG.length > index) {
            noRectSVG[index].updateWithOnClick(rects[index].x + rects[index].width*(.63), rects[index].y + heightSize / 2, widthSize / 3, heightSize / 3, '#151414', '1', "populateRec(0)",noRectSVG[index].persistent)
        }
        if(noTextSVG.length > index) {
            noTextSVG[index].update_yes_no_text(rects[index].x + rects[index].width*(.63)+ widthSize/6 -18, rects[index].y + rects[index].height / 1.66, '#FFFFFF', "No","populateRec(0)")
        }
        for(let i = 1 ; i < rects.length; i++){
            linesSVG[i-1].update_lines(rects[i-1].x+rects[i-1].width/2,rects[i-1].y+rects[i-1].height/2,rects[i].x+rects[i].width/2,rects[i].y+rects[i].height/2,"red","blue","1")
        }



        config.updateLinesSVG(linesSVG)
        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        config.updateYesRectSVG(yesRectSVG)
        config.updateNoRectSVG(noRectSVG)
        config.updateYesTextSVG(yesTextSVG)
        config.updateNoTextSVG(noTextSVG)

    }

    drawFinalBox(index) {
        let rects = config.getRects()
        let rectsSVG = config.getRectSVG()
        let titleTextSVG = config.getTitleTextSVG()
        let cptTextSVG  = config.getCPTTextSVG()
        let cptDescription = config.getCPTDescription()
        let linesSVG = config.getLinesSVG()
        let rect_dimensions = config.getLastRect()
        if(rectsSVG.length > index) {
            rectsSVG[index].update_boxes(rects[index].x, rects[index].y, rects[index].width, rects[index].height, "#FFFFFF", '1')
        }

        if(titleTextSVG.length > index) {
            // for rects[index].y + 70, change the 70 to 90 to match text position of final box with all other boxes
            //titleTextSVG[index].update(rects[index].x+40, rects[index].y + 70, '#000000', rects[index].title)
            titleTextSVG[index].updateTitle(rects[index].x, 40, rects[index].y,70, '#000000', rects[index].title)
        }
        let getHeight = rect_dimensions.height
        let middleHeight = getHeight / 2
        let getWidth = rect_dimensions.width
        let middleWidth = getWidth / 2

        cptTextSVG.update_CPT_Text(rects[index].x + middleWidth - 224, rects[index].y+middleHeight + 15, '#000000',rects[index].getCPT_Code())
        cptDescription.updateTitle(rects[index].x, middleWidth - 420,rects[index].y , middleHeight + 45,'#000000',rects[index].getCPT_Description())
        for(let i = 1 ; i < rects.length; i++){
            linesSVG[i-1].update_lines(rects[i-1].x+rects[i-1].width/2,rects[i-1].y+rects[i-1].height/2,rects[i].x+rects[i].width/2,rects[i].y+rects[i].height/2,"red","blue","1")
        }

        config.updateRectsSVG(rectsSVG)
        config.updateTitleTextSVG(titleTextSVG)
        config.updateCPTTextSVG(cptTextSVG)
        config.updateCPTDescription(cptDescription)
        main.setFinal(true)
    }

    // When a question is answered, it will slide to the next question automatically.
    slide(slide){
        if(config.getMode() === false) {
            if(slide === 0) {
                let left = $('#mainPanel').scrollLeft();

                $('#mainPanel').scrollLeft(left + $('#mainPanel').width());
                offsetX = $('#mainPanel').scrollLeft()
                //console.log("Scroll left:",$('#mainPanel').scrollLeft())
            }
            else if(slide === 1){
                $('#mainPanel').scrollLeft(0);
            }
        }
    }


    // Update the final box.
    insertTheFinalBox(title,cptcode_,cpt_description){
       {
            let width = Math.floor(config.getMainPanelWidth() - $("#leftPanel").width() - $("#rightPanel").width());
            let height = Math.floor(config.getMainPanelHeight() - $("#topPanel").height());
            let shape_width = width - 0.1 * width
            let shape_height = height - 0.1 * height
            let rects = config.getRects()
            let rectsSVG = config.getRectSVG()
            let titleTextSVG = config.getTitleTextSVG()
            let getHeight = config.getLastRect().height
            let middleHeight = getHeight / 2
            let getWidth = config.getLastRect().width
            let middleWidth = getWidth / 2

            let newRect = new Rectangle(rects[rects.length - 1].x + width, rects[rects.length - 1].y,
                shape_width, shape_height, "#FFFFFF", false, title, rects.length)
            newRect.setCPT_Code(cptcode_)
            newRect.setCPT_Description(cpt_description)
            let newRectSVG = new RectangleSVG()
            let newTitleText = new TextSVG(newRect.x, 45, newRect.y, 50, '#000000', title, "title")
            let cptCode = new TextSVG(newRect.x, 0, newRect.y, 0, '#000000', cptcode_, "cpt_code")
            let cptDetail = new TextSVG(newRect.x, middleWidth - 416, newRect.y, middleHeight + 45, '#000000', cpt_description, "description")
            rects.push(newRect)
            rectsSVG.push(newRectSVG)
            config.updateRects(rects)
            config.updateRectsSVG(rectsSVG)
            titleTextSVG.push(newTitleText)
            config.updateTitleTextSVG(titleTextSVG)
            config.updateCPTTextSVG(cptCode)
            config.updateCPTDescription(cptDetail)
            this.drawFinalBox(newRect.id)
        }
    }

    // Automatically draw the rectangle shape with the question and the yes or no button
    insertShape(title){

        // Sets up the size of the rectangle
        //Get the index back

       {

            //Get in here")
            let width = Math.floor(config.getMainPanelWidth() - $("#leftPanel").width() - $("#rightPanel").width());
            let height = Math.floor(config.getMainPanelHeight() - $("#topPanel").height());
            let x = 0.05 * width
            let shape_width = width - 0.1 * width
            let y = 0.05 * height
            let shape_height = height - 0.1 * height
            let rects = config.getRects()
            let linesSVG = config.getLinesSVG()
            let rectsSVG = config.getRectSVG()
            let titleTextSVG = config.getTitleTextSVG()
            let yesRectSVG = config.getYesRectSVG()
            let noRectSVG = config.getNoRectSVG()
            let yesTextSVG = config.getYesTextSVG()
            let noTextSVG = config.getNoTextSVG()
            let lineSVG = config.getLinesSVG()

            // Will create the first rectangle with questions. Sets up shape, size, and color of first rectangle
            let newRect
            if (rects.length === 0) {
                let newLineSVG = new LineSVG()
                linesSVG.push(newLineSVG)
                newRect = new Rectangle(x, y, shape_width, shape_height, "#FFFFFF",
                    false, title, rects.length)
            }

            // If the first rectangle is populated, all the rectangles after will have connective box
            else {
                // Sets up the shape, size, and color, then creates the new Rectangle
                newRect = new Rectangle(rects[rects.length - 1].x + width, rects[rects.length - 1].y,
                    shape_width, shape_height, "#FFFFFF", false, title, rects.length)
                // Creates a new line that connects the previous box to the next box
                let newLineSVG = new LineSVG()
                linesSVG.push(newLineSVG)
            }

            // Creates a new instance of the rectangle
            let newRectSVG = new RectangleSVG()    //Big rectangle
            let newYesRectSVG = new RectangleSVG()   // Yes Rectangle on the left
            let newYesTextSVG = new TextSVG()          //  Text of Yes Rectangle on the left
            let newNoRectSVG = new RectangleSVG()   //  No Rectangle on the right
            let newNoTextSVG = new TextSVG()           //  Text of No Rectangle on the right
            let newLineSVG = new LineSVG()

            // Populates/draws the rectangle with the updated question to the screen
            // Will create a new rectangle with updated question when patient answers "yes" or "no"
            rects.push(newRect)
            rectsSVG.push(newRectSVG)
            yesRectSVG.push(newYesRectSVG)
            noRectSVG.push(newNoRectSVG)
            yesTextSVG.push(newYesTextSVG)
            noTextSVG.push(newNoTextSVG)
            lineSVG.push(newLineSVG)

            // Populates/draws the rectangle with the updated question to the screen
            // Will create a new rectangle with updated question when patient answers "yes" or "no"
            config.updateRects(rects)
            config.updateRectsSVG(rectsSVG)
            let newQuestionTextSVG = new TextSVG(newRect.x, 45, newRect.y, 50, '#000000', title, "title")   //Title center of rectangle
            titleTextSVG.push(newQuestionTextSVG)
            config.updateTitleTextSVG(titleTextSVG)
            config.updateYesRectSVG(yesRectSVG)
            config.updateYesTextSVG(yesTextSVG)
            config.updateNoRectSVG(noRectSVG)
            config.updateNoTextSVG(noTextSVG)
            config.updateLinesSVG(lineSVG)
            this.draw(newRect.id)
        }
    }
    // This will read through the question title and split it into two lines
    // The lines will be displayed in the same position as before and the other line will be below it.
}
