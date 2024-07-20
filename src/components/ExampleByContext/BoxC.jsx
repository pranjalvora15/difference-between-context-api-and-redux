import { useContext } from 'react';
import { CounterContext } from './ExampleByContext';

const BoxC = () => {
    const { countC, setCountC } = useContext(CounterContext);
    return (
        <div className="box">
            {countC}
            <button onClick={() => setCountC(countC + 1)}>Increment C</button>
        </div>
    );
};

export default BoxC;
