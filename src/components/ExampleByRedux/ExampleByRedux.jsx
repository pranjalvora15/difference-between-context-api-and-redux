import { store } from './store';
import { Provider } from 'react-redux';
import BoxA from './BoxA3';
import BoxB from './BoxB3';
import BoxC from './BoxC3';
const ExampleByRedux = () => {
    return (
        <Provider store={store}>
            <h3>3. Example by Redux toolkit</h3>
            <p>
                In this example, when you increase A3, only box A will get
                re-rendered. Similarly you increase B3, only box B will get
                re-rendered and increase C3, only box C will get re-rendered{' '}
            </p>
            <div className="container">
                <BoxA />
                <BoxB />
                <BoxC />
            </div>
        </Provider>
    );
};

export default ExampleByRedux;
