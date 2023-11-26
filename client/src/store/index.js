import {combineReducers, configureStore} from '@reduxjs/toolkit'
import audioSlice from './audioSlice'
import leftSideSlice from './leftSideSlice'

const reducers = combineReducers({
	audios: audioSlice.reducer,
	leftSide: leftSideSlice.reducer
})
export default configureStore({
	reducer:reducers,
})