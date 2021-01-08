import React, { useState } from "react";
function Box(props)
{
    const [istrue,upd]=useState(false);
    const {row,col,ill}=props;
    return (
       <div className="gridbox" style={{backgroundColor:((row===ill.row&&col===ill.col)?"red":"white")}}></div>
    );
}
export default Box;
