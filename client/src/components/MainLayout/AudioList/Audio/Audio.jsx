import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import AudioControls from "./AudioControls/AudioControls"
import styles from './Audio.module.css'
// import getRandomColor from '../../../../utils/randomColor'
import Scrub from './Scrub/Scrub'
import { useDispatch, useSelector } from 'react-redux'
import { setIndexOfPlaying } from '../../../../store/audioSlice'

function Audio({el, i}) {
	
	const [isPlaying, setIsPlaying] = useState(false)
	const [trackProgress, setTrackProgress] = useState(0);
	const audioRef = useRef(HTMLAudioElement)
	const colorRef = useRef(HTMLElement)
	const intervalRef = useRef();
	console.log()
	const {duration} = audioRef.current

	const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

	const currentIndexOfPlaying = useSelector(state=>state.audios.indexOfPlaying)
	const dispatch = useDispatch(HTMLAudioElement)

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
      dispatch(setIndexOfPlaying(i))
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
	const lengthOfTracks = useSelector(state=>state.audios.data.length)

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

	// Control playing and pasue
	useEffect(()=>{
		if (currentIndexOfPlaying===i ){
			startTimer()
			audioRef.current.play()
			setIsPlaying(true)
			
		}else if(currentIndexOfPlaying===null){
			audioRef.current.pause()
			setIsPlaying(false)
		}
		else{
			audioRef.current.currentTime = 0
			clearInterval(intervalRef.current)
			setTrackProgress(0)
			audioRef.current.pause()
			setIsPlaying(false)
		}
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentIndexOfPlaying])





	const PlayPauseClick =()=>{

		isPlaying 
		? (()=>{
			dispatch(setIndexOfPlaying(null))

		})()	
		: dispatch(setIndexOfPlaying(i))
	}

	
	return (
		<div ref={colorRef} className={`${styles.audioItem} ${isPlaying? styles.playing: styles.paused}`}>
			<p className={styles.filename}>{el.filename}</p>
			<audio key={el} ref={audioRef}	src={el.url}></audio>
			<Scrub 
			duration ={duration} 
			trackProgress={trackProgress}
			onScrub={onScrub}
			onScrubEnd={onScrubEnd}
			style={{ background: trackStyling }}
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

export default Audio;

