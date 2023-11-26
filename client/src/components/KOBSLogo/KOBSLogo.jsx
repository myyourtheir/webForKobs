
import React, { useState, useEffect } from 'react';
import style from"./KOBSLogo.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { setIsOpen } from '../../store/leftSideSlice'


function KOBSLogo() {
	const [isRotate, setRotate] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setRotate(true)
    })
  },[])
	const dispatch = useDispatch()
	const isOpen = useSelector(state => state.leftSide.isOpen)
	const handleClick=()=>{
		isOpen
		? dispatch(setIsOpen(false))
		: dispatch(setIsOpen(true))
	}
  

  return (
    <div 
		className={!isRotate? style.KOBSLogoOuterBefore: style.KOBSLogoOuterAfter}
		onClick={handleClick}
		>
    <img src = "/svg/KOBS.svg" alt="K" />
    
    </div>
	);
}

export default KOBSLogo;