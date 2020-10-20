import React from 'react';
import './App.css';
import StackOfRectangle from "./StackOfRectangle";
import DynamicRectangle from "./DynamicRectangle";
import SearchBar from "./SearchBar";
import { Scrollbars } from 'react-custom-scrollbars';
import Test from "./Test";
import { Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopPanel from "./TopPanel";
//This is just a prototype
//
class MiddlePanel extends React.Component{
    constructor(props) {
        super(props);
        this.bottomScroll_Down = this.bottomScroll_Down.bind(this)
        this.bottomScroll_Up = this.bottomScroll_Up.bind(this)
        this.onmousemove_middle_panel = this.onmousemove_middle_panel.bind(this)
        this.rightScroll_Down         = this.rightScroll_Down.bind(this)
        this.rightScroll_Up           = this.rightScroll_Up.bind(this)
        this.mouseDown  = this.mouseDown.bind(this)
        this.mouseUp    = this.mouseUp.bind(this)
        this.mouseMove  = this.mouseMove.bind(this)
        this.state={
                    bottomScroll_down: false,left: this.props.width/2, rightScroll_down: false,top:this.props.height/2,
                    mousedown: false, mouseup: true, mousemove: false, x: 0, y: 0, p1:null,p2:null,p3:null,p4:null
                    }
    }

    // This will populate the red connective line when the questions are populated and answered
    mouseDown(e) {
        this.setState({mousedown: true, p2: {rect: {x: e.clientX, y: e.clientY, width: 0, height: 0}}})
    }

    // This will populate the red connective line and moves with the boxes
    mouseMove(e) {
        if (this.state.mousedown) {
            this.setState({
                mousemove: true,
                p1: {rect: {x: e.clientX, y: this.state.p2.rect.y, width: 0, height: 0}},
                p3: {rect: {x: this.state.p2.rect.x, y: e.clientY, width: 0, height: 0}},
                p4: {rect: {x: e.clientX, y: e.clientY, width: 0, height: 0}}
            })
        } else {
            this.setState({mousemove: false, x: e.screenX, y: e.screenY})
        }
    }


    mouseUp(e){
        this.setState({mousedown:false})
        if(this.state.mousemove) {
            this.setState({mousedown: false, mousemove: false, mouseup:true,p1:{rect:{x:0,y:e.clientY,width:0,height:0}}, p2:{rect:{x:0,y:e.clientY,width:0,height:0}},p3:{rect:{x:0,y:e.clientY,width:0,height:0}} , p4:{rect:{x:0,y:e.clientY,width:0,height:0}}})
        }
    }

    // What is this used for
    bottomScroll_Down(){
        this.setState({bottomScroll_down: true})
    }
    bottomScroll_Up(){
        this.setState({bottomScroll_down: false})
    }

    // What is this used for?
    rightScroll_Down(){
        this.setState({rightScroll_down: true})
    }
    rightScroll_Up(){
        this.setState({rightScroll_down: false})
    }
    onmousemove_middle_panel(e){

        if(this.state.bottomScroll_down){
                if(this.state.left >=0  && this.state.left <= this.props.width - 50) {
                    this.setState({left: e.clientX - this.props.left - 50})
                }
                else{
                    this.setState({left: 10})
                }
        }
        if(this.state.rightScroll_down){
                this.setState({top: e.clientY - 30})
        }
    }

    render() {
        return (
            <div onMouseMove={this.onmousemove_middle_panel}>
                <div className="MiddlePanel" style={{
                    borderStyle: "ridge",
                    position: "absolute",
                    left: this.props.left + 28 + "px",
                    top:  "100px",
                    width: this.props.width,
                    height: this.props.height,

                }}>
                    {/* Middle-Panel, basically you can draw rectangle and can move the rectangle */}
                    {/* <MiddlePanel left={this.state.split_LM_Left} width={window.innerWidth - this.state.split_LM_Left - 50} height={1000}/> */ }

                    { /* The <div> below will populate the search bar and the questions onto the middle panel */ }
                        <div onMouseDown={this.mouseDown} onMouseMove={this.mouseMove}
                             onMouseUp={this.mouseUp}>

                            {/*The StackofRectangle function will populate the search bar and the questions. */}
                            {

                                <StackOfRectangle mouseX={this.state.x} mouseY={this.state.y}
                                                  mousedown={this.state.mousedown} mouseup={this.state.mouseup}
                                                  mousemove={this.state.mousemove}/>
                                                  /*
                                <StackOfRectangle mouseX={this.clientX} mouseY={this.clientY} mousedown={this.state.mousedown} mouseup={this.state.mouseup}
                                mousemove={this.state.mousemove}/>
                                */
                                // this.setState({mousedown: true, p2: {rect: {x: e.clientX, y: e.clientY, width: 0, height: 0}}})
                            }

                            <DynamicRectangle mousedown={this.state.mousedown} mouseup={this.state.mouseup}
                                              p1={this.state.p1} p2={this.state.p2} p3={this.state.p3}
                                              p4={this.state.p4}/>*
                        </div>

                    { /*
                    <ScrollView horizontal={true}>
                    <text>Test 1</text>
                    <text>Test 2</text>
                    <text>Test 3</text>
                    </ScrollView>
                    */}

                    {/*React-Konvas
                          <Test width={this.props.width} height={this.props.height} x={this.state.left}/>
                    */}

                    {/* Horizontal Slider Holder, Controls the slider holder appearance and location */}
                    <div style={{
                        borderStyle: "groove",
                        position: "absolute",
                        top: this.props.height - 30 + "px",
                        backgroundColor: "#F5F5F5",
                        width: this.props.width + "px",
                        height: "30px",
                    }}>

                    </div>

                    {/* Horizontal Slider Button itself */}
                    <div onMouseDown={this.bottomScroll_Down} onMouseUp={this.bottomScroll_Up} style={{
                        borderRadius: "25px",
                        cursor: "grab",
                        width: "100px",
                        height: "30px",
                        position: "absolute",
                        backgroundColor: "#B2B2FB",
                        top: this.props.height - 30+ "px",
                        left: this.state.left + "px"
                    }}/>

                    {/* Vertical Slider Holder, Controls the slider appearance and location */}
                    <div style={{
                        borderStyle: "groove",
                        position: "absolute",
                        top: 0 + "px",
                        right: -5 +"px",
                        backgroundColor: "#F5F5F5",
                        height: this.props.height + "px",
                        width: 30 + "px"
                    }}>

                    </div>

                    {/* Vertical Sliders Button itself */}
                    <div onMouseDown={this.rightScroll_Down} onMouseUp={this.rightScroll_Up} style={{
                        borderRadius: "25px"    ,
                        cursor: "grab",
                        width: "30px",
                        height: "200px",
                        position: "absolute",
                        backgroundColor: "#B2B2FB",
                        top: this.state.top  + "px",
                        right: -5 + "px"
                    }}/>
                </div>

                { /*
                  <div className="container" onMouseDown={this.mouseDown} onMouseMove={this.mouseMove}
                       onMouseUp={this.mouseUp}>

                      <StackOfRectangle  mouseX={this.state.x} mouseY={this.state.y} mousedown={this.state.mousedown} mouseup={this.state.mouseup} mousemove={this.state.mousemove}/>
                      <DynamicRectangle mousedown={this.state.mousedown} mouseup={this.state.mouseup} p1={this.state.p1} p2={this.state.p2} p3={this.state.p3} p4={this.state.p4}/>*
                  </div>
                  <MiddlePanel left={this.state.split_LM_Left} width={window.innerWidth - this.state.split_LM_Left - 50} height={1000}/>
                */}

            </div>
        )
    }
}

export default MiddlePanel;
