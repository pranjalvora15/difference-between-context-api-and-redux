import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';


const BoxC = () => {
    const dispatch = useDispatch();
    const  countC = useSelector((state) => state.counter.countC);
    return (
        <div className="box">
            {countC}
            <button onClick={() => dispatch(increment('countC'))}>Increment C</button>
        </div>
    );
};

export default BoxC;
