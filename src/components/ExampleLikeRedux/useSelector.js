import { useContext, useMemo } from "react"
import { CounterContext } from "./ExampleLikeRedux"
const useSelector = (stateSelector) => {
    const state = useContext(CounterContext)
    const selectedState = useMemo(()=>stateSelector(state),[state,stateSelector])
    return selectedState
}

export default useSelector;