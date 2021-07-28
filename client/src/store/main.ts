import { createStore, combineReducers } from 'redux';

import modeSlice from "../features/navbar/modeSlice";

const reducer = combineReducers({
    mode: modeSlice,
});
  
export const store = createStore(reducer);