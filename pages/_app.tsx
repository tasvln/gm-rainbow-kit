import 'styles/index.scss';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// rainbow kit & wagmi imports
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyId, environment } from 'utils/variables';

// rainbow kit & wagmi configs
let chainNetwork;

if (environment === 'development') {
  chainNetwork = chain.ropsten;
} else {
  chainNetwork = chain.mainnet;
}

const { 
  chains, 
  provider
} = configureChains(
  [
    chainNetwork
  ],
  [
    alchemyProvider({ alchemyId: alchemyId }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
        />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
