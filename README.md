# :computer: :space_invader: **NFT MINTING SITE COOL-PIXELS**

:computer: :space_invader: **COOL-PIXELS** - this demo nft mintng site, which you can deploy on your localhost. It connects with your MetaMask account, and after minting you get random nft, that will save to your account.

Everything was tested on local node and deployed at localhost.

___

## **Demo**

![coolPixelsGif](/docs/MVP-Cool-Pixels.gif)

Full demo video in `/docs`.

___

## **Project stack**:
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

## **NFT**

In the process of creating the application, I was inspired by old 8-bit games, so I draw some pixel parts of body, set rarity of every part and used the most popular [NFT generator](https://github.com/HashLips/hashlips_art_engine) and got these guys.

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
___

## **Docs**
In docs you can find .mkv full (1,37 min) video mvp and [rus] presentation about internet of the future.
