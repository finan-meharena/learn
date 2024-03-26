import {createAction, createReducer} from "@reduxjs/toolkit"

const action = createAction("bugUpdated")
// console.log(action({id : 1}));
// console.log(action.type)

// Action types --> we dont need those constants coz we can get them from the creationAction result's type property
// const BUG_ADDED = 'bugAdded';
// const BUG_REMOVED = 'bugRemoved';
// const BUG_RESOLVED = 'bugResolved';

// Actions (use cmd + d to enable multicursor editting)
export const bugAdded = createAction("bugAdded")

export const bugResolved = createAction("bugResolved")

export const bugRemoved = createAction("bugRemoved");

// Reducer
let lastId = 0;

export default createReducer([], {
    // key : value pairs (key = actions, value = functions that handle those actions)
    [bugAdded.type]: (bugs, action) => { // this is mutating code, redux uses immer to apply changes
        bugs.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })
    },
    // bugAdded: (bugs, action) => { // this is mutating code, redux uses immer to apply changes
    //     bugs.push({
    //         id: ++lastId,
    //         description: action.payload.description,
    //         resolved: false
    //     })
    // },
    // dynamically compute action name
    [bugResolved.type]: (bugs, action) =>{
        const index = bugs.findIndex(bug => bug.id === action.payload.id)
        bugs[index].resolved = true;
    },
    // bugResolved: (bugs, action) =>{
    //     const index = bugs.findIndex(bug => bug.id === action.payload.id)
    //     bugs[index].resolved = true;
    // },

})



