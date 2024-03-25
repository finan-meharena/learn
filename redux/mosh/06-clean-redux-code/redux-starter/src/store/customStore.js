import reducer from "./reducer";

function createStore(reducer){
    let state = [];
    let listeners = [];

    function getState(){
        return state;
    }

    function subscribe(listener){
        listeners.push(listener);
    }

    function dispatch(action){
        // call the reducer 
        state = reducer(state, action)
        // notify subscribers
        for (let index = 0; index < listeners.length; index++) {
            listeners[index]();
        }
    }

    return {
        subscribe,
        getState,
        dispatch
        
    }
}

export default createStore(reducer);
