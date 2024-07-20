import { useContext } from 'react';
import { CounterContext } from './ExampleByReducerNContext';

const BoxB = ({dispatch}) => {
    const { countB } = useContext(CounterContext);
    return (
        <div className="box">
            {countB}
            <button onClick={() => dispatch('Count B')}>Increment B</button>
        </div>
    );
};

export default BoxB;
