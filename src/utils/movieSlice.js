import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.popularMovie=action.payload
        },
    }
})

export default movieSlice.reducer;

export const {addNowPlayingMovie,addTrailerVideo,addPopularMovie} = movieSlice.actions