import React from 'react';

const fakeFunction: any = () => {
    return 'somethingGoWrong';
}

export const HandlersContext = React.createContext(fakeFunction);
export const IndexContext = React.createContext(0);