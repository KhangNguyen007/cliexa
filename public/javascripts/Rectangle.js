/*
Rectangle class will update/change and manage to the following:
- setter/getter CPT code
- setter/getter CPT description
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

}