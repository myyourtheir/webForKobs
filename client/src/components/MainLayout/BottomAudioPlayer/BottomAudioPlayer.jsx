import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import AudioControls from "./AudioControls/AudioControls"
import styles from './bottomAudioPlayer.module.css'
// import getRandomColor from '../../../../utils/randomColor'
import Scrub from './Scrub/Scrub'
import { useDispatch, useSelector } from 'react-redux'
import { setIndexOfPlaying, setIsPlaying } from '../../../store/audioSlice'


function BottomAudioPlayer() {
	// const [isPlaying, setIsPlaying] = useState(false)
	const [trackProgress, setTrackProgress] = useState(0);
	const audioRef = useRef(HTMLAudioElement)
	const colorRef = useRef(HTMLElement)
	const intervalRef = useRef();
	const {duration} = audioRef.current

	const isPlaying = useSelector(state => state.audios.isPlaying)

	const i = useSelector(state=>state.audios.indexOfPlaying)
	const audios = useSelector(state=>state.audios.data)
	const currentAudio = audios[i]
	const lengthOfTracks =audios.length
	const dispatch = useDispatch()
	const setIsPlaying = (bool)=> dispatch(setIsPlaying(bool))
	useEffect(()=>{
		colorRef.current.style.setProperty('--active-color', '#481986')

	}, [])
	// Control scrubbing

	const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

	const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      audioRef.current.play()
			setIsPlaying(true)
    }
    startTimer();
  };

	const startTimer = () => {
   
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current?.ended) {
        onNextTrack();
      } else {
        setTrackProgress(audioRef.current?.currentTime);
      }
    }, [1000]);
  }

	// Control next and prev track

	useEffect(()=>{
		i!==null
		? audioRef.current.play()
		: setIsPlaying(false)
	}, [i])

	const onNextTrack = ()=>{
		
		dispatch(setIndexOfPlaying(
			i<lengthOfTracks-1
			? i+1
			: 0
			))
	}

	const onPrevTrack = ()=>{
		
		dispatch(setIndexOfPlaying(
			i-1<0
			? lengthOfTracks-1
			: i-1
		))
		
	}

	const PlayPauseClick =()=>{

		isPlaying
		? (()=>{
			audioRef.current.pause()
			setIsPlaying(false)}
			
			)()
		: (()=>{
			audioRef.current.play()
			setIsPlaying(true)
			startTimer()}
			)()
	}

	
	return (
		<div ref={colorRef} className={`${styles.audioItem} ${isPlaying? styles.playing: styles.paused}`}>
			
			<p className={styles.filename}>{currentAudio?.filename}</p>
			<audio ref={audioRef}	src={currentAudio?.url}></audio>
			<Scrub 
			duration ={duration} 
			trackProgress={trackProgress}
			onScrub={onScrub}
			onScrubEnd={onScrubEnd}
			/>
			
			<AudioControls 
			isPlaying={isPlaying} 
			onPlayPauseClick={PlayPauseClick} 
			onPrevTrack={onPrevTrack}
			onNextTrack={onNextTrack}
			/>
			
		</div> 
	);
}

export default BottomAudioPlayer;

