import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import {
  gettingMatchingOrders,
  gettingOrders,
  showInfoModal,
} from "../../../store/reducers/mainPageReducer";
import Button from "../../UI/Button";
import OrderBookList from "../../Main/OrderBook/OrderBookList";
import useGetMatchingOrders from "../../../hooks/useGetMatchingOrders";
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

const ModalOrderDetails = () => {
  const { form, isInfoModalShow } = useSelector((state: any) => state.mainPage)

  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(showInfoModal(false))
  }

  const getMatchingOrder = () => {
    dispatch(gettingMatchingOrders(true))
  }

  const getPlaceOrder = () => {
    dispatch(gettingOrders(true))
  }

  useGetMatchingOrders()
  return (
    <Modal
      isOpen={isInfoModalShow}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
      ariaHideApp={false}
    >
      <h2>Order Details</h2>
      <p className="text-row">
        <span>Trading pair:</span>
        <span>ETH/USDT</span>
      </p>
      <p className="text-row">
        <span>Order type:</span>
        <span>{form.isMarket ? 'Limit' : 'Market'}</span>
      </p>
      <p className="text-row">
        <span>Order side:</span>
        <span>{form.isBuy ? 'Bye' : 'Sell'}</span>
      </p>
      <p className="text-row">
        <span>Asset amount:</span>
        <span>{form.amountA} ETH</span>
      </p>
      <p className="text-row">
        <span>Expected price:</span>
        <span>{form.orderPrice} USDT</span>
      </p>
      <h2>Sell</h2>
      <p className="text-row text-row-sell">
        <span>Size ETH</span>
        <span>Price USDT</span>
      </p>
      <OrderBookList />
      <OrderBookList />
      <OrderBookList />
      <div className="buttons">
        <Button text="Match" onClick={getMatchingOrder} />
        <Button text="Place Order" onClick={getPlaceOrder} color="white" />
      </div>
    </Modal>
  )
}

export default ModalOrderDetails;