import React from 'react'
import {render,fireEvent,screen, getByTestId} from '@testing-library/react'
import Board from './Board';
import CalculateWinner from './CalculateWinner';

describe('Rendering Board using Square', () => {

    
    it("Renders the board",() => {
        const { getByText } = render(<Board />);
        const statusElement = getByText('Next player: X'); //intially
        expect(statusElement).toBeInTheDocument();
    })

    it('renders the winner status', () => {
        const { getAllByRole, getByTestId} = render(<Board />);
        // Simulate clicks on all Square elements to change the text from next player to winner is
        const squareElements = getAllByRole("button");
      
            fireEvent.click(squareElements[0]);
            fireEvent.click(squareElements[4]);
            fireEvent.click(squareElements[1]);
            fireEvent.click(squareElements[5]);
            fireEvent.click(squareElements[2]);
        
        expect(getByTestId("status")).toHaveTextContent(`Winner is X`);
            });

    it('Move Change: X to O to be rendered', () => {
      const {getByTestId} = render(<Board />);
      expect(getByTestId("status")).toHaveTextContent('Next player: X');//intially
        // Simulate a click on the first square to make a move
    fireEvent.click(screen.getByTestId("square-0"));
      expect(getByTestId("status")).toHaveTextContent('Next player: O');//now from X TO O
    });


    it('To stop the game once a user wins ', () => {
        const {getAllByRole,getByTestId} = render(<Board />);
        const squareElements = getAllByRole("button");
      fireEvent.click(squareElements[0])
      fireEvent.click(squareElements[4])
      fireEvent.click(squareElements[1])
      fireEvent.click(squareElements[5])
      fireEvent.click(squareElements[2])
      expect(getByTestId("status")).toHaveTextContent('Winner is X');
      fireEvent.click(squareElements[2])
      expect(getByTestId("status")).toHaveTextContent('Winner is X');//does not take entry after winner declared

    })

    it('To no be able ti change the value once its pressed that is no overwriting the values',() =>{
        const {getAllByRole,getByTestId} = render(<Board />);
       const squareElements = getAllByRole("button");
       fireEvent.click(squareElements[0])
       expect(getByTestId("square-0")).toHaveTextContent('X')
       fireEvent.click(squareElements[0])
       expect(getByTestId("square-0")).toHaveTextContent('X')

    })
      
});
