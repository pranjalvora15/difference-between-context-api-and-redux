import { useState, createContext, useReducer } from 'react';

import BoxA from './BoxA2';
import BoxB from './BoxB2';
import BoxC from './BoxC2';

export const CounterContext = createContext(null);

function reducer(state, action) {
    switch (action) {
        case 'Count A':
            return { ...state, countA: state.countA++ };
        case 'Count B':
            return { ...state, countB: state.countB++ };
        case 'Count C':
            return { ...state, countC: state.countC++ };
    }
}
const initialState = { countA: 0, countB: 0, countC: 0 };
function ExampleByReducerNContext() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CounterContext.Provider value={state}>
            <h3>Example by Reducer and Context</h3>
            <div className="container">
                <BoxA dispatch={dispatch} />
                <BoxB dispatch={dispatch} />
                <BoxC dispatch={dispatch} />
            </div>
        </CounterContext.Provider>
    );
}

export default ExampleByReducerNContext;
