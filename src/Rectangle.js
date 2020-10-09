import React from 'react';
import './App.css';
import Draggable from "react-draggable";
import ReactDOM from "react-dom";
import Circle from './Circle'
//This is just a prototype
//
class Rectangle extends React.Component{
    constructor(props) {
        super(props);
        this.state = { id: this.props.id, direction: false,hover:false, title: null, coordinate: null, tempt_h: 0, tempt_v: 0, horizon: this.props.horizon, vertical: this.props.vertical, width:200,height:150,mousedown:false, mouseup:true}; //null for start, 1 for yes and 0 for no
        this.Yes = this.Yes.bind(this)
        this.No  = this.No.bind(this)
        this.rectangle = React.createRef();
        this.mouseMove = this.mouseMove.bind(this)
        this.mouseEnter = this.mouseEnter.bind(this)
        this.mouseOut   = this.mouseOut.bind(this)
    }

    Yes(e){
        //If click yes
        e.preventDefault()
        const rect = ReactDOM
            .findDOMNode(this.rectangle.current)
            .getBoundingClientRect();
        // For now, search the text file and populate new data
        let coordinate = {title: this.props.title, id: this.state.id + 1,rect: {x:this.state.tempt_h + 200 ,y :  this.state.tempt_v}}

        let answer = 1
        this.props.parentMethod(coordinate,answer)
    }
    No(e){
        e.preventDefault()
        const rect = ReactDOM
            .findDOMNode(this.rectangle.current)
            .getBoundingClientRect();
        // For now, search the text file and populate new data
        let coordinate = {title: this.props.title, id: this.state.id + 1,rect: {x:this.state.horizon+200,y : this.state.tempt_v}}
        let answer = 0
        this.props.parentMethod(coordinate,answer)
    }
    //Can improve below function further by click and drag but now just dragging the mouse around
    mouseMove(e){
        if(this.props.mousedown && this.props.mousemove){
            let coordinate = {
                id: this.state.id,
                title: this.props.title,
                rect: {
                    x: e.clientX , y: e.clientY, width: this.state.width, height: this.state.height
                }
            }
            this.props.updateRectangleById(coordinate)

            this.setState({tempt_h:e.clientX, tempt_v:e.clientY})
        }
    }

    mouseEnter(){
        console.log("Mouse Enter")
        this.setState({direction: true})
    }
    mouseOut(){
        console.log("Mouse out")
        this.setState({direction: false})
    }
    render() {
        return (
            <div  style={{position:'absolute', cursor: 'all-scroll'}} onMouseMove={this.mouseMove} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseOut}>
                <Draggable  ref={this.rectangle}>
                    <div>
                        <div style={{position:'absolute',left: this.state.horizon + "px",top: this.state.vertical + 'px', width:this.state.width + "px",height:this.state.height + "px"}}>

                                <div className="innerRectangle">
                                    <button style={{float:"left"}} onClick={this.Yes}>Yes</button>
                                    <button style={{float:"right"}} onClick={this.No}>No</button>
                                    <p>{this.props.title}</p>

                                </div>
                            {  this.state.direction &&
                                <div>
                                    <Circle horizon={0} vertical={0}/>
                                    <Circle horizon={this.state.width / 2} vertical={0}/>
                                    <Circle horizon={this.state.width} vertical={0}/>
                                    <Circle horizon={0} vertical={this.state.height / 2}/>
                                    <Circle horizon={this.state.width} vertical={this.state.height / 2}/>
                                    <Circle horizon={0} vertical={this.state.height}/>
                                    <Circle horizon={this.state.width / 2} vertical={this.state.height}/>
                                    <Circle horizon={this.state.width} vertical={this.state.height}/>
                                </div>
                            }

                        </div>

                    </div>

                </Draggable>
            </div>
        );
    }
}

export default Rectangle;
