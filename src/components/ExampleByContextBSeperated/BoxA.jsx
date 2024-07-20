import { useContext } from 'react';
import { CounterContext } from './ExampleByContextBSeperated';

const BoxA = () => {
    let { countA, setCountA } = useContext(CounterContext);
    console.log('rendering A');
    return (
        <div className="box">
            {countA}
            <button onClick={() => setCountA(countA + 1)}>Increment A</button>
        </div>
    );
};

export default BoxA;
