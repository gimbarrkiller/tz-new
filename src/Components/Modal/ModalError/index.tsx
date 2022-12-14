import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import Button from "../../UI/Button";
import { showErrorModal } from "../../../store/reducers/mainPageReducer";
import "../style.scss"

const screenWidth = window.innerWidth
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: screenWidth > 450 ? '400px' : '85%',
    borderRadius: '8px',
  },
};

const ModalError = () => {
  const { isErrorModalShow } = useSelector((state: any) => state.mainPage)
  const dispatch = useDispatch()
  const  closeModal = () => {
    dispatch(showErrorModal(false))
  }
  return (
    <Modal
      isOpen={isErrorModalShow}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
      ariaHideApp={false}
    >
      <h2>Wrong Network</h2>
      <p>Fill in all the fields</p>
      <Button text="Okay" onClick={closeModal} />
    </Modal>
  )
}

export default ModalError;