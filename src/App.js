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
import MiddlePanel from "./MiddlePanel";
import LeftPanel from "./LeftPanel";
import SplitLM from "./SplitLM";
//This is just a prototype
//
class App extends React.Component{
    constructor(props) {
        super(props);
        this.mouseDown  = this.mouseDown.bind(this)
        this.mouseUp    = this.mouseUp.bind(this)
        this.mouseMove  = this.mouseMove.bind(this)
        this.mouse_Down_Split_LM = this.mouse_Down_Split_LM.bind(this)
        this.mouse_Up_Split_LM   = this.mouse_Up_Split_LM.bind(this)
        this.mouseOnMotion = this.mouseOnMotion.bind(this)
        this.state = {split_LM_active: false, split_LM_Left:470, hover:false, mousedown: false, mouseup: true, mousemove: false, x: 0, y: 0, p1:null,p2:null,p3:null,p4:null}
    }
    mouseDown(e){
        this.setState({mousedown:true,p2:{rect:{x:e.clientX,y:e.clientY,width:0,height:0}}})
    }
    mouseMove(e){
        if(this.state.mousedown){
            this.setState({mousemove:true,p1:{rect:{x:e.clientX,y:this.state.p2.rect.y,width:0,height:0}},p3:{rect:{x:this.state.p2.rect.x,y:e.clientY,width:0,height:0}},p4:{rect:{x:e.clientX,y:e.clientY,width:0,height:0}}})
        }
        else{
            this.setState({mousemove:false, x:e.screenX,y:e.screenY})
        }
    }
    mouseUp(e){
        this.setState({mousedown:false})
        if(this.state.mousemove) {
            this.setState({mousedown: false, mousemove: false, mouseup:true,p1:{rect:{x:0,y:e.clientY,width:0,height:0}}, p2:{rect:{x:0,y:e.clientY,width:0,height:0}},p3:{rect:{x:0,y:e.clientY,width:0,height:0}} , p4:{rect:{x:0,y:e.clientY,width:0,height:0}}})
        }
    }

    mouse_Down_Split_LM(e){
        e.preventDefault()
        this.setState({split_LM_active: true})
    }
    mouse_Up_Split_LM(e){
        e.preventDefault()
        this.setState({split_LM_active: false})
    }
    mouseOnMotion(e){
        e.preventDefault()
        if(this.state.split_LM_active){
            this.setState({split_LM_Left:e.clientX - 12.5})
        }
    }
    render() {
        return (
      <div className="App" onMouseMove={this.mouseOnMotion}>
        <TopPanel/>
        <LeftPanel width={this.state.split_LM_Left}/>
        <div onMouseDown={this.mouse_Down_Split_LM} onMouseUp={this.mouse_Up_Split_LM}>
            <SplitLM  height={1000} width={25} left={this.state.split_LM_Left}/>
        </div>
        <MiddlePanel left={this.state.split_LM_Left} width={window.innerWidth - this.state.split_LM_Left - 50} height={1000}/>

      </div>
      )}

}

export default App;
