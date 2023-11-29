import { useDispatch, useSelector } from 'react-redux'
import {ReactComponent as Play} from '../../../../assets/play.svg'
import {ReactComponent as Pause} from '../../../../assets/pause.svg'
import styles from './AudioItem.module.css'
import { setIndexOfPlaying, setIsPlaying } from '../../../../store/audioSlice'



function AudioItem({selfIndex}) {
	const {tracks, currentIndex, isPlaying} = useSelector(state=> state.audios)
	
	const dispatch = useDispatch()

	const handlePlayPauseClick =() => {
		if (currentIndex!==selfIndex)	{
		dispatch(	setIndexOfPlaying(selfIndex))
		}
		if (isPlaying){
			dispatch(setIsPlaying(false))
		} else {
			dispatch(setIsPlaying(true))
		}
	}
	const boolExpresion = (ifTrue, ifFalse)=>{
		if (currentIndex===selfIndex){
			if (isPlaying){
				return ifTrue
			}else{
				return ifFalse
			}
		}else{
			return ifFalse
		}
	}
	return ( 
		<div className={`${styles.Audio} ${boolExpresion(styles.playing, styles.paused)}` }  >

			{boolExpresion(
							<button onClick={handlePlayPauseClick}>
								<Pause/>
							</button>
							,<button onClick={handlePlayPauseClick}>
								<Play/>
							</button>
							)}

			<p className={styles.filename}>{tracks[selfIndex].filename}</p>
		</div>
	);
}

export default AudioItem;