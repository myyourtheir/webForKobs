import React, { useState, useEffect } from 'react';
import styles from "./LeftBar.module.css"
import InnerDiv from './elems/InnerDiv';
function leftBar() {
	// const [isOpen, setOpen] = useState(false)

	return (  
		<div className={styles.LeftBar}>
			<InnerDiv/>
		</div>
	);
}

export default leftBar;