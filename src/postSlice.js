import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
const initialState = { 
  postList: [] ,
  fetchingPost:false,
  errorMessage: null
 }
 export const fetchPosts = createAsyncThunk('post/fetch' , async () =>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    return data ; 
 })
const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: {
      [fetchPosts.fulfilled] :(state,action) =>{
        state.postList = action.payload
        state.fetchingPost=false;
      },
      [fetchPosts.pending]:(state)=>{
        state.fetchPosts = true ; 
      },
      [fetchPosts.rejected]: (state)=>{
        state.fetchingPosts = false;
        state.errorMessage=('help error')
      }
  }
})
 
export default postSlice.reducer;