import {combineReducers, configureStore} from "@reduxjs/toolkit";
import viewSlice from "./viewSlice";
import dishesSlice from "./dishesSlice";
import contactsSlice from "./contactsSlice";
import basketSlice from "./basketSlice";
import {mainApi} from "../services/mainApi";
import bookingSlice from "./bookingSlice";
import {bookingApi} from "../services/bookingApi";


const rootReducer = combineReducers({
    view: viewSlice,
    dishes: dishesSlice,
    contacts: contactsSlice,
    basket: basketSlice,
    booking: bookingSlice,
    [mainApi.reducerPath]: mainApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
});


export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
        .concat(mainApi.middleware, bookingApi.middleware)
})


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];