import React from "react";
import styles from './index.module.scss';
import { useSendTransaction } from 'wagmi';
import { BigNumber } from "ethers";

const Connected: React.FC = () => {
  const { sendTransaction } = useSendTransaction({
    request: {
      to: 'tasxzd.eth',
      value: BigNumber.from('100000000000000000')
    },
    onSuccess(data) {
      console.log('Success', data)
    },
    onError(error) {
      console.log('Error', error)
    },
  })

  return (
    <div className={styles.connected}>
      <p>Hey there, follow on <a href="https://twitter.com/tasxzd">twitter</a> / click the button below :)</p>
      <button onClick={() => sendTransaction()} type="button">gm</button>
    </div>
  )
}

export default Connected;
