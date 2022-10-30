import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        categoryId: 0,
        sort: {
            name: 'Популярности',
            type: 'rating',
        },
        search: '',
    },
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setSort(state, action) {
            state.sort = action.payload
        },
        setSearch(state, action) {
            state.search = action.payload
        }
    }
})

export const {setCategoryId, setSort, setSearch} = filterSlice.actions

export default filterSlice.reducer