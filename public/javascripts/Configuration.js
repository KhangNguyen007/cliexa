/*
Configuration class will make change to the following:
Position of scroller

 */

// an array of objects that define different rectangles


var prev = -1 //To keep track of the question
var rects = [];
var rectsSVG = [];
var titleTextSVG = []
var yesRectSVG = []
var noRectSVG = []

var widthSize = $('#mainPanel').width()*7/10
var heightSize = $('#mainPanel').height()*8/10

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
    }
    setMainPanel(width, height) {
        $('#mainPanel').scrollLeft(width);
        $('#mainPanel').scrollTop(height);

        console.log("Cal main panel from Set main panel")
    }
    setSearchBar(left,top){
        $('#SearchBar-Container').css('left',left)
        $('#SearchBar-Container').css('top',top)
    }
}