import { useContext } from 'react';
import { CounterContext } from './ExampleByContext';

const BoxB = () => {
    const { countB, setCountB } = useContext(CounterContext);
    return (
        <div className="box">
            {countB}
            <button onClick={() => setCountB(countB + 1)}>Increment B</button>
        </div>
    );
};

export default BoxB;
