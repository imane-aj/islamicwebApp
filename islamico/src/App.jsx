import React ,{ Fragment } from 'react'
import { MainMenu } from './Containers/MainMenu';
import { Body } from './Containers/Body';
import { useDispatch, useSelector } from 'react-redux';
import {AnimatePresence} from 'framer-motion';
import Modal from './Components/Modal';
import { ModalOpen } from './Redux/ToggleSlice';
import { useTranslation } from 'react-i18next';

function App() {
  const show = useSelector((state)=>state.toggle.show)
  const modalOpen = useSelector((state)=>state.toggle.modalOpen)
  const dispatch = useDispatch()
  const close = () => dispatch(ModalOpen(false));
  const {t, i18n} = useTranslation()

  return (
    <Fragment>
      {show && <Body t={t} i18n={i18n}/>}
      {!show && <MainMenu t={t} i18n={i18n}/>}

      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={()=>null}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>

    </Fragment>
  )
}

export default App
