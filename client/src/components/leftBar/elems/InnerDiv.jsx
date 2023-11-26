import React from 'react';
import styles from "./InnerDiv.module.css"
import TopSide from './TopSide/TopSide';
import ImageKobs from './ImgKobs/ImgKobs';
import MainText from './MainText/MainText';
function InnerDiv() {
	return (  
	<div className={styles.InnerDiv}>
		<TopSide/>
		<ImageKobs/>
		<MainText/>
	</div>
	);
}

export default InnerDiv;