import { useContext } from 'react';
import { CounterContext } from './ExampleByContextBSeperated';

const BoxC4 = () => {
    const { countC, setCountC } = useContext(CounterContext);
    console.log('rendering C4')
    return (
        <div className="box">
            {countC}
            <button onClick={() => setCountC(countC + 1)}>Increment C4</button>
        </div>
    );
};

export default BoxC4;
