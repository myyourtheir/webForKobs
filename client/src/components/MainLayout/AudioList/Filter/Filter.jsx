import styles from './Filter.module.css'

function Filter({filterText, setFilterText}) {
	return ( 
		<input
		type='text'
		value={filterText}
		onChange={e=>setFilterText(e.target.value)}
		className={styles.filter}
		placeholder='Что ищем?'
		>
		</input>
	 );
}

export default Filter;