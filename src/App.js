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
import {useWindowDimensions} from './WindowSize';
//This is just a prototype
//
class App extends React.Component{
    constructor(props) {
        super(props);

        this.mouse_Down_Split_LM = this.mouse_Down_Split_LM.bind(this)
        this.mouse_Up_Split_LM   = this.mouse_Up_Split_LM.bind(this)
        this.mouseOnMotion = this.mouseOnMotion.bind(this)
        this.updateDimensions = this.updateDimensions.bind(this)
        this.state = {split_LM_active: false, split_LM_Left:470, hover:false}
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
    updateDimensions(){
      const { h, w } = useWindowDimensions();
      console.log(h,w)
      this.setState({split_LM_Left:w * .2, PanelHeight:h*.8})
    }
    componentDidMount() {
     window.addEventListener('resize', this.updateDimensions);
   }
   componentWillUnmount() {
     window.removeEventListener('resize', this.updateDimensions);
   }



    render() {
        return (
      <div className="App" onMouseMove={this.mouseOnMotion}>
        <TopPanel/>
        <LeftPanel  width={this.state.split_LM_Left}/>
        <div onMouseDown={this.mouse_Down_Split_LM} onMouseUp={this.mouse_Up_Split_LM}>
            <SplitLM height={this.state.PanelHeight} width={25} left={this.state.split_LM_Left}/>
        </div>
        <MiddlePanel left={this.state.split_LM_Left} width={window.innerWidth - this.state.split_LM_Left - 50} height={this.state.PanelHeight}/>

      </div>
      )}

}

export default App;
