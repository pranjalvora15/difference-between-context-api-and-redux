import { useContext } from 'react';
import { CounterContextB } from './ParentBoxB';

const BoxB4 = () => {
    const { countB, setCountB } = useContext(CounterContextB);
    console.log('rendering B4');
    return (
        <div className="box">
            {countB}
            <button onClick={() => setCountB(countB + 1)}>Increment B4</button>
        </div>
    );
};

export default BoxB4;
