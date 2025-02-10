import './App.css'
// import settings here 
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { TokenLaunchpad } from './components/TokenLaunchpad'

function App() {
  return (
    <div>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div style={{display:"flex", width:"100vw" , justifyContent:"space-between"}}>


              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 20,
                // margin:10
            
                }}>
                <WalletMultiButton />
              </div>




              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 20,
                // margin:10
            
                }}>

                <WalletDisconnectButton />

              </div>



              </div>
              <TokenLaunchpad></TokenLaunchpad>
            </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}


export default App
