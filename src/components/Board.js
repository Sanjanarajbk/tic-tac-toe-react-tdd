import React from "react";
import Square from "./Square";
import { useState } from "react";
import CalculateWinner from './CalculateWinner'

const Board = () => {
    const [squares,setSquares] = useState(Array(9).fill(null));
    const [X,isNextX] = useState(1)
    const handleClick =  (i) =>{
        let nextSquares;
        if(squares[i] || CalculateWinner(squares)){
            return;
        }
        if(X){
        nextSquares=squares.slice();
        nextSquares[i]="X"
        setSquares(nextSquares)
        isNextX(0);
        }else{
            nextSquares=squares.slice();
            nextSquares[i]="O"
            setSquares(nextSquares)
            isNextX(1);
        }
    }

    let status;
    let winner = CalculateWinner(squares);
    if(winner){
        status=`Winner is ${winner}`
    }else{
        status = "Next player: "+ (X ? "X" : "O" )
    }
    
    return(
        <>
         <div className="status" data-testid="status">{status}</div>
        <div className="board-row">
        <Square value={squares[0]} handleSquareClick={() => handleClick(0)} data-testid="square-0"/>
        <Square value={squares[1]} handleSquareClick={() => handleClick(1)} data-testid="square-1"/>
        <Square value={squares[2]} handleSquareClick={() => handleClick(2)} data-testid="square-2"/>
        </div>

        <div className="board-row">
        <Square value={squares[3]} handleSquareClick={() => handleClick(3)} data-testid="square-3"/>
        <Square value={squares[4]} handleSquareClick={() => handleClick(4)} data-testid="square-4"/>
        <Square value={squares[5]} handleSquareClick={() => handleClick(5)} data-testid="square-5"/>
        </div>
       
        <div className="board-row">
        <Square value={squares[6]} handleSquareClick={() => handleClick(6)} data-testid="square-6"/>
        <Square value={squares[7]} handleSquareClick={() => handleClick(7)} data-testid="square-7"/>
        <Square value={squares[8]} handleSquareClick={() => handleClick(8)} data-testid="square-8"/>
        </div>
       

        </>
    )
}




export default Board;