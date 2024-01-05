import React from "react";

const CalculateWinner = (squares) =>{

    //defining all the winning possibilities
    const winningLines =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
  
    for(let i=0;i<winningLines.length;i++){
      const [firstSquare,secondSquare,thirdSquare] =winningLines[i];
      if(squares[firstSquare] && squares[firstSquare]==squares[secondSquare] && squares[secondSquare]==squares[thirdSquare]){
        return squares[firstSquare];
      }
    }
    return null;
  
  }

  export default CalculateWinner;
