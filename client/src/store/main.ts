import { createStore, combineReducers } from 'redux';

import modeSlice from "../features/navbar/modeSlice";
import githubSlice from "../features/github/githubSlice";

const reducer = combineReducers({
    mode: modeSlice,
    github: githubSlice
});
  
export const store = createStore(reducer);