import { useContext } from 'react';
import { CounterContext } from './ExampleByReducerNContext';

const BoxC2 = ({ dispatch }) => {
    const { countC } = useContext(CounterContext);
    console.log('rendering C2')
    return (
        <div className="box">
            {countC}
            <button onClick={() => dispatch('Count C')}>Increment C2</button>
        </div>
    );
};

export default BoxC2;
