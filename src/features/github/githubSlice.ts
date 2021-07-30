import { createSlice } from "@reduxjs/toolkit";

interface GithubState {
    url: string,
    repos_url: string,
    name: string,
    location: string,
    email: string,
    bio: string
  }
  
const initialState = {
    url: "",
    repos_url: "",
    name: "",
    location: "",
    email: "",
    bio: ""
} as GithubState;
  
  const githubSlice = createSlice({
    name: 'github',
    initialState,
      reducers: {
          setGithubData: (state, { payload }) => {
              const { url, repos_url, name, location, email, bio } = payload;
              
            state.url = url;
            state.repos_url = repos_url;
            state.name = name;
            state.location = location;
            state.email = email;
            state.bio = bio;
        }
    },
  })
  
  export const { setGithubData } = githubSlice.actions
  export default githubSlice.reducer