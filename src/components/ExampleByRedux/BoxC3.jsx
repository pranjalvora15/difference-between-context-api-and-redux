import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';


const BoxC3 = () => {
    const dispatch = useDispatch();
    const  countC = useSelector((state) => state.counter.countC);
    console.log('rendering C3')
    return (
        <div className="box">
            {countC}
            <button onClick={() => dispatch(increment('countC'))}>Increment C3</button>
        </div>
    );
};

export default BoxC3;
