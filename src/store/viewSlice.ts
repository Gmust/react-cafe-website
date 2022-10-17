import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    isMain: false,
    isCardSelected: false
}

const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        setIsMain(state,action:PayloadAction<boolean>) {
                state.isMain = action.payload;
        },
        setIsCardSelected(state,action:PayloadAction<boolean>){
            state.isCardSelected = action.payload
        }
    }
});


export const {setIsMain,setIsCardSelected} = viewSlice.actions;
export default viewSlice.reducer;