# :computer: :space_invader: **NFT MINTING SITE COOL-PIXELS**
![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)
![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)


:computer: :space_invader: **COOL-PIXELS** - this is demo nft mintng site, which you can deploy on your localhost. It connects with your MetaMask account, and after minting you get random nft, that will save to your account.

Everything was tested on local node and deployed at localhost.

___

## :tv: **Demo**:

![coolPixelsGif](/docs/MVP-Cool-Pixels.gif)

Full demo video in `/docs`.

___

## :scroll: **Project stack**:
### Frontend:

+ React.js
+ Ethers.js
+ SCSS
+ HTML

### Smart-contracts:
+ Solidity
+ OpenZeppelin
  
### Deploy and testing:

+ Hardhat
+ Chai
+ Waffle

___

## :space_invader: **NFT**

In the process of creating the application, I was inspired by old 8-bit games, so I draw some pixel parts of body, set rarity of every part and used the most popular [NFT generator](https://github.com/HashLips/hashlips_art_engine) and got these guys.
All pictures are located at [pinita cloud](https://www.pinata.cloud), and after minting you get random picture with special rarity.
<br />
<br />
![coolPixelsGif](/docs/cool-pixels-nft.gif)

___
## :rocket: **Installation**

Install all dependencies by:

```shell
npm install
```
Then start local node: 
```shell
npx hardhat node
```
In another terminal start local network:
```shell
npx hardhat run scripts/sample-script.js --network localhost
```

And finally start app by: 
```shell
npm install
```
:warning: If you start project localy, you can connect your MetaMask account, check your balance, but you can't buy nft's, because private keys from pinata cloud are not in github.
___

## :package: **Docs**
In docs you can find .mkv full (1,37 min) video mvp and [rus] presentation about internet of the future.
