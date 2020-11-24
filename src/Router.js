import React, { useContext } from 'react';
import StartContext from './contexts/StartContext';
import Gameboard from './screens/Gameboard';
import Start from './screens/Start';

const Router = () => {
    const {status} = useContext(StartContext);

    return (
        <div>
            {!status && <Start/>}
            {status && <Gameboard/>}
        </div>
    )
}

export default Router
