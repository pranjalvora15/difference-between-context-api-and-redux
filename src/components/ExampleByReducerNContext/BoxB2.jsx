import { useContext } from 'react';
import { CounterContext } from './ExampleByReducerNContext';

const BoxB2 = ({dispatch}) => {
    const { countB } = useContext(CounterContext);
    console.log('rendering B2')
    return (
        <div className="box">
            {countB}
            <button onClick={() => dispatch('Count B')}>Increment B2</button>
        </div>
    );
};

export default BoxB2;
