import { useContext } from 'react';
import { CounterContext } from './ExampleByReducerNContext';

const BoxA2 = ({ dispatch }) => {
    let countA = useContext(CounterContext);
    console.log('rendering A2');
    return (
        <div className="box">
            {countA.countA}
            <button onClick={() => dispatch('Count A')}>Increment A2</button>
        </div>
    );
};

export default BoxA2;
