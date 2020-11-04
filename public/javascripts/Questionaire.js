let data =[
    {id:0,q:"Do you smoke?",yes:1,no:3},
    {id:1,q:"How many packs do you smoke per day? Yes > 5 or No < 5", yes:2,no:3},
    {id:2,q:"Did you have lungs surgery before?",yes:6,no:4},
    {id:3,q:"Do you cough often?",yes:5,no:4},
    {id:4,q:"Good for you",goto:6},
    {id:5,q:"Sorry to hear that?", goto:6},
    {id:6,q:"We are finalizing your result for smoking",goto:7},
    {id:7,q:"Are you a returning patient?",yes:11, no:8},
    {id:8,q:"Are you enrolled in medicare?", yes:9,no:13},
    {id:9,q:"Do you have two or more diagnoses shown below?",yes:11,no:13},
    {id:10,q:"Are you enrolled in any Chronic Care Management with any other physician?",yes:13,no:11},
    {id:11,q:"Did you sign the CCM consent form?",yes:12,no:13},
    {id:12,q:"Is this your CCM plan worksheet?", yes:13,no:13},
    {id:13,q:"We are finalizing your result for CCM",yes:13,loading:7}
]

//Call from search question
function populateRec(answer){
    console.log("Expand new rectangle: ",answer)
    let index
    let title
    //Here is the logic to expand question
    if(answer){
        index = data[prev].yes
        if(index === undefined) {
            index = data[prev].goto
        }
        title = data[index].q
    }
    else{
        index = data[prev].no

        if(index === undefined) {
            index = data[prev].goto
        }
        //Update title and index for the new rectangle
        title = data[index].q
    }
    let newRect = new Rectangle(rects[rects.length-1].x + widthSize + 50,rects[rects.length-1].y,widthSize,heightSize,"#444444",false, title,rects.length)
    let newRectSVG = new RectangleSVG()
    let newTitleTextSVG = new Text()
    let newYesRectSVG   = new RectangleSVG()
    let newNoRectSVG    = new RectangleSVG()
    newRectSVG.create(3000,3000,heightSize,widthSize,"#444444",0)
    newTitleTextSVG.create(newRect.x, newRect.y, '#000', newRect.title)
    newYesRectSVG.createWithOnClick(newRect.x, newRect.y, 25, 25, 'red', '1', "populateRec(1)")
    newNoRectSVG.createWithOnClick(newRect.x + newRect.width - 25, newRect.y, 25, 25, 'blue', '1', "populateRec(0)")
    rects.push(newRect)
    rectsSVG.push(newRectSVG)
    titleTextSVG.push(newTitleTextSVG)
    yesRectSVG.push(newYesRectSVG)
    noRectSVG.push(newNoRectSVG)


    prev = index


    //Should slide to the new rectangle position
    slide()
    draw(newRect.id)
}
function slide(){
    let left = $('#mainPanel').scrollLeft();
    $('#mainPanel').scrollLeft(left+widthSize);
}