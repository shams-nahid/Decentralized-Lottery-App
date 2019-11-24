const Web3 = require('web3');
const { infuraAPI, contractAddress } = require('../config/keys');

const provider = new Web3.providers.HttpProvider(infuraAPI);
const web3 = new Web3(provider);

const LotteryABI = require('../ethereum/build/Lottery.json');
const lotteryContract = new web3.eth.Contract(
  JSON.parse(LotteryABI.interface),
  contractAddress
);

module.exports = {
  lotteryContract,
  web3
};
