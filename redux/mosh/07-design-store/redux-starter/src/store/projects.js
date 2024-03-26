import {createSlice} from "@reduxjs/toolkit"




// Reducer
let lastId = 0;

const slice = createSlice({
    initialState: [],
    name: "projects",
    reducers: {
        projectAdded : (projects, action) => {
            projects.push({
                id : ++lastId,
                name : action.payload.name
            })
        }
    }
})

// const slice = createSlice({
//     name: 'projects',
//     initialState: [],
//     reducers: {
//         projectAdded : (bugs, action) => {
//             bugs.push({
//                 id: ++lastId,
//                 name: action.payload.name,
                
//             })
//         }, 
//     }
// })
console.log(slice.actions)
export const {projectAdded} = slice.actions
export default slice.reducer;