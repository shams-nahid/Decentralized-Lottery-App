# The Decentralized Lottery App

[The Decentralized Lottery App](https://decentralized-lottery-app.herokuapp.com/) has a prize pool and a list of people who have entered the prize pool. People send some amount of money(ether) in the contract. As soon as people money, they are being recorded as a player. Ethers, that the players send, directly goes to the contract account. After a certain times, contract manager make the contract to pick a winner. The contract pick winner randomly and transfer all money from the prize pool to the winner. At that point, the lottery contract resets and becomes ready to accept a new list of players.

### [Live](https://decentralized-lottery-app.herokuapp.com/)

## Features

- `Players` can put money
- `Smart Contract` will randomly select the winner and send money
- Powered by public blockchain platform
- End to end test
- Interactive UI
- Transparent selection system

## Tech Stack

- [Ethereum](https://www.ethereum.org/) - Platform
- [Solidity](https://solidity.readthedocs.io/en/v0.4.17/) - Language
- [Node.js](https://nodejs.org/en/) - Javascript Runtime
- [React](https://reactjs.org/) - UI Library
- [Heroku](https://heroku.com/) - App Hosting

## Prerequisite Technologies In Your Machine

- [Node 10.17.0](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [MetaMask](https://metamask.io/)

## Installation

#### Clone Repo

```
git clone https://github.com/bmshamsnahid/Decentralized-Lottery-App
```

#### Enable Environment

```
> Make sure `node.js` is installed. To check version, use `node -v`. This is tested in node 8, 10, 11 and 12
```

```
> In `\config` directory, create file `dev.js` and put environment variable. An example is provide in the same directory named `example-dev.js`
```

```
> To use your own contract, update the `/ui/src/contractConfig.js` as your `Contract Address` and `Contract ABI`
```

#### Run Application

##### Server

```
> Install server side dependency by `npm i` in the project-root directory. In case you face any problem, use `yarn` package manager.
> Run server by `npm run dev`
> Server is running in `http://localhost:8080`
```

##### Client

```
> Go to `\ui` and install dependencies `npm i`
> Run the front end `npm start`
> Update `api url` to local node app `http://localhost:8080` in `App.js` file.
> Your app is available in `http://localhost:3000`
```

#### Test Application

```
> In project-root directory, run `npm run test`
```

You are all set to go.

## Upcoming Features

- [x] Run application without web3
- [x] Error handling
- [x] Alert on transaction failed or completion
- [ ] Restricted multiple entry
- [ ] `Pick Winner` button only for the `manager`

### [Application Details](https://ixorasolution.com/blog)

## References:

- [Contract Source Code](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/)
- [Metamask Installation](https://youtu.be/ZIGUC9JAAw8)
- [Ethereum Contract](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/)
- [Verification & publish](https://programtheblockchain.com/posts/2018/01/16/verifying-contract-source-code/)

- [TxAddress](https://rinkeby.etherscan.io/tx/0x3349da25727612e32d292b2fd1f1d2ac5d07b35b9b0f62f356f60d3aa65c6241)

- [Smart Contract Link](https://rinkeby.etherscan.io/address/0x8c9815e2372bc6f9dec915751b31666ab08b2edb)

- TxHash: `0x3349da25727612e32d292b2fd1f1d2ac5d07b35b9b0f62f356f60d3aa65c6241`

- From account: `0x612a306d2707cf0B49A5d76594482f7AfCda506c`

- Contract address: `0x8C9815E2372bC6F9Dec915751B31666aB08b2edb`
