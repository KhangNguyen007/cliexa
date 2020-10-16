import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { Stage, Layer, Star, Text ,Rect,Line} from 'react-konva';
import DynamicRectangle from "./DynamicRectangle";
import SearchBar from "./SearchBar";

let mainX = 3800
let mainY = 1650
let yAxis = []
let x_Axis_Left = -1500
let x_Axis_Right = 1500
let y_Axis_Top = 1500
let y_Axis_Bottom = -1500
for(let i = x_Axis_Left; i <= x_Axis_Right; i += 100){
    yAxis.push(i)
}
let xAxis = []

for(let i = y_Axis_Bottom; i <= y_Axis_Top; i += 100){
    xAxis.push(i)
}

const Test = (props) => {

    const [stagePos, setStagePos] = React.useState({ x: props.x, y:0 });
    const [stageScale,setStageScale] = React.useState(0.30)
    const [, forceUpdate] = React.useState(0);

    React.useEffect(() => {
        console.log("Receive new props")
        setStagePos(props);
    }, [props.x])



    // do not show context menu on right click

    const zoomInAndOut = (e) =>{
        e.evt.preventDefault();
        if(e.evt.ctrlKey){
            console.log("Test:",stagePos.x)
            const scaleBy = 1.02;
            const stage = e.target.getStage();
            const oldScale = stage.scaleX();
            const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
            setStageScale(newScale)
        }
    }
    const testMouseMove = (e) =>{
        console.log(e.evt.clientX)
        if(false){
            x_Axis_Left = -1000
            yAxis = []
            for(let i = x_Axis_Left; i <= x_Axis_Right; i += 100){

                yAxis.push(i)
            }

            xAxis = []
            for(let i =y_Axis_Bottom; i <= y_Axis_Top; i += 100){
                xAxis.push(i)
            }
            forceUpdate(n => !n)
        }
        else if(false){
            yAxis = []
            x_Axis_Left = -1500
            for(let i = y_Axis_Bottom; i <= y_Axis_Top; i += 100){

                yAxis.push(i)
            }
            xAxis = []

            for(let i =x_Axis_Left; i <= x_Axis_Right; i += 100){
                xAxis.push(i)
            }
            forceUpdate(n => !n)
        }
    }
    return (
        <div>
            <Stage
                width= {props.width}
                height={props.height}
                scaleX={stageScale}
                scaleY={stageScale}
                offsetX={stagePos.x} //Offset works here
                y={stagePos.y}
                //onMouseOver={test}
               // onDragStart={test}
                //onContextMenu={test}
                onWheel={zoomInAndOut}
                onMouseMove={testMouseMove}
            >
                <Layer>

                    {/*X axis main*/}
                    <Line
                        x={mainX}
                        y={mainY}
                        points={[-500, 0, 500,0]}
                        stroke={"grey"}
                        tension={10}
                    />
                    {/*X axis non main*/}
                    {
                        xAxis.map( (item) => {
                            return (
                                <Line
                                    x={mainX}
                                    y={mainY}
                                    points={[x_Axis_Left, item, x_Axis_Right, item]}
                                    stroke={"grey"}
                                    tension={10}
                                />
                            )
                        })
                    }
                    {/*Y axis non main*/}
                    {
                        yAxis.map( (item) => {
                            return (
                                <Line
                                    x={mainX}
                                    y={mainY}
                                    points={[item, y_Axis_Bottom, item, y_Axis_Top]}
                                    stroke={"grey"}
                                    tension={10}
                                />
                            )
                        })
                    }
                    {/*Y axis main*/}
                    <Line
                        x={mainX}
                        y={mainY}
                        points={[0, -500, 0,500]}
                        stroke={"grey"}
                        tension={10}
                    />

                </Layer>

            </Stage>
        </div>
    );
};

export default Test;