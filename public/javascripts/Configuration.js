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
        this.prev = [] //To keep track of the question
        this.rects = [];
        this.rectsSVG = [];
        this.linesSVG = []
        this.titleTextSVG = []
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

    setCtrlKey(boolean){
        this.ctrlkey=boolean
    }
    getCtrlKey(){
        return this.ctrlkey
    }
    updateQuestionPosition(prev){
        this.prev.push(prev)
    }
    popQuestionPosition(){
        this.prev.pop()
    }
    getQuestionPosition(){
        return this.prev[this.prev.length-1]
    }
    updateRects(rects){
        this.rects = rects
    }
    getRects(){
        return this.rects
    }
    updateRectsSVG(rectSVG){
        this.rectsSVG = rectSVG
    }
    getRectSVG(){
        return this.rectsSVG
    }
    updateLinesSVG(lineSVG){
        return this.linesSVG
    }
    getLinesSVG(){
        return this.linesSVG
    }
    updateTitleTextSVG(textSVG){
        this.titleTextSVG = textSVG
    }
    getTitleTextSVG(){
        return this.titleTextSVG
    }
    updateYesRectSVG(yesRectSVG){
        this.yesRectSVG = yesRectSVG
    }
    getYesRectSVG(){
        return this.yesRectSVG
    }
    updateYesTextSVG(yesTextSVG){
        this.yesTextSVG = yesTextSVG
    }
    getYesTextSVG(){
        return this.yesTextSVG
    }
    updateNoRectSVG(noRectSVG){
        this.noRectSVG = noRectSVG
    }
    getNoRectSVG(){
        return this.noRectSVG
    }
    updateNoTextSVG(noTextSVG){
        this.noTextSVG = noTextSVG
    }
    getNoTextSVG(){
        return this.noTextSVG
    }
    updateMainPanelWidth(mainPanelWidth){
        this.mainPanelWidth = mainPanelWidth
    }
    getMainPanelWidth(){
        return this.mainPanelWidth
    }

    updateMainPanelHeight(mainPanelHeight){
        this.mainPanelHeight = mainPanelHeight
    }

    getMainPanelHeight(){
        return this.mainPanelHeight
    }

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
    updateMode(mode){
        this.mode = mode
    }
    getMode(){
        return this.mode
    }
    updateTest_Progress_Bar(test_progress_bar){
        this.test_progress_bar = test_progress_bar
    }
    getTest_Progress_bar(){
        return this.test_progress_bar
    }

}