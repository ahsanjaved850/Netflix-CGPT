import { createSlice } from "@reduxjs/toolkit";

interface configState {
    lang: string
}

const initialState : configState = {
    lang: "en"
}

const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        }
    }
})

export const { changeLanguage } = configSlice.actions

export default configSlice.reducer;