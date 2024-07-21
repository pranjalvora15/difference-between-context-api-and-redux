import { useState, createContext, useReducer } from 'react';

import BoxA from './BoxA4';
import BoxC from './BoxC4';
import ParentBoxB from './ParentBoxB';
export const CounterContext = createContext(null);

// function reducer(state, action) {
//   switch(action.type) {
//     case 'Count A':
//       return {...state, countA: state.countA++}
//     case 'Count B':
//       return {...state, countB: state.countB++}
//     case 'Count C':
//       return {...state, countC: state.countC++}
//   }
// }
// const initialState = { countA: 0, countB: 0, countC: 0 }
function ExampleByContextBSeperated() {
    // const [state, dispatch] = useReducer(reducer,initialState )
    const [countA, setCountA] = useState(0);
    
    const [countC, setCountC] = useState(0);
    return (
        <CounterContext.Provider
            value={{ countA, countC, setCountA, setCountC }}
        >
            <h3>Example where container has seperated context</h3>
            <div className="container">
                <BoxA />
                <ParentBoxB/>
                <BoxC />
            </div>
        </CounterContext.Provider>
    );
}

export default ExampleByContextBSeperated;
