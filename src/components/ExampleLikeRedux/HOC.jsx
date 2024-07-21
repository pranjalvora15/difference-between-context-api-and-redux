import useSelector from './useSelector';

const HOC = (Component, stateSelector) => {
    console.log('HOC');
    return (props) => {
        const selectedState = useSelector(stateSelector);
        return (
            <div style={{ padding: '20px' }}>
                <Component {...selectedState} {...props} />
            </div>
        );
    };
};

export default HOC;
