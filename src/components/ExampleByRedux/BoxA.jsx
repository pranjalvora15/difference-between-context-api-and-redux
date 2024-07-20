import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

const BoxA = () => {
    const dispatch = useDispatch();
    const countA  = useSelector((state) => state.counter.countA);
    return (
        <div className="box">
            {countA}
            <button onClick={() => dispatch(increment('countA'))}>Increment A</button>
        </div>
    );
};

export default BoxA;
