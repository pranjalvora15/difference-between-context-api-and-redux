import { useContext } from 'react';
import { CounterContextB } from './ParentBoxB';

const BoxB = () => {
    console.log('B is rendering');
    const { countB, setCountB } = useContext(CounterContextB);
    return (
        <div className="box">
            {countB}
            <button onClick={() => setCountB(countB + 1)}>Increment B</button>
        </div>
    );
};

export default BoxB;
