import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../utils/instance'

export const getAudio = createAsyncThunk(
	'audio/getAudio',
	async (d,{rejectWithValue})=>{
		try{
			const resp = await instance.get(d.api)
			
			if (!resp.status===200){
				throw new Error(resp.message)
			}

			return resp.data
		}catch (e){
			return rejectWithValue(e.response.data.message)
		}
	}
)

 const audioSlice = createSlice({
	name: 'audio',
	initialState:{
		isLoading: true,
		tracks: null,
		error: null,
		currentIndex: 0,
		isPlaying: false,
	},
	reducers:{
		setIndexOfPlaying:(state,action)=>{
			state.currentIndex = action.payload
		},
		setIsPlaying:(state,action)=>{
			state.isPlaying = action.payload
		}
	},
	extraReducers:(builder)=>{
		builder.addCase(getAudio.pending, (state)=>{
			state.isLoading=true
		})
		builder.addCase(getAudio.fulfilled, (state,action)=>{
			state.isLoading=false
			state.tracks=action.payload
			state.error = null
		})
		builder.addCase(getAudio.rejected, (state,action)=>{
			state.isLoading=false
			state.error=action.payload
		})
	}
})
export const {setIndexOfPlaying, setIsPlaying} = audioSlice.actions
export default audioSlice
