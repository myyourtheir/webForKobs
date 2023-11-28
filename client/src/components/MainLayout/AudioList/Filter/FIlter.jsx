function Filter({filterText, setFilterText}) {
	return ( 
		<input
		type='text'
		value={filterText}
		onChange={e=>setFilterText(e.target.value)}
		className=''
		>

		</input>
	 );
}

export default Filter;