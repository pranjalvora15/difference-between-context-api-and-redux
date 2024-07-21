import ExampleByContext from './components/ExampleByContext/ExampleByContext';
import './App.css';
import ExampleByRedux from './components/ExampleByRedux/ExampleByRedux';
import ExampleByContextBSeperated from './components/ExampleByContextBSeperated/ExampleByContextBSeperated';
import ExampleByReducerNContext from './components/ExampleByReducerNContext/ExampleByReducerNContext';
import ExampleLikeRedux from './components/ExampleLikeRedux/ExampleLikeRedux';
const App = () => {
    return (
        <div className="app">
            <p>
                <b>Note:</b> To see the rendering of the boxes please install
                the react devtools from chrome browser, then open Components
                section in the inspect(Command+Option+i or Ctrl+Shift+C or right
                click &gt; inspect) and click on settings icon, then check the
                &quot;Highlight updates when components render.&quot;. Also
                console log are added in each component in case anyone want to
                see which components are re-rendering. To see code click on
                <a href='https://codesandbox.io/p/devbox/difference-between-context-api-and-redux-toolkit-vs5vmm' target='_blank'> code sandbox link</a> or{' '}
                <a href="https://github.com/pranjalvora15/difference-between-context-api-and-redux" target='_blank'>
                    github repo link
                </a>
            </p>
            <p>
                What is difference between context API and redux or redux
                toolkit?
            </p>
            <p style={{ paddingLeft: '10px' }}>
                There are many differences between context API and redux or
                redux toolkit but the main difference between two is: When we
                use context API then all the components under that context
                re-renders on updating any value in the context even if a
                component is not consuming that particular state from provider
                where as on other side when we use redux then only the component
                which is subscribed to particular state is re-rendered on the
                change of that state rest of the all components does not
                re-rendered.
            </p>
            <ExampleByContext />
            <ExampleByReducerNContext />
            <ExampleByRedux />
            <ExampleByContextBSeperated />
            <ExampleLikeRedux />
        </div>
    );
};

export default App;
