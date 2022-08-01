import { ethers } from "ethers";
import { useState, useEffect } from 'react';
import WalletBalance from "../WalletBalance/WalletBalance";
import CoolPixels from '../../artifacts/contracts/CoolPixelsNFT.sol/CoolPixels.json';
import NFTImage from "../NFTImage/NFTImage";
import './Home.scss';

const contractAdress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();
const contract = new ethers.Contract(contractAdress, CoolPixels.abi, signer);

function Home() {
    const [totalMinted, setTotalMinted] = useState(0);

    const getCount = async () => {
        const count = await contract.count();
        console.log(parseInt(count));
        setTotalMinted(parseInt(count));
      };

    useEffect(() => {
      getCount();
    }, []);

    return (
      <div>
        <div className="title">
          Cool Pixels
          <p className="comment">Pixels have taken over the future! Buy one to be safe!</p>
        </div>
        <WalletBalance />
        <div className="nft-row">
            {Array(totalMinted + 1)
            .fill(0)
            .map((_, i) => (
                <div key={i+1} className='nft-card'>
                <NFTImage tokenId={i+1} getCount={getCount} />
                </div>
            ))}
        </div>
      </div>
      );
}

export default Home;