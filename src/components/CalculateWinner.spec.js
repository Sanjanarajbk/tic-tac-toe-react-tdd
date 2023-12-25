import React from "react";
import CalculateWinner from './CalculateWinner'
import Board from "./Board";
import { fireEvent, render,screen,getByTestId } from "@testing-library/react";

describe('Checking for winner', () => {
    it("Choosing the winner X",() =>{
      const { getAllByRole} = render(<Board />);
      const squares = getAllByRole("button");
      fireEvent.click(squares[0])
      fireEvent.click(squares[4])
      fireEvent.click(squares[1])
      fireEvent.click(squares[5])
      fireEvent.click(squares[2])
      const winner = CalculateWinner(squares.map(square => square.textContent));
      const status=screen.getByTestId("status");
      expect(status.textContent).toBe(`Winner is ${winner}`)

    })
    it("Choosing the winner O",() =>{
       
        const { getAllByRole} = render(<Board />);
        const squares = getAllByRole("button"); //array of button elements
        console.log(squares);
        fireEvent.click(squares[1])
        fireEvent.click(squares[3])
        fireEvent.click(squares[2])
        fireEvent.click(squares[4])
        fireEvent.click(squares[8])
        fireEvent.click(squares[5])
        const winner = CalculateWinner(squares.map(square => square.textContent)); //to get thetext cintent from button element 
        const status=screen.getByTestId("status");
        expect(status.textContent).toBe(`Winner is ${winner}`)
    
     })

     it("Choosing the winner as Draw",() =>{
      //  const squares = ["X", "O", "X", "X", "O", "O", "O", "X", "X"]
        const { getAllByRole} = render(<Board />);
        const squares = getAllByRole("button"); //array of button elements
        console.log(squares);
        fireEvent.click(squares[0])
        fireEvent.click(squares[1])
        fireEvent.click(squares[2])
        fireEvent.click(squares[4])
        fireEvent.click(squares[7])
        fireEvent.click(squares[5])
        fireEvent.click(squares[8])
        fireEvent.click(squares[6])

        const winner = CalculateWinner(squares.map(square => square.textContent)); //to get the text cintent from button element 
        const status=screen.getByTestId("status");
        expect(status.textContent).toBe(`Next player: X`)
     })
});
