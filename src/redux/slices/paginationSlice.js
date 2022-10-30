import {createSlice} from '@reduxjs/toolkit'

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        total: 3,
        curr: 1,
    },
    reducers: {
        setTotalPage(state, action) {
            state.total = action.payload
        },
        setCurrPage(state, action) {
            state.curr = action.payload
        }
    }
})

export const {setTotalPage, setCurrPage} = paginationSlice.actions

export default paginationSlice.reducer