/*
Configuration class will make change to the following:
Position of scroller

 */

class Configuration {
    constructor() {
    }
    setMainPanel(width, height) {
        $('#mainPanel').scrollLeft(width);
        $('#mainPanel').scrollTop(height);

        console.log("Cal main panel from Set main panel")
    }

}