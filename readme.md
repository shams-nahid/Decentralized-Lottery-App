# The Honest Lottery App

[The Honest Lottery App](https://decentralized-lottery-app.herokuapp.com/) has a prize pool and a list of people who have entered the prize pool. People send some amount of money(ether) in the contract. As soon as people money, they are being recorded as a player. Ethers, that the players send, directly goes to the contract account. After a certain times, contract manager make the contract to pick a winner. The contract pick winner randomly and transfer all money from the prize pool to the winner. At that point, the lottery contract resets and becomes ready to accept a new list of players.

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

- [Node 10.15.3](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [MetaMask](https://metamask.io/)

## Installation

#### Clone Repo

```
git clone https://github.com/bmshamsnahid/Decentralized-Lottery-App
```

#### Enable Environment

```
> In `\config` directory, create file `dev.js` and put local db url with username and password. An example is provide in the same directory named `example-dev.js`
> Make sure `node.js` is installed. To check version, use `node -v`. This is tested in node 8, 10, 11 and 12
```

#### Run Application

```
> Install server side dependency by `npm i` in the project-root directory. In case you face any problem, use `yarn` package manager.
> Go to `\ui` and install dependencies `npm i`
> Run the front end `npm start`
> Your app is available in `http://localhost:3000`
> Make sure `metamask` is installed
> Make sure you are connected to `Rinkeby` network and have enough ether
```

#### Test Application

```
> In project-root directory, run `npm run test`
```

#### Deployment

```
> Put `smart contract` to the `remix` IDE
> Go to `Deploy and run Transaction tab`
> Select environment `Injected Web3`
> Put your `account address` that has enough ether in `Rinkeby` test net
> Make the `smart contract` deployment and get the transaction hash
> From `Rinkeby` network `EtherScan`, using the transaction hash, get the `contract address` and `contract abi`
> (Optional) Verify your contract by publishing it (More Trusted)
> Put the `contract address` and `contract abi` in `\ui\src\contractCongfig.js`
> Build the react side `npm run build` and put the react `ui\build` directory to `\public`
> Now run your node app `npn run dev` and your app will be available at `http://localhost:3000`
> Deploy your node app and put environment variable according to `\config\prod.js`
```

You are all set to go.

## Upcoming Features

- Error handling
- Alert on transaction failed or completion
- Restricted multiple entry
- `Pick Winner` button only for the `manager`

From `deploy and run tracsaction tab`,
select environment as `injected web3`
add your rinky by account

TxAddress: https://rinkeby.etherscan.io/tx/0x3349da25727612e32d292b2fd1f1d2ac5d07b35b9b0f62f356f60d3aa65c6241

TxHash: 0x3349da25727612e32d292b2fd1f1d2ac5d07b35b9b0f62f356f60d3aa65c6241

From account: 0x612a306d2707cf0B49A5d76594482f7AfCda506c

Contract address: 0x8C9815E2372bC6F9Dec915751B31666aB08b2edb

Contract link: https://rinkeby.etherscan.io/address/0x8c9815e2372bc6f9dec915751b31666ab08b2edb
