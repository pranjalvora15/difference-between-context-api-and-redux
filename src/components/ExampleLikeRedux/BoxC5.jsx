import { useContext } from 'react';
import { CounterContext } from './ExampleLikeRedux';

const BoxC5 = () => {
    const { countC, setCountC } = useContext(CounterContext);
    console.log('rendering C5');
    return (
        <div className="box">
            {countC}
            <button onClick={() => setCountC(countC + 1)}>Increment C5</button>
        </div>
    );
};

export default BoxC5;
