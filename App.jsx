
import React, { useState } from "react";
import Grid from "./grid.jsx";
function App() {
const [ill,upill]=useState({row:0,col:0,ill:false});
let mat=[];
for(let i=0;i<10;i++)
for(let j=0;j<10;j++)
mat.push({row:i,col:j});
function handleclick()
{}
return (
    <div>
      <Grid ill={ill}/>
      <button onClick={handleclick}>start</button>
      {/* {
        setTimeout(() => {
          upill((prev)=>
          { 
            return ({
                row:((prev.col===0)?(prev.row+1)%20:prev.row),
                col:(prev.col+1)%20,
                ill:true
              });
            });
          }, 50)
      } */}
    </div>
  );
}
export default App;