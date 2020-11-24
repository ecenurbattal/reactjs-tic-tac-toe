import React, {useContext, useRef, useEffect} from 'react';
import StartContext from '../../contexts/StartContext';
import Button from '../Button/Button';


const Footer = ({winner,setStep,step}) => {
    const {setStatus} = useContext(StartContext);
    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({behavior:'smooth'});
    })

    const handleRestartClick = () => {
        setStep(0);
    }

    const handleMainMenuClick = () => {
        setStatus(false);
    }

    return (
        <div ref={divRef} className="footer">
            {(step===9 && !winner) && <p>Tied</p>}
            {(winner) && <p>Winner is: {winner}</p>}
            <Button fontSize="20px" color="white" backgroundColor="blue" text="Restart" onClick={handleRestartClick}/> <br/>
            <Button fontSize="20px" color="white" backgroundColor="red" text="Return to Main Menu" onClick={handleMainMenuClick}/>
        </div>
    )
}

export default Footer
