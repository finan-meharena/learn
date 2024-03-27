import {createSlice} from "@reduxjs/toolkit"
import {createSelector} from 'reselect'
// Reducer
let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded : (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        }, 
        bugResolved : (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs[index].resolved = true;
        }
    }
})
export const {bugAdded, bugResolved} = slice.actions
export default slice.reducer;

// selectors
// export const getUnreslovedBugs = state => state.entities.bugs.filter(bug => !bug.resolved)

// Memoization (memoiz the selector to increase preformance)
export const getUnresolvedBugs = createSelector( // takes a list of input selectors and a 
                                                //function that calculates the value based on the input selectors
    state => state.entities.bugs, //
    bugs => bugs.filter(bug => !bug.resolved)
)


