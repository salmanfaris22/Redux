import { createStore } from "redux";




function Appreducer(state={input:""},action){
    return {
        ...state,
        input:action.type
        
    }
}

export const store = createStore(Appreducer)