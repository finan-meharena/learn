import {createSlice} from "@reduxjs/toolkit"
import {createSelector} from 'reselect'
// Reducer
let lastId = 0;

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        userAdded : (users, action) => {
            users.push({
                id: ++lastId,
                name: action.payload.name,
                bugs : [],
            })
        }, 
    }
})

export const {userAdded} = slice.actions
export default slice.reducer;

// selectors
// export const getUnreslovedBugs = state => state.entities.bugs.filter(bug => !bug.resolved)

// Memoization (memoiz the selector to increase preformance)
export const getAssignedBugs = createSelector( // takes a list of input selectors and a 
                                                //function that calculates the value based on the input selectors
    state => state.entities.bugs, //
    bugs => bugs.filter(bug => !bug.resolved)
)



