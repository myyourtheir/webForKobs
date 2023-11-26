import React from 'react';
import styles from "./MainLayout.module.css"
import AudioList from './AudioList/AudioList';
function MainLayout() {
	return ( 
	 <div className={styles.MainLayout}>
		<AudioList/>
	 </div>);
}

export default MainLayout;