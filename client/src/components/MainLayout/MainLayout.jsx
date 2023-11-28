import React from 'react';
import styles from "./MainLayout.module.css"
import AudioList from './AudioList/AudioList';
import BottomAudioPlayer from './BottomAudioPlayer/BottomAudioPlayer'
function MainLayout() {
	return ( 
	 <div className={styles.MainLayout}>
		<AudioList/>
		<BottomAudioPlayer/>
	 </div>);
}

export default MainLayout;