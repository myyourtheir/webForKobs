
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
    <button
      type="button"
      className={styles.prev}
      aria-label="Previous"
      onClick={handlePrevClick}
    >
      <Prev />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className={styles.pause}
        onClick={() => handlePlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </button>
    ) : (
      <button
        type="button"
        className={styles.play}
        onClick={() => handlePlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </button>
    )}
    <button
      type="button"
      className={styles.next}
      aria-label="Next"
      onClick={handleNextClick}
    >
      <Next />
    </button>
		</div>
	);
}

export default AudioControls;
