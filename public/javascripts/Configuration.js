/*
Configuration class will make change to the following:
Position of scroller

 */

// an array of objects that define different rectangles

//Rects format example
// x: 50,
// y: 50,
//             width: 100,
//             height: 100,
//             fill: "#444444",
//             isDragging: false,
//             title:  $(this).html()
class Configuration {
    constructor() {
        this.ctrlkey = false
        this.prev = [] //To keep track of the question id
        this.rects = [];
        this.rectsSVG = [];
        this.linesSVG = []
        this.titleTextSVG = [] //Create multiple line here
        this.yesRectSVG = []
        this.yesTextSVG = []
        this.noRectSVG = []
        this.noTextSVG = []
        this.widthSize = $('#mainPanel').width()*7/10
        this.heightSize = $('#mainPanel').height()*8/10
        this.maxWidth =  $('#mainPanel').width()*8/10
        this.maxHeight =  $('#mainPanel').height()*8/10
        this.minWidth = 100
        this.minHeight = 100
        this.mode = false   // {0 = focus, 1 = not focus}
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
        //this.progress_bar = 0
    }
    debugPrev(){
        return this.prev
    }
    setLevel(level){
        this.level.push(level)
    }
    getCurrentLevel(){
        return this.level[this.level.length - 1]
    }
    popCurrentLevel(){
       this.level.pop()
        console.log("This level:",this.level)
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

    //
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