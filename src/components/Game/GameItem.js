import React from 'react'

const GameboardItem = ({value,onClick}) => {
    return (
        <button className="game-item" onClick={onClick}>
            {value}
        </button>
    )
}

export default GameboardItem
