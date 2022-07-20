import { configureStore, combineReducers } from "@reduxjs/toolkit";
import labyrinthSlice from "./labyrinthSlice";

export const store = configureStore({
    reducer: {
        labyrinth: labyrinthSlice,
    },
})