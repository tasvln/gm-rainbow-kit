import React from "react";
import styles from './index.module.scss';
import { useSendTransaction } from 'wagmi';
import { BigNumber } from "ethers";
import { environment, ethAddress } from "utils/variables";
import { toast } from "react-toastify";

const Connected: React.FC = () => {
  const [tx, setTx] = React.useState<string | undefined>('');

  const { sendTransaction } = useSendTransaction({
    request: {
      to: ethAddress,
      value: BigNumber.from('100000000000000000')
    },
    onSuccess(data) {
      setTx(data.hash);
      toast.success('Transaction Processing...');
    },
    onError(error) {
      const message = error.message || 'Transaction Failed / Rejected';
      toast.error(message);
    },
  })

  let ethscanLink: string | undefined;

  if (environment === 'development') {
    ethscanLink = `https://ropsten.etherscan.io/tx/${tx}`;
  } else {
    ethscanLink = `https://etherscan.io/tx/${tx}`;
  }

  return (
    <div className={styles.connected}>
      <p>click the button below :) {tx && ', click again 🫶🏽'}</p>
      <button onClick={() => sendTransaction()} type="button">gm 🌈</button>
      {tx && <a href={ethscanLink} target="_blank" rel="noopener noreferrer">tx: {`${tx.substring(0, 10)}...`}</a>}
    </div>
  )
}

export default Connected;
