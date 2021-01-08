import React from "react";
//import Row from "./row.jsx";
import Box from "./box.jsx";
function Grid(props) {
  const arr = [];
  for (let i = 0; i < 20; i++) arr.push(i);


  return (
    <div>
      {arr.map((ele,index1) => {
        return (
          <div style={{display:"flex"}}>
           {arr.map((ele,index2) => {
           return <Box ill={props.ill} row={index1} col={index2} />;
           })}
          </div>
        );
      })}
    </div>
  );
}
export default Grid;