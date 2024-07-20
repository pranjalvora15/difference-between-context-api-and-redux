import { useContext } from 'react';
import { CounterContext } from './ExampleByReducerNContext';

const BoxC = ({ dispatch }) => {
    const { countC } = useContext(CounterContext);
    return (
        <div className="box">
            {countC}
            <button onClick={() => dispatch('Count C')}>Increment C</button>
        </div>
    );
};

export default BoxC;
