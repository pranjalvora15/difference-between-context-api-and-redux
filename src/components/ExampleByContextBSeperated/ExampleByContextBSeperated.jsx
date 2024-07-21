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
            <h3>4. Example where container has seperated context</h3>
            <p>
                To achieve redux like behaviour we have to build a whole new
                different context for all the boxes. For showing demo I have
                just created a different context for box B only. If you increase
                count B4 you can observe only box B will get re-rendered,
                increasing count B4 will not cause re-rendering of box A4 and
                C4. But this approach is hard to follow so, you can consider
                last example (example 5) where similar behaviour like redux is
                achieved with the help of custom hook{' '}
                <b>useSelector and higher order component</b>
            </p>
            <div className="container">
                <BoxA />
                <ParentBoxB />
                <BoxC />
            </div>
        </CounterContext.Provider>
    );
}

export default ExampleByContextBSeperated;
