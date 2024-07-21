import { createContext, useState } from 'react';
import BoxB from './BoxB4';

export const CounterContextB = createContext(null);

const ParentBoxB = () => {
    const [countB, setCountB] = useState(0);
    return (
        <CounterContextB.Provider value={{ countB, setCountB }}>
            <BoxB />
        </CounterContextB.Provider>
    );
};

export default ParentBoxB;
