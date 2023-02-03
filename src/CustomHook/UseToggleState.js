// ./CustomHook/useToggleState.js
import { useState } from "react";

function useToggleState(impToggleState, impDesiredTogState) {
    const [toggleState, setToggleState] = useState(impToggleState);
    const [desiredTogState, setDesiredTogState] = useState(impDesiredTogState)    
    if (typeof desiredTogState === 'boolean' && desiredTogState !== null) {
        setToggleStatus(desiredTogState);
    } else {
        if (typeof toggleState === 'boolean' && toggleState !== null) {
            setToggleStatus(!toggleState);
        } else {
            alert("No toggle state provided");
        }
    }
    console.log(toggleState);
    return (
        toggleState
    )
}

export default useToggleState