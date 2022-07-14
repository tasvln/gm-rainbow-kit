import React from "react";
import styles from './index.module.scss';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { Connected } from "components";

const HomeView: React.FC = () => {
  const { isConnected } = useAccount();

  return (
    <div className={styles.wrapper}>
      <ConnectButton />
      {isConnected && <Connected />}
    </div>
  )
}

export default HomeView;
