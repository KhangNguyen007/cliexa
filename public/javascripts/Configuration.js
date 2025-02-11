/*
Configuration class will update/change and manage to the following:
- Scale zoom in / zoom out
- Update question box position
- Update Progress Bar
- Update mode
- Change main panel size
 */

class Configuration {
    constructor() {
        this.prev = [] //To keep track of the question id
        this.rects = [];
        this.rectsSVG = [];
        this.linesSVG = []
        this.titleTextSVG = [] //Create multiple line here
        this.yesRectSVG = []
        this.yesTextSVG = []
        this.noRectSVG = []
        this.noTextSVG = []
        this.cptSVG = null
        this.cptDescription = null
        this.titleLength = null
        this.widthSize = $('#mainPanel').width()*7/10
        this.heightSize = $('#mainPanel').height()*8/10
        this.maxWidth =  $('#mainPanel').width()*8/10
        this.maxHeight =  $('#mainPanel').height()*8/10
        this.minWidth = 100
        this.minHeight = 100
        this.matrix =  [1,0,1,0]
        this.mode = false   // {0 = focus, 1 = not focus}.
        this.mainPanelWidth = window.innerWidth
        this.mainPanelHeight = window.innerHeight
        this.scale_and_translate ={
            x_scale:1,
            y_scale:1,
            translateX:0,
            translateY:0
        }
        this.test_progress_bar = 0
        this.questionnaireLevel = 0
        this.update_progress = 0
        this.level = [0]
        this.CPT_Detail_Buffer = 0
        this.index = -1


        // Below will contain the amount of yes answers needed to be qualified for treatment
        // This will vary depending on the assessment.
        this.qualified_smoking = 4
        this.qualified_ccm = 3
        this.qualified_anxiety = 4
        this.qualified_alcohol = 4
        this.qualified_depression = 5
        this.qualified_drug = 5

        // This can be easily modified and added for future questionnaires
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////// Gets the amount of yes' needed to qualify for treatment ///////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////

    getSmokingQualification(qualified_smoking){
        return this.qualified_smoking
    }
    getCCMQualification(qualified_ccm){
        return this.qualified_ccm
    }
    getAnxietyQualification(qualified_anxiety){
        return this.qualified_anxiety
    }
    getAlcoholQualification(qualified_alcohol){
        return this.qualified_alcohol
    }
    getDepressionQualification(qualified_depression){
        return this.qualified_depression
    }
    getDrugQualification(qualified_drug){
        return this.qualified_drug
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////// Gets the amount of yes' needed to qualify for treatment ///////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////


    setIndex(index){
        this.index = index
    }
    getIndex(){
        return this.index
    }

    updateCPTDetailBuffer(CPT_Detail_Buffer){
        this.CPT_Detail_Buffer = CPT_Detail_Buffer
    }

    getCPTDetailBuffer(){
        return this.CPT_Detail_Buffer
    }

    getTitleLength(){
        return this.titleLength
    }

    updateTitleLength(titleLength){
        this.titleLength = titleLength
    }


    getCPTTextSVG(){
        return this.cptSVG
    }
    updateCPTTextSVG(cptSVG){
        this.cptSVG = cptSVG
    }

    getCPTDescription(){
        return this.cptDescription
    }
    updateCPTDescription(cptDescription){
        this.cptDescription = cptDescription
    }

    setLevel(level){
        this.level.push(level)
    }
    getCurrentLevel(){
        return this.level[this.level.length - 1]
    }
    popCurrentLevel(){
       this.level.pop()
    }
    setMainPanel(width, height){
        $('#mainPanel').scrollLeft(width);
        $('#mainPanel').scrollTop(height);
    }
    setSearchBar(left,top){
        $('#SearchBar-Container').css('left',left)
        $('#SearchBar-Container').css('top',top)
    }
    setScaleTranslate(xScale,yScale,translateX,translateY){
        this.scale_and_translate.x_scale = xScale
        this.scale_and_translate.y_scale = yScale
        this.scale_and_translate.translateX = translateX
        this.scale_and_translate.translateY = translateY
    }
    getScaleTranslate(){
        return this.scale_and_translate
    }

    // checks to see if the control key is pushed. Used to help us debug code.
    setCtrlKey(boolean){
        this.ctrlkey=boolean
    }

    // we check the question and make sure we populate the correct question
    updateQuestionPosition(prev){
        this.prev.push(prev)
    }
    popQuestionPosition(){
        this.prev.pop()
    }
    getQuestionPosition(){
        return this.prev[this.prev.length-1]
    }

    //Go back to previous state
    goBack(final){
        if(final === false)
        {
            this.popCurrentLevel()
            this.popQuestionPosition()
            this.popRects()
            this.popRectSVG()
            this.popLinesSVG()
            this.popYesRectSVG()
            this.popNoRectSVG()
            this.popYesTextSVG()
            this.popNoTextSVG()
            this.popTitleTextSVG()
        }
        else{
            this.popCurrentLevel()
            this.popQuestionPosition()
            this.popRects()
            this.popRectSVG()
            this.popTitleTextSVG()
        }
    }
    updateRects(rects){
        this.rects = rects
    }
    getRects(){
        return this.rects
    }
    getLastRect(){
        return this.rects[this.rects.length-1]
    }
    popRects(){
        this.rects.pop()
    }
    updateRectsSVG(rectSVG){
        this.rectsSVG = rectSVG
    }
    getRectSVG(){
        return this.rectsSVG
    }
    popRectSVG(){
        this.rectsSVG.pop()
    }

    // creates the connective line for the box
    updateLinesSVG(lineSVG){
        return this.linesSVG
    }
    getLinesSVG(){
        return this.linesSVG
    }
    popLinesSVG(){
        this.linesSVG.pop()
    }

    // this will display the questions on the boxes.
    updateTitleTextSVG(textSVG){
        this.titleTextSVG = textSVG
    }
    getTitleTextSVG(){
        return this.titleTextSVG
    }

    popTitleTextSVG(){
        this.titleTextSVG.pop()
    }

    // if the user clicks yes, we populate the next corresponding question
    updateYesRectSVG(yesRectSVG){
        this.yesRectSVG = yesRectSVG
    }
    getYesRectSVG(){
        return this.yesRectSVG
    }
    popYesRectSVG(){
        this.yesRectSVG.pop()
    }

    // updates the size, placement, and color of the "Yes" text
    updateYesTextSVG(yesTextSVG){
        this.yesTextSVG = yesTextSVG
    }
    getYesTextSVG(){
        return this.yesTextSVG
    }
    popYesTextSVG(){
        this.yesTextSVG.pop()
    }

    // if the user clicks no, we will populate the next corresponding question
    updateNoRectSVG(noRectSVG){
        this.noRectSVG = noRectSVG
    }
    getNoRectSVG(){
        return this.noRectSVG
    }
    popNoRectSVG(){
        this.noRectSVG.pop()
    }

    // updates the size, placement, and color of the "No" text
    updateNoTextSVG(noTextSVG){
        this.noTextSVG = noTextSVG
    }
    getNoTextSVG(){
        return this.noTextSVG
    }
    popNoTextSVG(){
        this.noTextSVG.pop()
    }

    updateMainPanelWidth(mainPanelWidth){
        this.mainPanelWidth = mainPanelWidth
    }

    // the main panel that our questionnaire boxes will be in
    getMainPanelWidth(){
        return this.mainPanelWidth
    }
    updateMainPanelHeight(mainPanelHeight){
        this.mainPanelHeight = mainPanelHeight
    }
    getMainPanelHeight(){
        return this.mainPanelHeight
    }

    // gets/sets the height and the size of the box
    updateWidthSize(width){
        this.widthSize = width
    }
    getWidth(){
        return this.widthSize
    }
    updateHeightSize(height){
        this.heightSize = height
    }
    getHeight(){
        return this.heightSize
    }

    // needed to create our hybrid mode. this is the zoom in/out function
    updateMode(mode){
        this.mode = mode
    }
    getMode(){
        return this.mode
    }

    // progress bar to see how far along the user is in.
    updateTest_Progress_Bar(test_progress_bar){
        this.test_progress_bar = test_progress_bar
    }
    getTest_Progress_bar(){
        return this.test_progress_bar
    }

}