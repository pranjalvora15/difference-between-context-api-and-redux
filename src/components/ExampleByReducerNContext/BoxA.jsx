import { useContext } from 'react';
import { CounterContext } from './ExampleByReducerNContext';

const BoxA = ({ dispatch }) => {
    let countA = useContext(CounterContext);
    console.log(countA);
    return (
        <div className="box">
            {countA.countA}
            <button onClick={() => dispatch('Count A')}>Increment A</button>
        </div>
    );
};

export default BoxA;
