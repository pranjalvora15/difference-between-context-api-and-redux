import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

const BoxB = () => {
    const dispatch = useDispatch();
    const countB = useSelector((state) => state.counter.countB);
    return (
        <div className="box">
            {countB}
            <button onClick={() => dispatch(increment('countB'))}>
                Increment B
            </button>
        </div>
    );
};

export default BoxB;
