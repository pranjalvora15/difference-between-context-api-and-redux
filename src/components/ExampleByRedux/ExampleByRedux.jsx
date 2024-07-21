import { store } from './store';
import { Provider } from 'react-redux';
import BoxA from './BoxA3';
import BoxB from './BoxB3';
import BoxC from './BoxC3';
const ExampleByRedux = () => {
    return (
        <Provider store={store}>
            <h3>Example by Redux toolkit</h3>
            <div className="container">
                <BoxA />
                <BoxB />
                <BoxC />
            </div>
        </Provider>
    );
};

export default ExampleByRedux;
