import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//This is just a prototype
//
class LeftPanel extends React.Component{
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="LeftPanel" style={{backgroundColor: "#F5F5F5",borderStyle: "groove", width: this.props.width + "px",height:"1000px", positive:"absolute", left:"0"}}>

            </div>
        )}

}

export default LeftPanel;
