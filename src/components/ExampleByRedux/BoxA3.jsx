import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

const BoxA3 = () => {
    const dispatch = useDispatch();
    const countA  = useSelector((state) => state.counter.countA);
    console.log('rendering A3')
    return (
        <div className="box">
            {countA}
            <button onClick={() => dispatch(increment('countA'))}>Increment A3</button>
        </div>
    );
};

export default BoxA3;
