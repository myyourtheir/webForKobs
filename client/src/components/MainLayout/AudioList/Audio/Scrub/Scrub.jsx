import styles from './scrub.module.css'

function Scrub({duration, trackProgress, onScrub, onScrubEnd, trackStyling}) {
	return (
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
				style={{ background: trackStyling }}
      />
	  );
}

export default Scrub;