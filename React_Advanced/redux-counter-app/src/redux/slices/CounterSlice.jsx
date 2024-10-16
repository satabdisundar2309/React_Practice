import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
}
export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment : (state)=>{
            state.value += 1;
        },
        decrement : (state)=>{
            state.value -= 1;
        }
    }
})

// the createSlice function gives two things that are reducer functions and action creator

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;