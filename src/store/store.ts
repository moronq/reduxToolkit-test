import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./Reducers/CounterSlice";


const rootReducer = combineReducers( {
    counterReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch