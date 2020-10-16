import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//This is just a prototype
//
class TopPanel extends React.Component{
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="TopPanel" style={{
                position: "relative",
                backgroundColor: "white",
                height:"100px",
                width: "100%"
            }}>
                <div className="Sub_Top_TopPanel" style={{
                    height:"70px",
                    borderStyle: "ridge",
                    left:"10px",
                    right:"10px",
                    position: "absolute",
                    backgroundColor:"#FBFBFB"
                }}>
                    {/*Logo*/}
                    <img src={require('./logo192.png')} width="50px" height="50px"  alt="Some img"/>
                    {/*First drop down*/}
                    <Dropdown style={{position:"absolute", left:"100px", top:"10px"}}>
                        <Dropdown.Toggle variant="failure" id="dropdown-basic" style={{backgroundColor:"#DAE8FC"}}>
                            Main
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/*Second drop down*/}
                    <Dropdown style={{position:"absolute", left:"300px", top:"10px"}}>
                        <Dropdown.Toggle variant="failure" id="dropdown-basic" style={{backgroundColor:"#DAE8FC"}}>
                            Main
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/*Third drop down*/}
                    <Dropdown style={{position:"absolute", left:"500px", top:"10px"}}>
                        <Dropdown.Toggle variant="failure" id="dropdown-basic" style={{backgroundColor:"#DAE8FC"}}>
                            Main
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/*Export drop down*/}
                    <Dropdown style={{position:"absolute", right:"50px", top:"10px"}}>
                        <Dropdown.Toggle variant="failure" id="dropdown-basic" style={{backgroundColor:"#DAE8FC"}}>
                            Export
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

        )}

}

export default TopPanel;
