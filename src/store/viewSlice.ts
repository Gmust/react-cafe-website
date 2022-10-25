import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    isMain: false,
    isCardSelected: false,
    isBasketOpen: false,
    orderStep: false,
    bookingStep: 1,
    showSuccessOrderPopUp: false
}

const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        setIsMain(state, action: PayloadAction<boolean>) {
            state.isMain = action.payload
        },
        setIsCardSelected(state, action: PayloadAction<boolean>) {
            state.isCardSelected = action.payload
        },
        setIsBasketOpen(state, action: PayloadAction<boolean>) {
            state.isBasketOpen = action.payload
        },
        setOrderStep(state, action: PayloadAction<boolean>) {
            state.orderStep = action.payload;
        },
        setShowSuccessOrderPopUp(state, action: PayloadAction<boolean>) {
            state.showSuccessOrderPopUp = action.payload;
        }
    }
});


export const {
    setIsMain,
    setIsCardSelected,
    setIsBasketOpen,
    setOrderStep,
    setShowSuccessOrderPopUp
} = viewSlice.actions;
export default viewSlice.reducer;