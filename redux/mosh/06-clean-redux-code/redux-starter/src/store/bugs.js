import {createAction} from "@reduxjs/toolkit"

const action = createAction("bugUpdated")
// console.log(action({id : 1}));
// console.log(action.type)

// Action types --> we dont need those constants coz we can get them fromteh creationAction result's type property
// const BUG_ADDED = 'bugAdded';
// const BUG_REMOVED = 'bugRemoved';
// const BUG_RESOLVED = 'bugResolved';

// Actions (use cmd + d to enable multicursor editting)
export const bugAdded = createAction("bugAdded")

export const bugResolved = createAction("bugResolved")

export const bugRemoved = createAction("bugRemoved");

// Reducer
let lastId = 0;

function reducer (state =  [], action){

    switch (action.type) {
        case bugAdded.type:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case bugRemoved.type:
            return state.filter(bug => bug.id !== action.payload.id);
        case bugResolved.type:
            return state.map(bug => bug.id === action.payload.id ? (
                {...bug, resolved: true}
            ) : bug);
            
        default:
            return state;
    }
}

export default reducer;


