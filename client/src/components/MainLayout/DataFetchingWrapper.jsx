import { useDispatch, useSelector } from 'react-redux'
import { getAudio } from '../../store/audioSlice'
import BottomAudioPlayer from './BottomAudioPlayer/BottomAudioPlayer'
import { useEffect } from 'react'
import AudioList from './AudioList/AudioList'


function DataFetchingWrapper() {
	const data = useSelector(state=>state.audios.tracks)
	const dispatch = useDispatch()
	let ignore = false
	
	useEffect(()=>{
		const res = getAudio({api: '/api/audios'})
		if (!ignore){
			dispatch(res)
		}
		return ()=>{
			// eslint-disable-next-line react-hooks/exhaustive-deps
			ignore = true
		}
	},[])

	return (  
		<>{data 
		?
		<>
			<AudioList/>
			<BottomAudioPlayer/>
		</>
		: 
		null
		}
		</>

	);
}

export default DataFetchingWrapper;