const express = require('express');
const { web3, lotteryContract: lottery } = require('../utils/web3');

const router = express.Router();

router.get('/', async (req, res) => {
  const manager = await lottery.methods.manager().call();
  const players = await lottery.methods.getPlayers().call();
  const balanceWei = await web3.eth.getBalance(lottery.options.address);
  const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
  return res.send({
    manager,
    players,
    balanceWei,
    balanceEther
  });
});

module.exports = router;
