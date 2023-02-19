import React ,{ Fragment } from 'react'
import { MainMenu } from './Containers/MainMenu';
import { Body } from './Containers/Body';
import { useSelector } from 'react-redux';
import { SideMenu } from './Containers/SideMenu';


function App() {
  const show = useSelector((state)=>state.toggle.show)
  const numP = useSelector((state)=>state.toggle.num)
  console.log(show)
  return (
    <Fragment>
      {(show && numP == 2 || show && numP == 3 || show && numP == 4) && <SideMenu />}
      {show && <Body />}
      {!show && <MainMenu />}
    </Fragment>
  )
}

export default App
