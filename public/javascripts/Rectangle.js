/*

 */

// Defaults all the box created for simplicity
class Rectangle{

    // Set up the default box size that all our boxes will use
    constructor(x,y,width,height,fill,isDragging,title,id) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.fill = fill
        this.isDragging = isDragging
        this.title = title
        this.id = id
        this.cpt_code = null
        this.cpt_detail = null
        this.answer = null
    }
    setCPT_Code(cpt_code){
        this.cpt_code = cpt_code
    }
    getCPT_Code(){
        return this.cpt_code
    }
    setCPT_Description(cpt_detail){
        this.cpt_detail = cpt_detail
    }
    getCPT_Description(){
        return this.cpt_detail
    }
    update(x,y,width,height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
    getWidth(){
        return this.width
    }
    setAnswer(answer){
        this.answer = answer
    }
    getAnswer(){
        return this.answer
    }
}