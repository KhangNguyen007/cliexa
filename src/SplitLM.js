import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//This is just a prototype
//
class SplitLM extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="SplitLM" style={{backgroundColor:"#F8CECC",height: window.innerHeight*.8 + "px", width: this.props.width + "px", borderStyle: "solid",position:"absolute",left: this.props.left + "px" , top: "100px", cursor: "all-scroll"}}>
                <div style={{left: "5px",height:"50px",width:"2px", backgroundColor:"black", top: (window.innerHeight*.8)/2 - 25 + "px",position: "absolute"}}/>
                <div style={{left: "10px",height:"50px",width:"2px", backgroundColor:"black", top: (window.innerHeight*.8)/2 - 25 + "px",position: "absolute"}}/>
            </div>


        )}

}

export default SplitLM;
