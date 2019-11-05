import web3 from './web3';
import contractInfo from './contractConfig';

const address = contractInfo.contractAddress;
const abi = contractInfo.contractAbi;
const contract = web3 ? new web3.eth.Contract(abi, address) : null;

export default contract;
