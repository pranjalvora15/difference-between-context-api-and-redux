import { useState, createContext } from 'react';

import BoxA from './BoxA5';
import BoxB from './BoxB5';
import BoxC from './BoxC5';

export const CounterContext = createContext(null);

function ExampleLikeRedux() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [countC, setCountC] = useState(0);
    return (
        <CounterContext.Provider
            value={{ countA, countB, countC, setCountA, setCountB, setCountC }}
        >
            <h3>Example Like Redux</h3>
            <p>
                In this example we have try to achieve what redux does i.e. a
                component shall not re-rendered if the component subscribed to
                state is updated. Here you can see that Box A5 is little bit
                down compared to all other boxes as I have added padding of 20px
                to HOC component (to refer code click{' '}
                <a href="https://codesandbox.io/p/devbox/difference-between-context-api-and-redux-toolkit-vs5vmm">
                    here
                </a>
                ), I added padding because when you have checked the
                &quot;Highlight updates when components render.&quot; in
                devtools, Box A5 appears to be re-rendered when you increase
                count of B5 and C5 but in case it is not, so to avoid confusion
                I have added padding and console logs also to see the which
                components are re-rendering when you update count.
            </p>
            <div className="container">
                <BoxA />
                <BoxB />
                <BoxC />
            </div>
        </CounterContext.Provider>
    );
}

export default ExampleLikeRedux;
