import {createSlice} from "@reduxjs/toolkit"
import {createSelector} from 'reselect'
// Reducer
let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {

        assingBugToUser : (bugs, action) => {
            const {bugId, userId} = action.payload;
            const index = bugs.findIndex(bug => bug.id === bugId)
            bugs[index].userId = userId;
        },
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
export const {bugAdded, bugResolved, assingBugToUser} = slice.actions
export default slice.reducer;

// selectors
// export const getUnreslovedBugs = state => state.entities.bugs.filter(bug => !bug.resolved)

// Memoization (memoiz the selector to increase preformance)
export const getUnresolvedBugs = createSelector( // takes a list of input selectors and a 
                                                //function that calculates the value based on the input selectors
    state => state.entities.bugs, //
    bugs => bugs.filter(bug => !bug.resolved)
)

export const getBugsByUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
)


