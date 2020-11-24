import React from 'react';

const StartContext = React.createContext({
    status: false,
    setStatus: () => {},
});

export default StartContext;