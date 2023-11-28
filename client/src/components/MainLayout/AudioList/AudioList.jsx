import React, { useEffect, useState } from 'react';
import styles from "./AudioList.module.css"
import { useDispatch } from 'react-redux'
import { getAudio } from '../../../store/audioSlice'
import Filter from './Filter/Filter'
// import MappedAudios from './MappedAudios/MappedAudios'


const AudioList = () => {

const [filterText, setFilterText] = useState('')


const dispatch = useDispatch()

  useEffect(() => {
			dispatch(getAudio({
				api :'/api/audios'
			}))

  }, [dispatch]);
  
	
  return (
    <div id="1" className={styles.AudioList}>
		
		<Filter
		filterText={filterText}
		setFilterText={setFilterText}
		/>
		{/* <MappedAudios filterText={filterText}/> */}

  </div>
  );
};

export default AudioList;