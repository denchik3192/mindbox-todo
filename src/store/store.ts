import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./reducers/toDoSlice";
import { useDispatch } from "react-redux";
import filterSlice from "./reducers/filterSlice";

export const store = configureStore({
    reducer: {
        todos: toDoSlice,
        filter: filterSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

