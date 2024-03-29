import {createSlice} from "@reduxjs/toolkit"

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


