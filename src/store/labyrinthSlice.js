import { createSlice } from '@reduxjs/toolkit';
import setStartCell from '../utils/setStartCell';


const initialState = {
    startCell: setStartCell(),
    stepsArr: [],
    isBlockClick: false,
    result: null
}

export const labyrinthSlice = createSlice({
    name: 'labyrinth',
    initialState,
    reducers: {
        setStart: (state) => {
            state.startCell = setStartCell()
        },
        setSteps: (state, action) => {
            state.stepsArr = action.payload
        },
        blockClick: (state, action) => {
            state.isBlockClick = action.payload
        },
        setResult: (state, action) => {
            state.result = action.payload
        },
    }
})

export const { setStart, setSteps, blockClick, setResult } = labyrinthSlice.actions;
export default labyrinthSlice.reducer