import { useContext } from 'react';
import { CounterContext } from './ExampleByContext';

const BoxB1 = () => {
    const { countB, setCountB } = useContext(CounterContext);
    console.log('rendering B1')
    return (
        <div className="box">
            {countB}
            <button onClick={() => setCountB(countB + 1)}>Increment B1</button>
        </div>
    );
};

export default BoxB1;
