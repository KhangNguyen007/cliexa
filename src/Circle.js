import React from 'react';



class Circle extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div style={{ cursor:"e-resize" ,left:this.props.horizon +"px", top:this.props.vertical + "px", position:"absolute", height: "10px",width: "10px", backgroundColor:"red", borderRadius:"50%"}}/>
        )
    }
}

export default Circle