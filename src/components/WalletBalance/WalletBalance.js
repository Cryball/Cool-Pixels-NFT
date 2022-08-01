import { useState } from 'react';
import { ethers } from 'ethers';
import { Button } from '@mui/material';
import './WalletBalance.scss'

function WalletBalance() {
    const [balance, setBalance] = useState("***");
    const [isConnected, setisConnected] = useState(false);

    async function connectAccount(){
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
        }
        setisConnected(true);
      }

    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    };

    return (
        <div className='wallet-style'>
            <h5>Your Balance: {balance} ETH</h5>
            <Button variant="outlined" sx={{fontFamily: "VT323", fontSize: "24px", color: "white", marginRight: "20px", borderColor: "white"}} onClick={() => getBalance()}>Show My Balance</Button>
            <Button variant="outlined" sx={{fontFamily: "VT323", fontSize: "24px", color: "white", marginLeft: "20px", borderColor: "white"}} onClick={connectAccount}>{isConnected ? "Connected!" : "Connect account"}</Button>
        </div>
    );
};

export default WalletBalance;