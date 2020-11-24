import React from 'react'

const Button = ({text,onClick,...restProps}) => {
    return (
        <button onClick={onClick} style={{border:"2px solid black",...restProps}}>{text}</button>
    )
}

export default Button
