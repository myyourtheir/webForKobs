import React from 'react';
import Image from 'react-bootstrap/Image';
import styles from "./ImageKobs.module.css"
function ImageKobs() {
	return ( 
		<div className={styles.ImageKobs}>
			<img src ="/KobsImg.jpg" className={styles.ImgK}/>
		</div>
	 );
}

export default ImageKobs;