import { store } from './store';
import { Provider } from 'react-redux';
import BoxA from './BoxA';
import BoxB from './BoxB';
import BoxC from './BoxC';
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
