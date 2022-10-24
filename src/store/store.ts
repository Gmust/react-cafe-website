import {combineReducers, configureStore} from "@reduxjs/toolkit";
import viewSlice from "./viewSlice";
import dishesSlice from "./dishesSlice";
import contactsSlice from "./contactsSlice";
import {dishesApi} from "../services/dishesApi";
import {contactsApi} from "../services/contactsApi";
import basketSlice from "./basketSlice";


const rootReducer = combineReducers({
    view: viewSlice,
    dishes: dishesSlice,
    contacts: contactsSlice,
    basket: basketSlice,
    [dishesApi.reducerPath]: dishesApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
});


export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dishesApi.middleware)
})


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];