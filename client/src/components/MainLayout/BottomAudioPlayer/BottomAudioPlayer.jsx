import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsPlaying } from '../../../store/audioSlice'

function BottomAudioPlayer() {

	const tracks = useSelector(state=>state.audios.data)
	const currentIndex = useSelector(state=>state.audios.indexOfPlaying)
	const isPlaying = useSelector(state=>state.audios.isPlaying)

	const audioRef = useRef()
	const dispatch = useDispatch()

	useEffect(()=>{
		audioRef.current = new Audio(tracks[currentIndex].url)
	}, [currentIndex, tracks])


	const handlePlayPause = ()=>{
		if (isPlaying){
			audioRef.current.pause()
			dispatch(setIsPlaying(false))
		} else {
			audioRef.current.play()
			dispatch(setIsPlaying(true))
		}
	}
	return ( 
		<div onClick={handlePlayPause}>
			Я плейер
		</div>
	);
}

export default BottomAudioPlayer;