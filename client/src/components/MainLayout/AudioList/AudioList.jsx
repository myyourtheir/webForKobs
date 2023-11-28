import React, { useEffect, useState } from 'react';
import styles from "./AudioList.module.css"
import Audio from './Audio/Audio'
import { useDispatch, useSelector } from 'react-redux'
import { getAudio } from '../../../store/audioSlice'
import Filter from './Filter/Filter'


const AudioList = () => {

const [filterText, setFilterText] = useState('')
const audioFiles = useSelector((state=>state.audios.data))

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
		{audioFiles
		? (()=>{
			return audioFiles.map( (el, index) => { 
				return (
					<Audio key={el._id} el={el} i={index}></Audio>
					)	
				})
			}
		)()
		: null
		}

  </div>
  );
};

export default AudioList;