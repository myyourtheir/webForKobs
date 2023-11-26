import React from 'react'
// import AudioList from './components/AudioList';
import KOBSLogo from "./components/KOBSLogo/KOBSLogo"
import Wrapper from './components/Wrapper/Wrapper';
import LeftBar from './components/leftBar/LeftBar';
import MainLayout from './components/MainLayout/MainLayout';
import { useSelector } from 'react-redux'
function App() {

	const isOpen = useSelector(state => state.leftSide.isOpen)

  return (
    <div>   
			<KOBSLogo/>
			{isOpen && <LeftBar/>}
			<Wrapper/>
			<MainLayout/>
    </div>
  );
}

export default App;
