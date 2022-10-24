import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    isMain: false,
    isCardSelected: false,
    isBasketOpen: false,
    bookingStep: 1
}

const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        setIsMain(state,action:PayloadAction<boolean>) {
                state.isMain = action.payload
        },
        setIsCardSelected(state,action:PayloadAction<boolean>){
            state.isCardSelected = action.payload
        },
        setIsBasketOpen(state, action: PayloadAction<boolean>){
            state.isBasketOpen = action.payload
        }
    }
});


export const {setIsMain,setIsCardSelected,setIsBasketOpen} = viewSlice.actions;
export default viewSlice.reducer;