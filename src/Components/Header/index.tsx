import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { textCropping } from "../../helperFunction/textCropping";
import { getMyAccount } from "../../helperFunction/getMyAccount";
import useGetMyOrders from "../../hooks/useGetMyOrders";
import { addMyLogin } from "../../store/reducers/mainPageReducer";
import Button from "../UI/Button";
import GrayLine from "../UI/GrayLine";
import './style.scss';

const Header = () => {
  const [account, setAccount] = useState('');
  const dispatch = useDispatch()

  const connectWallet = async () => {
    setAccount(await getMyAccount());
  }
  useEffect(() => {
    dispatch(addMyLogin(account))
  }, [account])
  useGetMyOrders()

  return (
    <>
      <header className="header">
        <img src="../../img/logo.svg" alt="logo" />
        {!account ? (
          <Button text="Connect Wallet" onClick={connectWallet} />
        ) : (
          <Button text={textCropping(account)} disabled color="white" />
        )}
      </header>
      <GrayLine />
    </>
  );
}

export default Header;
