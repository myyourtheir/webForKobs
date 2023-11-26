import styles from "./LeftBar.module.css"
import InnerDiv from './elems/InnerDiv';
import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { setIsOpen } from '../../store/leftSideSlice'



function LeftBar() {


	const dispatch = useDispatch()

	const handleClick=()=>{
		dispatch(setIsOpen(false))
	}

	return (  
		<div className={styles.LeftBar}>
			<div onClick={handleClick} className={styles.closeIcon}>
				<FaWindowClose />
			</div>
			<InnerDiv/>
		</div>
	);
}

export default LeftBar;