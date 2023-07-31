
// export default AudioList
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from "./config.json"
import styles from "./AudioList.module.css"
import Audio from './Audio/Audio';

const AudioList = () => {
  const [audioFiles, setAudioFiles] = useState([]);
  // const apiURL = config.apiURL
  useEffect(() => {
    // Fetch audio files from the server
    fetch('http://localhost:3001/api/audios')
      .then(response => response.json())
      .then(data => setAudioFiles(data))
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  
  return (
    <div className={styles.AudioList}>
    
    
  </div>
  );
};

export default AudioList;