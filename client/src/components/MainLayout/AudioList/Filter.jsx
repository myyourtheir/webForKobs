
import styles from './AudioList.module.css'
function Filter({filterText, setFilterText}) {
	return (  
		<input
			type='text'
			value={filterText}
			onChange={(e)=>setFilterText(e.target.value)}
			className={styles.filter}
		/>
	);
}

export default Filter;