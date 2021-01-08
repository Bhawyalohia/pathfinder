import React from "react";
import Box from "./box.jsx";
function Row(props)
{
  const arr = [];
  for (let i = 0; i < 20; i++) arr.push(i);
  return (
    <div style={{display:"flex"}}>
      {arr.map((ele,index) => {
        return <Box ill={props.ill} row={props.row} col={index} key={index}/>;
      })}
    </div>
  );
}
export default Row;
