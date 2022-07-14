import React from "react";
import styles from './index.module.scss';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect } from 'wagmi';

const HomeView: React.FC = () => {
  const { isConnected } = useAccount();

  const sendEth = async() => {
    try {

    } catch (e){
      console.log(e);
    }
  }

  return (
    <div className={styles.wrapper}>
      <ConnectButton />
      {isConnected && (
        <div className={styles.connected}>
          <p>Hey there, follow on twitter / click the button below :</p>
          <button></button>
        </div>
      )}
    </div>
  )
}

export default HomeView;
