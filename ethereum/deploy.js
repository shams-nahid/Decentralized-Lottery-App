// https://rinkeby.etherscan.io/tx/0x52b83e837ff916cddd38c519deda3c1bfeda0fe07afe99b371f42f0e58d7a5b2
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'tube middle glare chimney poet give ship vicious kiss elevator dose silk',
  'https://www.rinkeby.infura.io/v3/c04f7dc3b4094ec3ad5dace989407d87'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account ', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });
  console.log('Contract deployed to ', result.options.address);
};

deploy();
