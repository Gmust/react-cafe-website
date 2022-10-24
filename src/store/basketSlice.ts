import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDishes} from "../models/dishes.models";


const initialState = {
    basketItems: [] as any,
    amount: 0,
    totalPrice: 0
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setItemInBasket(state, action: PayloadAction<IDishes>) {
            const {id} = action.payload;
            const hasItem = state.basketItems.findIndex(
                (item: IDishes) => item.id === id
            );
            if (hasItem === -1) {
                state.basketItems.push(action.payload)
            }
        },
        deleteItemFromBasket(state, action: PayloadAction<number>) {
            const itemId = action.payload;
            state.basketItems = state.basketItems.filter((item: IDishes) => item.id !== itemId)
        },
        increase(state, action: PayloadAction<any>) {
            const basketItem = state.basketItems.find((item: IDishes) => item.id === action.payload)
            basketItem.dishesAmount++
        },
        decrease(state, action: PayloadAction<any>) {
            const basketItem = state.basketItems.find((item: IDishes) => item.id === action.payload);
            basketItem.dishesAmount <= 1 ? basketItem.dishesAmount = 1: basketItem.dishesAmount--
        },
        calculateTotalPrice(state) {
            let total = 0;
            let amount = 0;
            state.basketItems.forEach((item: IDishes) => {
                amount += Number(item.dishesAmount)
                total += Number(item.dish.price * item.dishesAmount);
            });
            state.totalPrice = total;
            state.amount = amount;
        },
        clearBasket(state) {
            state.basketItems = [];
        }
    }
})

export const {
    setItemInBasket,
    deleteItemFromBasket,
    calculateTotalPrice,
    clearBasket,
    increase,
    decrease
} = basketSlice.actions;
export default basketSlice.reducer;