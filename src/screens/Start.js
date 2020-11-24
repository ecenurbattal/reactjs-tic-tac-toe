import React, { useContext } from 'react';
import Button from '../components/Button/Button';
import StartContext from '../contexts/StartContext';
import rules from '../rules.jpg';


const Start = () => {
    const {setStatus} = useContext(StartContext);

    const handleButtonClick = () => {
        setStatus(true);
    }
    return (
        <div className="start-screen">
            <Button 
            color="white" 
            width="25%" 
            height="50px"
            margin="40px 0 20px 0"
            background-color="blue" 
            text="Start Game"
            onClick={handleButtonClick}/>
            <br/>
            <img alt="oyun-kuralları" src={rules} height="560px" width="90%"/>
        </div>
    )
}

export default Start
