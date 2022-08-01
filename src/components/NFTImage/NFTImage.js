import { Button } from "@mui/material";
import { ethers } from "ethers";
import { useState, useEffect } from 'react';
import CoolPixels from '../../artifacts/contracts/CoolPixelsNFT.sol/CoolPixels.json';
import questionLogo from '../../assets/question.png';
import { CONTACT_ADRESS, METADATA_ID, IMAGE_ID } from "../../constants";
import './NFTImage.scss';

const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();
const contract = new ethers.Contract(CONTACT_ADRESS, CoolPixels.abi, signer);

function NFTImage({ tokenId, getCount }) {
    const metadataURI = `${METADATA_ID}/${tokenId}.json`;
    const imageURI = `https://gateway.pinata.cloud/ipfs/${IMAGE_ID}/${tokenId}.png`;
    const [isMinted, setIsMinted] = useState(false);

    useEffect(() => {
        getMintedStatus();
    }, [isMinted]);

    const getMintedStatus = async () => {
        const result = await contract.isContentOwned(metadataURI);
        console.log(result)
        setIsMinted(result);
    };

    const mintToken = async () => {
        const connection = contract.connect(signer);
        const addr = connection.address;
        const result = await contract.payToMint(addr, metadataURI, {
            value: ethers.utils.parseEther('0.05'),
        });

        await result.wait();
        getMintedStatus();
        getCount();
    };

    async function getURI() {
        const uri = await contract.tokenURI(tokenId);
        alert(uri);
    }

    return (
        <div className='card-style'>
            <img alt="main_picture" width={250} height={250} src={isMinted ? imageURI : questionLogo}></img>
            <div style={{display: "flex", alignItems: "center"}}>
                <h5>ID #{tokenId}</h5>
                {isMinted ? <h5/> : <h5 style={{fontSize: "12px", marginLeft: "6px"}}>Price: 0.05 ETH</h5>}
            </div>
            {!isMinted ? (
                <Button variant="outlined" sx={{fontFamily: "VT323", fontSize: "28px", color: "white", borderColor: "white"}} onClick={mintToken}>
                    Mint
                </Button>
            ) : (
                <Button variant="outlined" onClick={getURI} sx={{fontFamily: "VT323", fontSize: "28px", color: "white", borderColor: "white"}}>
                    Taken! Show URI
                </Button>
            )}
        </div>
    );
}

export default NFTImage;