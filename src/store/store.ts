import {combineReducers, configureStore} from "@reduxjs/toolkit";
import viewSlice from "./viewSlice";
import dishesSlice from "./dishesSlice";
import {dishesApi} from "../services/dishesApi";


const rootReducer = combineReducers({
    view: viewSlice,
    dishes: dishesSlice,
    [dishesApi.reducerPath]: dishesApi.reducer
});


export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dishesApi.middleware)
})


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];