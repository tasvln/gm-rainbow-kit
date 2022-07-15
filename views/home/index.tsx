import React from "react";
import styles from './index.module.scss';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { Connected } from "components";

const HomeView: React.FC = () => {
  const [connected, setConnected] = React.useState<boolean>(false);
  const { isConnected } = useAccount();

  React.useEffect(() => {
    setConnected(isConnected);
  }, [isConnected]);
  
  return (
    <div className={styles.wrapper}>
      <ConnectButton />
      {connected && <Connected />}
    </div>
  )
}

export default HomeView;
