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

#### Metamask Plugin Installation

- Install [Chrome Browser](https://www.google.com/chrome/) in your machine

* Go to [Chrome Web Store](https://chrome.google.com/webstore/category/extension) and search for `Metamask`
* Open `Metamask` offered by `https://metamask.io/`
* Click `Add to Chrome` and confirm by `Add Extension`
* Now `Metamask` should be available in your `Chrome Extension` list

#### Create Wallet

- Open `Metamask` and click `Get Started`
- If you already have a wallet then go to `Import Wallet`
- To create a new wallet go for `Create Wallet`
- Agree with `Privacy Policy`, put password and create the `wallet`
- Reveal and save the `Backup Phrase` in a secure place
- Now go to `Next Section`, select the words according to the phrase
- Now your wallet is `All Set Up`, You should get your `Account Address`

#### Connect to `Rinkeby` network and get fake `Ether`

- Open the `Metamask` plugin
- On `top-right` switch to `Rinkeby Network` from `Main Network`
- Go to `free ether supplier` [site](https://faucet.rinkeby.io/). We will follow their `twitter` instruction.
- Go to [Twitter](https://twitter.com/home) and create a `tweet` of our `Ethereum Account Address`
  - If your `Ethereum Account Address` is `0x0000000000000000000000000000000000000000`, the just tweet the `address`
  * You can include anything with the `address`
  * It is valid, till the `tweet` contains the address.
- Open the `published tweet` in a new page and copy the `page link`.
- Put the `tweet link` in the `free ether supplier` [site](https://faucet.rinkeby.io/) and from the `Give me ether`, select a suitable package
- Now in your `Metamask`, `fake ether` should appear
- Sometimes it takes a little more time to `transaction`, so wait and also make sure you `Metamask` is connected to the `Rinkeby` network.

#### Run locally and Simulate `Contract` through `Remix` Ide

- Open [Remix](https://remix.ethereum.org/) IDE.

* Select environment `Solidity`
* Go to `File Explorer` Tab and create a file `Lottery.sol`
* Get the [Contract Code](https://gist.github.com/bmshamsnahid/05005b4c1e9c402e521be8b56d8050f2)
* Go to `Solidity Compiler` Tab and Select
  - `Compiler Version` to `0.4.17`
  - `Language` as `Solidity`
  - `EVM` as `Compiler Default`
* Now click `Compile Lottery.sol`
* You can enable `auto-compile` by `check` the checkbox `Auto Compile`
* Go to `Deploy And Run Transaction` Tab and `Deploy` the contract in local `EVM`
* Your contract functionality will be available in `Deploy And Run Tracsaction` tab, under the `Deployed Contract` section

#### Deploy the contract to `Rinkeby Network` through `Remix` Ide

- Make sure you run the `Lottery` contract using previous section instructions
- - Open `Metamask`, put the `password` and make sure, you are connected to the `Rinkeby` network.
- Go to `Deployed And Run Transaction` tab and select
  - `Environment` is `Injected Web3`
  - As account, your `Metamask` wallet address should be selected
- Make sure you have enough `ether` in your wallet to deploy the contract
- Now click `Deploy`. This will deploy your `contract` to the `Rinkeby` network.
- In the `Remix IDE`, check `Log Section` and grab the `Transaction Hash` and store it.
- Go to [Ether Scan](https://rinkeby.etherscan.io/) and search for the `Transaction Hash`. You will get the `Deployed Contract Address`. Also this `Contract Address` will be required further.

#### Verify and Publish Your Contract:

- From [Ether Scan](https://rinkeby.etherscan.io/), search the `Transaction Hash` or `Contract Address` and go to `Contract Details` page
- From `Contract Details`, go to `Contract` tab
- Click `Verify and Publish`, and set
  - `Compiler Type` as `Solidity(Single File)`
  - `Compiler Version` as `0.4.17`
  - `License Type` as `Whatever Your's Requirement`
- Click `Continue` and put `Contract Code` from `Remix IDE` or [Gist](https://gist.github.com/bmshamsnahid/05005b4c1e9c402e521be8b56d8050f2)
- Click `Verify and Publish` and you should get the `Contract Byte Code` and `Contract ABI`
- Store the `Contract Byte Code` and `Contract ABI` for future use

#### Clone Repo

```
git clone https://github.com/bmshamsnahid/Decentralized-Lottery-App
```

#### Enable Environment

```
> Make sure `node.js` is installed. To check version, use `node -v`. This is tested in node 8, 10, 11 and 12
```

```
> In `\config` directory, create file `dev.js` and put local db url with username and password. An example is provide in the same directory named `example-dev.js`
```

```
> To use your own contract, update the `/ui/src/contractConfig.js` as your `Contract Address` and `Contract ABI`
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

- Run application without web3
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
