
import React, { useState, useEffect } from 'react';
import style from"./KOBSLogo.module.css"


function KOBSLogo() {
	const [isRotate, setRotate] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setRotate(true)
    })
  },[])

  

  return (
    <div className={!isRotate? style.KOBSLogoOuterBefore: style.KOBSLogoOuterAfter}>
    <img src = "/svg/KOBS.svg" alt="K" />
    
    </div>
	);
}

export default KOBSLogo;