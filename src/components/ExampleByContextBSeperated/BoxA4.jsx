import { useContext } from 'react';
import { CounterContext } from './ExampleByContextBSeperated';

const BoxA4 = () => {
    let { countA, setCountA } = useContext(CounterContext);
    console.log('rendering A4');
    return (
        <div className="box">
            {countA}
            <button onClick={() => setCountA(countA + 1)}>Increment A4</button>
        </div>
    );
};

export default BoxA4;
