![diagram](solidity_smart_contract.png)

# Deploy your first smart contract in `Ethereum` network

`Bitcoin` raised the blockchain technology, where `Ethereum` took it to the next level. Often said, `Blockchin 2.0`, `Ethereum` proved the possibility of blockchain technology beyond financial sector. This public blockchain network is famous for allowing the implementation of smart contracts. `Smart Contract` acts as a `locker` where it can be unlocked by certain conditions. `Solidity` programming language can be used to develop these `Smart Contract`.

By the end of this article,

- You will have a deployed smart contract in `Ethereum` network (Rinkeby Testnet)
- You will interact with your smart contract using a react and node app.

## Prerequisite Technologies In Your Machine

- [Node 10.17.0](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [MetaMask](https://metamask.io/)

### Metamask Plugin Installation

Metamask is a pretty neat browser plugin. It allows an end user to interact with a dAPP on `ethethreum` network. With `metamask`, end user do not have to run a `ethereum node`. `Metamask` also handle users `Ethereum Wallet`.

- Install [Chrome Browser](https://www.google.com/chrome/) in your machine
- Go to [Chrome Web Store](https://chrome.google.com/webstore/category/extension) and search for `Metamask`
- Open `Metamask` offered by `https://metamask.io/`
- Click `Add to Chrome` and confirm by `Add Extension`
- Now `Metamask` should be available in your `Chrome Extension` list

### Create Wallet

Using wallet, end users are allowed to send and receive ethers from dApps.

- Open `Metamask` and click `Get Started`
- If you already have a wallet then go to `Import Wallet`
- To create a new wallet go for `Create Wallet`
- Agree with `Privacy Policy`, put password and create the `wallet`
- Reveal and save the `Backup Phrase` in a secure place
- Now go to `Next Section`, select the words according to the phrase
- Now your wallet is `All Set Up`, You should get your `Account Address`

### Connect to `Rinkeby` network and get fake `Ether`

Tesnet like `Rinkeby`, does not deal with actual money. To deploy and make transaction in `ethereum testnet` we will require the fake ether.

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

### Run and Simulate `Contract` through `Remix` Ide

`Remix` is a online ide to create solidity smart contract. It also has feature to `compile`, `run`, `deploy` and `simulate` smart contracts.

- Open [Remix](https://remix.ethereum.org/) IDE.
- Select environment `Solidity`
- Go to `File Explorer` Tab and create a file `Lottery.sol`
- Get the [Contract Code](https://gist.github.com/bmshamsnahid/05005b4c1e9c402e521be8b56d8050f2)
- Go to `Solidity Compiler` Tab and Select
  - `Compiler Version` to `0.4.17`
  - `Language` as `Solidity`
  - `EVM` as `Compiler Default`
- Now click `Compile Lottery.sol`
- You can enable `auto-compile` by `check` the checkbox `Auto Compile`
- Go to `Deploy And Run Transaction` Tab and `Deploy` the contract in local `EVM`
- Your contract functionality will be available in `Deploy And Run Tracsaction` tab, under the `Deployed Contract` section

### Deploy the contract to `Rinkeby Network` through `Remix` Ide

`Testnets` provide developers a place to kick the `smart contract` and `test` before the real assets being involved. These `Testnets` behave very much like the `main-net` and does not require actual money(`ether`). Here we are going to try `Rinkeby Testnet`.

- Make sure you run the `Lottery` contract using previous section instructions
- Open `Metamask`, put the `password` and make sure, you are connected to the `Rinkeby` network.
- Go to `Deployed And Run Transaction` tab and select
  - `Environment` is `Injected Web3`
  - As account, your `Metamask` wallet address should be selected
- Make sure you have enough `ether` in your wallet to deploy the contract
- Now click `Deploy`. This will deploy your `contract` to the `Rinkeby` network.
- In the `Remix IDE`, check `Log Section` and grab the `Transaction Hash` and store it.
- Go to [Ether Scan](https://rinkeby.etherscan.io/) and search for the `Transaction Hash`. You will get the `Deployed Contract Address`. Also this `Contract Address` will be required further.

### Verify and Publish Your Contract(Optional)

Everything on `Ethereum Network` is public, including smart contract `byte-code`. `Byte-code` is low level stuff and very difficult to understand. You can publish your `solidity source code` by `verify and publish` in `ether-scan`. If you want more people to interact with your `smart contract`, you should `verify and publish` your `smart-contract`.

- From [Ether Scan](https://rinkeby.etherscan.io/), search the `Transaction Hash` or `Contract Address` and go to `Contract Details` page
- From `Contract Details`, go to `Contract` tab
- Click `Verify and Publish`, and set
  - `Compiler Type` as `Solidity(Single File)`
  - `Compiler Version` as `0.4.17`
  - `License Type` as `Whatever Your's Requirement`
- Click `Continue` and put `Contract Code` from `Remix IDE` or [Gist](https://gist.github.com/bmshamsnahid/05005b4c1e9c402e521be8b56d8050f2)
- Click `Verify and Publish` and you should get the `Contract Byte Code` and `Contract ABI`
- Store the `Contract Byte Code` and `Contract ABI` for future use

### Clone Repo

This is a `react` app to interact with our `lottery` contract.

```
git clone https://github.com/bmshamsnahid/Decentralized-Lottery-App
```

### Enable Environment

To run the react app, please ensure the following `environment`.

```
> Make sure `node.js` is installed. To check version, use `node -v`. This is tested in node 10.17.0
```

```
>(Optional, only for node.js deployment)  In `\config` directory, create file `dev.js` and put local db url with username and password. An example is provide in the same directory named `example-dev.js`
```

```
> To use your own contract, update the `/ui/src/contractConfig.js` as your `Contract Address` and `Contract ABI`
```

### Run Application

To run your app locally, you do not need a `server`. But for deployment, the `static react app` should be hosted in `node app`.

#### Server

```
> Install server side dependency by `npm i` in the project-root directory. In case you face any problem, use `yarn` package manager.
> Run server by `npm run dev`
> Server is running in `http://localhost:8080`
```

#### Client

```
> Go to `\ui` and install dependencies `npm i`
> Update `api url` to local node app `http://localhost:8080` in `App.js` file.
> Run the front end `npm start`
> Your app is available in `http://localhost:3000`
> Make sure `metamask` is installed
> Make sure you are connected to `Rinkeby` network and have enough ether
```

You are all set to go.

### Test Application

It is important to test your `smart-contract` before deployment.

```
> To install dependency, Go to root directory and run `npm i`
> Invoke unit-test by `npm run test`
```

A deployed version of can be found [here](https://decentralized-lottery-app.herokuapp.com/).

## Wrap Up

For any query, please leave a response below. I will reply as soon possible. Also, you can contact [iXora team](https://ixorasolution.com/contact) for any assistance.

## References:

- [Contract Source Code](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/)
- [Metamask Installation](https://youtu.be/ZIGUC9JAAw8)
- [Ethereum Contract](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/)
- [Verification & publish](https://programtheblockchain.com/posts/2018/01/16/verifying-contract-source-code/)

- [TxAddress](https://rinkeby.etherscan.io/tx/0x3349da25727612e32d292b2fd1f1d2ac5d07b35b9b0f62f356f60d3aa65c6241)

- [Smart Contract Link](https://rinkeby.etherscan.io/address/0x8c9815e2372bc6f9dec915751b31666ab08b2edb)

- [Udemy](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/)

- TxHash: `0x3349da25727612e32d292b2fd1f1d2ac5d07b35b9b0f62f356f60d3aa65c6241`

- From account: `0x612a306d2707cf0B49A5d76594482f7AfCda506c`

- Contract address: `0x8C9815E2372bC6F9Dec915751B31666aB08b2edb`

## Meta text

In this article we will simulate a `solidity smart contract` in `remix IDE`. Then we will cover `test`, `deployment` and `interaction` for the smart contract. For `interaction` we will use the `node` server and `react` library. Also make sure the we remove `read` dependency from `metamask` wallet.
