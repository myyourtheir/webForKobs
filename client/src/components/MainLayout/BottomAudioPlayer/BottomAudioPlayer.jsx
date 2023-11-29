/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIndexOfPlaying, setIsPlaying } from '../../../store/audioSlice'
import AudioControls from './AudioControls/AudioControls'
import styles from './BottomAudioPlayer.module.css'

function BottomAudioPlayer() {
	const [trackProgress, setTrackProgress] = useState(0)
	const {tracks, currentIndex , isPlaying} = useSelector(state=>state.audios)
	const audioRef = useRef(new Audio(tracks[currentIndex].url))
	const intervalRef = useRef();
	const [isReady, setIsReady] = useState(false);
	const dispatch = useDispatch()

	const {duration} = audioRef.current

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
			startTimer()
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying])
	
	useEffect(() => {
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		}
	}, []);

	useEffect(() => {
		audioRef.current.pause();
	
		audioRef.current = new Audio(tracks[currentIndex].url);
		setTrackProgress(audioRef.current.currentTime);
	
		if (isReady) {
			audioRef.current.play();
				if (!isPlaying){
					dispatch(setIsPlaying(true))
				}
			startTimer();
		} else {
			setIsReady(true);
		}
	}, [currentIndex]);

	const startTimer = () => {
	clearInterval(intervalRef.current);

	intervalRef.current = setInterval(() => {
		if (audioRef.current.ended) {
			handleNextClick();
		} else {
			setTrackProgress(audioRef.current.currentTime);
		}
	}, [1000]);
	}

	const handleNextClick = () =>{
		if (currentIndex < tracks.length - 1) {
			dispatch(setIndexOfPlaying(currentIndex+1));
		} else {
			dispatch(setIndexOfPlaying(0));
		}
	}

	const handlePrevClick = ()=>{
		if (currentIndex - 1 < 0) {
			dispatch(setIndexOfPlaying(tracks.length - 1));
		} else {
			dispatch(setIndexOfPlaying(currentIndex - 1));
		}
	}

	const handlePlayPauseClick = ()=>{
		if (isPlaying){
			dispatch(setIsPlaying(false))
		} else {
			dispatch(setIsPlaying(true))
		}
	}

	const onScrub = (value) => {
		// Clear any timers already running
		clearInterval(intervalRef.current);
		audioRef.current.currentTime = value;
		setTrackProgress(audioRef.current.currentTime);
	}
	
	const onScrubEnd = () => {
		// If not already playing, start
		if (!isPlaying) {
			dispatch(setIsPlaying(true));
		}
		startTimer();
	}


	return ( 
		<div className={styles.player}>
			<p className={styles.text}>
				{tracks[currentIndex].filename}
			</p>
			<AudioControls 
				handlePlayPauseClick = {handlePlayPauseClick}
				handleNextClick = {handleNextClick}
				handlePrevClick = {handlePrevClick}
			/>
			<input
				type="range"
				value={trackProgress}
				step="1"
				min="0"
				max={duration ? duration : `${duration}`}
				className={styles.progress}
				onChange={(e) => onScrub(e.target.value)}
				onMouseUp={onScrubEnd}
				onKeyUp={onScrubEnd}
		/>

		</div>
	);
}

export default BottomAudioPlayer;