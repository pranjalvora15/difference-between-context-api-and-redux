import { useState, createContext, useReducer } from 'react';

import BoxA from './BoxA1';
import BoxB from './BoxB1';
import BoxC from './BoxC1';

export const CounterContext = createContext(null);

function ExampleByContext() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [countC, setCountC] = useState(0);
    return (
        <CounterContext.Provider
            value={{ countA, countB, countC, setCountA, setCountB, setCountC }}
        >
            <h3>1. Example by context</h3>
            <div className="container">
                <BoxA />
                <BoxB />
                <BoxC />
            </div>
        </CounterContext.Provider>
    );
}

export default ExampleByContext;
