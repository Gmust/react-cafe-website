import {combineReducers, configureStore} from "@reduxjs/toolkit";
import viewSlice from "./viewSlice";
import dishesSlice from "./dishesSlice";
import contactsSlice from "./contactsSlice";
import basketSlice from "./basketSlice";
import {mainApi} from "../services/mainApi";


const rootReducer = combineReducers({
    view: viewSlice,
    dishes: dishesSlice,
    contacts: contactsSlice,
    basket: basketSlice,
    [mainApi.reducerPath]: mainApi.reducer,

});


export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware)
})


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];