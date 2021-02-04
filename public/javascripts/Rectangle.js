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

}