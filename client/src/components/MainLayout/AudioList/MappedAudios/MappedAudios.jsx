import { useSelector } from 'react-redux'
import Audio from '../Audio/Audio'

function MappedAudios({filterText}) {
	const audioFiles = useSelector((state=>state.audios.data))
	return ( 
		<>

		{audioFiles
		? (
			()=>{
				return (filterText!==''
					? audioFiles.filter(audio=> audio.filename.indexOf(filterText) >= 0)
					: audioFiles
					).map( (el, index) => { 
					return (
						<Audio key={el._id} el={el} i={index}></Audio>
						)	
					})
			}
		)
		()
		: null
		}
		</>
	 );
}

export default MappedAudios;