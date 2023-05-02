import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IVideo } from '../../interface/IVideo'
import { getVideosApi } from '../../http/HttpVIdeos'

export interface VideoSlice {
  videos: IVideo[]
}

const initialState: VideoSlice = {
  videos : []
}

export const slice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    getVideos: (state  ) => {
      const videosApi = getVideosApi();
      state.videos = videosApi
    },
    addVideos: (state, action: PayloadAction<IVideo>) => {
      state.videos.push(action.payload); 
    },
  },
})

// Action creators are generated for each case reducer function
export const {  getVideos, addVideos } = slice.actions

export default slice.reducer