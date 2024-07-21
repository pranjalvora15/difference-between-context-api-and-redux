import { memo } from 'react';

import HOC from './HOC';
const BoxA5 = ({ countA, setCountA }) => {
    console.log('componenet A5');
    return (
        <div className="box">
            {countA}
            <button onClick={() => setCountA(countA + 1)}>Increment A5</button>
        </div>
    );
};

/*
    first we need to memoize the Box A component by memo() given by react, 
    so when it receives states as props from HOC it will check whether values are
    changed or not if not then Box A will not get re-rendered.
 */
export default HOC(memo(BoxA5), (state) => ({
    countA: state.countA,
    setCountA: state.setCountA,
}));
