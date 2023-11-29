import {ReactComponent as Next} from '../../../../assets/next.svg'
import {ReactComponent as Prev} from '../../../../assets/prev.svg'
import {ReactComponent as Play} from '../../../../assets/play.svg'
import {ReactComponent as Pause} from '../../../../assets/pause.svg'
import styles from "./AudioControls.module.css"
import { useSelector } from 'react-redux'


function AudioControls({handlePlayPauseClick, handleNextClick, handlePrevClick}) {
	const isPlaying = useSelector(state=>state.audios.isPlaying)
	return ( 
		<div className={styles.AudioControls}>
			<Prev
				onClick={handlePrevClick}
			/>

			{isPlaying
				? 
				<Pause
					onClick={handlePlayPauseClick}
				/>
				: 
				<Play 
					onClick ={handlePlayPauseClick}
				/>
			}

			<Next
				onClick={handleNextClick}
			/>
		</div>
	);
}

export default AudioControls;