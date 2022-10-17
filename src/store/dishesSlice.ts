import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDishes, ITypes} from "../models/dishes.models";


const initialState = {
    dishes: [],
    selectedDish: {} as IDishes,
    selectedType: {} as ITypes,
}


const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        setDishes(state, action) {
            state.dishes = action.payload;
        },
        setSelectedDish(state, action:PayloadAction<IDishes>){
            state.selectedDish = action.payload
        },
        setSelectedType(state, action: PayloadAction<ITypes>){
            state.selectedType = action.payload
        }
    }
})

export const { setDishes, setSelectedDish, setSelectedType} = dishesSlice.actions;
export default dishesSlice.reducer;