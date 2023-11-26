import {memo} from "react";
import { ReactComponent as Play } from "../../../../../assets/play.svg";
import { ReactComponent as Pause } from "../../../../../assets/pause.svg";
import { ReactComponent as Next } from "../../../../../assets/next.svg";
import { ReactComponent as Prev } from "../../../../../assets/prev.svg";
import styles from "./AudioControls.module.css"


const AudioControls = ({isPlaying, onPlayPauseClick, onNextTrack, onPrevTrack}) => {

	
	return(
  <div className={styles.audioControls}>
    {isPlaying && <button
      type="button"
      aria-label="Previous"
			onClick={onPrevTrack}
    >
      <Prev className={styles.svg}/>
    </button>
		}
    {isPlaying ? (
      <button
        type="button"
        className={styles.pause}
        aria-label="Pause"
				onClick={onPlayPauseClick}
      >
        <Pause className={`${styles.svgPausePlay} ${styles.svg}`}/>
      </button>
    ) : (
      <button
        type="button"
        className={styles.play}
        aria-label="Play"
				onClick={onPlayPauseClick}
      >
        <Play className={styles.svg}/>
      </button>
    )}
    {isPlaying && <button
      type="button"
      className={styles.next}
      aria-label="Next"
			onClick={onNextTrack}
    >
      <Next className={styles.svg}/>
    </button>
		}
  </div>
)};

export default memo(AudioControls);

