import { createSlice } from "@reduxjs/toolkit";

interface ModeState {
    isDark: boolean
  }
  
  const initialState = { isDark: false } as ModeState
  
  const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
      setMode(state, { payload }) {
            state.isDark = payload;
      },
    },
  })
  
  export const { setMode } = modeSlice.actions
  export default modeSlice.reducer