import { useContext } from 'react';
import { CounterContext } from './ExampleByContext';

const BoxA1 = () => {
    let { countA, setCountA } = useContext(CounterContext);
    console.log('rendering A1');
    return (
        <div className="box">
            {countA}
            <button onClick={() => setCountA(countA + 1)}>Increment A1</button>
        </div>
    );
};

export default BoxA1;
