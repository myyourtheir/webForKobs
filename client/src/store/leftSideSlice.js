import { createSlice } from '@reduxjs/toolkit'


const leftSideSlice = createSlice({
	name: 'leftSide',
	initialState:{
		isOpen:false
	},
	reducers:{
		setIsOpen: (state,action)=>{
			state.isOpen = action.payload
		}
	}
})

export default leftSideSlice
export const {setIsOpen} = leftSideSlice.actions