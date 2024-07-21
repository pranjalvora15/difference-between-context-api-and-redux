import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

const BoxB3 = () => {
    const dispatch = useDispatch();
    const countB = useSelector((state) => state.counter.countB);
    console.log('rendering B3')
    return (
        <div className="box">
            {countB}
            <button onClick={() => dispatch(increment('countB'))}>
                Increment B3
            </button>
        </div>
    );
};

export default BoxB3;
