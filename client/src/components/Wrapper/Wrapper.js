import React, { useState, useEffect } from 'react';
import styles from"./Wrapper.module.css"
import LeftBar from '../leftBar/LeftBar';

function Wrapper() {
	const [opacity, setOpacity] = useState(false)
	useEffect(()=>{
    setTimeout(()=>{
      setOpacity(true)
    }, 2500)
  },[])

	return ( 
	<div className={!opacity? styles.Wrapper1: styles.Wrapper2} >
		{/* <LeftBar/> */}
		
	</div> 
	);
	
}

export default Wrapper;