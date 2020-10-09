import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { Stage, Layer, Star, Text ,Rect,Line} from 'react-konva';

let yAxis = []

for(let i = -500; i <= 500; i += 100){
    yAxis.push(i)
}
let xAxis = []

for(let i = -500; i <= 500; i += 100){
    xAxis.push(i)
}

const Test = (props) => {

    const [stagePos, setStagePos] = React.useState({ x: props.x, y:0 });
    const [stageScale,setStageScale] = React.useState(1)


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
    return (
        <Stage
            width= {props.width}
            height={props.height}
            scaleX={stageScale}
            scaleY={stageScale}
            offsetX={stagePos.x} //Offset works here
            y={stagePos.y}
            draggable
            //onMouseOver={test}
           // onDragStart={test}
            //onContextMenu={test}
            onWheel={zoomInAndOut}
        >
            <Layer>
                {/*X axis main*/}
                <Line
                    x={1200}
                    y={850}
                    points={[-500, 0, 500,0]}
                    stroke={"grey"}
                    tension={10}
                />
                {/*X axis non main*/}
                {
                    xAxis.map( (item) => {
                        return (
                            <Line
                                x={1200}
                                y={850}
                                points={[-500, item, 500, item]}
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
                                x={1200}
                                y={850}
                                points={[item, -500, item, 500]}
                                stroke={"grey"}
                                tension={10}
                            />
                        )
                    })
                }
                {/*Y axis main*/}
                <Line
                    x={1200}
                    y={850}
                    points={[0, -500, 0,500]}
                    stroke={"grey"}
                    tension={10}
                />
                <Star
                x={1200}
                y={850}
                numPoints={5}
                innerRadius={70}
                outerRadius={70}
                fill={"yellow"}
                stroke={"black"}
                strokeWidth={4}
                draggable
                />

            </Layer>
        </Stage>
    );
};

export default Test;