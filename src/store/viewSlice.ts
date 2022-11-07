import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    isMain: false,
    isCardSelected: false,
    isBasketOpen: false,
    orderStep: false,
    bookingStep: 1,
    showSuccessOrderPopUp: false,
    showSuccessBookingPopUp: false,
    emailOrTel: 'tel',
    showBookingConfirm: false,
    isDateEmpty: false
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
        },
        setShowSuccessBookingPopUp(state, action: PayloadAction<boolean>) {
            state.showSuccessBookingPopUp = action.payload;
        },
        setContactWay(state, action: PayloadAction<string>){
            state.emailOrTel = action.payload
        },
        setShowBookingConfirm(state,action:PayloadAction<boolean>){
            state.showBookingConfirm = action.payload
        },
        setDateIsEmpty(state,action:PayloadAction<boolean>){
            state.isDateEmpty = action.payload
        }
    }
});


export const {
    setIsMain,
    setIsCardSelected,
    setIsBasketOpen,
    setOrderStep,
    setShowSuccessOrderPopUp,
    setContactWay,
    setShowBookingConfirm,
    setDateIsEmpty,
    setShowSuccessBookingPopUp
} = viewSlice.actions;
export default viewSlice.reducer;