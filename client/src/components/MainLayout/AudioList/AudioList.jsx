import React, { useEffect } from 'react';
import styles from "./AudioList.module.css"
import Audio from './Audio/Audio'
import { useDispatch, useSelector } from 'react-redux'
import { getAudio } from '../../../store/audioSlice'


const AudioList = () => {
const audioFiles = useSelector((state=>state.audios.data))

const dispatch = useDispatch()

  useEffect(() => {
			dispatch(getAudio({
				api :'/api/audios'
			}))

  }, [dispatch]);
  
	
  return (
    <div id="1" className={styles.AudioList}>
		{audioFiles  &&
    audioFiles.map( (el, index) => { 
			return (
				<Audio key={el._id} el={el} i={index}></Audio>
				)	
			})
		}

  </div>
  );
};

export default AudioList;