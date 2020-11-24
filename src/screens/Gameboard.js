import React, {useState} from 'react'
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';
import Game from '../components/Game/Game'

const GameBoard = () => {
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
            }
        }
        return null;
    }
    
    const [squares, setSquares] = useState([Array(9).fill(null)]);
    const [step, setStep] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(squares[step]);
    

    const handleClick = (i) => {
        const timeInHistory = squares.slice(0, step+1);
        const current = timeInHistory[step];
        const board = [...current];
        if(winner || board[i]) return; //kazanan olması veya dolu kareye tıklanması durumunda
        board[i] = xIsNext ? 'X' : 'O';
        setSquares([...timeInHistory,board]);
        setStep(timeInHistory.length);
        setXisNext(!xIsNext);
    }

    const jumpTo = (move) => {
        setStep(move);
        setXisNext(move % 2 === 0);
    }

    const renderMoves = () => (
        squares.map((_step, move) => {
            const destination = (move>0) && `Go to move#${move}`;
            return(
                <>
                {(move>0) &&
                <li key={move}>
                    <Button 
                    text={destination} 
                    onClick={() => jumpTo(move)}
                    backgroundColor="transparent"
                    border="1px solid corflowerblue"
                    />
                </li>}
                </>
            )
        })
    )

    return(
        <>
            <Game renderMoves={renderMoves} squares={squares[step]} onClick={handleClick}/>
            {(winner || step===9) && 
            <Footer step={step} setStep={setStep} winner={winner}
            />}
        </>
    )
}
export default GameBoard;
