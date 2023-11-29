import React from 'react';
import styles from "./MainLayout.module.css"
import DataFetchingWrapper from './DataFetchingWrapper'


function MainLayout() {
	return ( 
	<div className={styles.MainLayout}>
		<DataFetchingWrapper/>
	</div>);
}

export default MainLayout;