import { useState } from 'react'
import { useSelector } from 'react-redux'
import AudioItem from './AudioItem/AudioItem'
import Filter from './Filter'
import styles from './AudioList.module.css'

function AudioList() {
	const {tracks} = useSelector(state=> state.audios)
	const [filterText, setFilterText] = useState('')
	return ( 
		<div className={styles.Audios}>
			<Filter
				filterText={filterText}
				setFilterText={setFilterText}
			/>
			<ul className={styles.list}>
				{tracks.map((el, index)=>
					el.filename.indexOf(filterText)>=0 && <li key={el._id}><AudioItem  selfIndex={index}/></li>
					)
					}
			</ul>
		</div>
	);
}

export default AudioList;