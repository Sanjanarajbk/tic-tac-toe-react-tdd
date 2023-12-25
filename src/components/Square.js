import React, { useState } from "react";

const Square = ({value,handleSquareClick,"data-testid":testid}) =>{
    
return(

<>
<button className="square" data-testid={testid} onClick={handleSquareClick}>{value}</button>
</>

)
}

export default Square;