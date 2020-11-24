import GameItem from './GameItem';

const Game = ({squares, onClick, renderMoves}) => {
    return (
        <>
            <div className="game">
                {squares.map((square,i) => (
                    <GameItem key={i} value={square} onClick={() => onClick(i)}/>
                ))}
                {renderMoves()}
            </div>
        </>
    )
}

export default Game
