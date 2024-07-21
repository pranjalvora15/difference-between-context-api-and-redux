import { useContext } from 'react';
import { CounterContext } from './ExampleByContext';

const BoxC1 = () => {
    const { countC, setCountC } = useContext(CounterContext);
    console.log('rendering C1');
    return (
        <div className="box">
            {countC}
            <button onClick={() => setCountC(countC + 1)}>Increment C1</button>
        </div>
    );
};

export default BoxC1;
