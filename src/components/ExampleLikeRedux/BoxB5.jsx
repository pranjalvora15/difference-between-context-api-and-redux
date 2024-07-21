import { useContext } from 'react';
import { CounterContext } from './ExampleLikeRedux';

const BoxB5 = () => {
    const { countB, setCountB } = useContext(CounterContext);
    console.log('rendering B5')
    return (
        <div className="box">
            {countB}
            <button onClick={() => setCountB(countB + 1)}>Increment B5</button>
        </div>
    );
};

export default BoxB5;
