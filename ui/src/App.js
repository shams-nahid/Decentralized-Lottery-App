import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import contractInfo from './contractConfig';

class App extends React.Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    balanceEther: '',
    value: '',
    message: '',
    isMetaMaskPluginAvailable: false,
    isTransactionIsRunning: false,
    startWarning: false,
    errorMessage: ''
  };

  async componentDidMount() {
    const isMetaMaskPluginAvailable = web3 && lottery;
    this.setState({ isMetaMaskPluginAvailable });
    this.updateContractInfo();
  }

  async updateContractInfo() {
    fetch('/api/contract-info')
      .then(res => res.json())
      .then(({ manager, players, balanceWei: balance, balanceEther }) => {
        this.setState({ manager, players, balance, balanceEther });
      })
      .catch(console.log);
  }

  onSubmit = async event => {
    event.preventDefault();
    this.setState({
      errorMessage: ''
    });
    const { isMetaMaskPluginAvailable } = this.state;
    if (!isMetaMaskPluginAvailable) {
      return this.metaMaskNotAvailable();
    }

    await window.ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    this.setState({
      message: 'Transaction is processing. This might take 12 to 30 seconds.',
      isTransactionIsRunning: true
    });
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });
      this.updateContractInfo();
      this.setState({
        message: 'You entered to the lottery',
        value: ''
      });
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
    this.setState({ isTransactionIsRunning: false });
  };

  onClickPickWinner = async event => {
    event.preventDefault();
    const { isMetaMaskPluginAvailable } = this.state;
    if (!isMetaMaskPluginAvailable) {
      return this.metaMaskNotAvailable();
    }

    await window.ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    this.setState({
      message: 'Transaction is processing. This might take 9 to 15 seconds.',
      isTransactionIsRunning: true
    });

    try {
      await lottery.methods.pickWinner().send({
        from: accounts[0]
      });
    } catch (ex) {}

    this.setState({
      message: 'Winner picked'
    });

    this.setState({ isTransactionIsRunning: false });
  };

  metaMaskNotAvailable = () => {
    this.setState({
      startWarning: true
    });
  };

  onClickUpdateAnnouncement = () => {
    this.updateContractInfo();
  };

  mainWindow() {
    const {
      isMetaMaskPluginAvailable,
      startWarning,
      errorMessage
    } = this.state;
    return (
      <div className='container-contact100'>
        <div className='wrap-contact100'>
          <form
            onSubmit={this.onSubmit}
            className='contact100-form validate-form'
          >
            <span className='contact100-form-title'>Try Your Luck</span>
            {!isMetaMaskPluginAvailable && !startWarning && (
              <div className='metamask-not-found'>Metamask Not Found</div>
            )}
            {!isMetaMaskPluginAvailable && startWarning && (
              <div className='metamask-not-found warning'>
                Metamask Not Found
              </div>
            )}
            {errorMessage && (
              <div className='metamask-not-found error-message'>
                {errorMessage}
              </div>
            )}
            {this.inputForm()}
            {this.announcements()}
          </form>
          {this.rules()}
        </div>
      </div>
    );
  }

  rules() {
    return (
      <div className='contact100-more flex-col-c-m'>
        <div className='flex-w size1 p-b-47'>
          <div className='txt1 p-r-25'>
            <span className='lnr lnr-book'></span>
          </div>

          <div className='flex-col size2'>
            <span className='txt1 p-b-20'>Decentralized Lottery App</span>

            <span className='txt2'>
              This lottery contract has a prize pool and a list of people who
              have entered the prize pool. People send some amount of
              money(ether) in the contract. As soon as people send some amount
              of money, they are being recorded as a player. Ethers, that the
              players send, directly goes to the contract account. After a
              certain times, contract manager make the contract to pick a
              winner. Then the contract pick a winner randomly and transfer all
              money from the prize pool to the winner. At that point, the
              lottery contract resets and becomes ready to accept a new list of
              players.
            </span>

            <div className='contract-info-container'>
              <div>Contract Address: {contractInfo.contractAddress}</div>
              <div>
                Monitor Contract Transaction in{' '}
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='remote-link'
                  href='https://rinkeby.etherscan.io/tx/0x3349da25727612e32d292b2fd1f1d2ac5d07b35b9b0f62f356f60d3aa65c6241'
                >
                  EtherScan
                </a>
              </div>
              <div>
                Source Code:{' '}
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='remote-link'
                  href='https://github.com/bmshamsnahid/Decentralized-Lottery-App'
                >
                  Github
                </a>
              </div>
              <div>
                Inspired from{' '}
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='remote-link'
                  href='https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide'
                >
                  Stephen Grider Course
                </a>
              </div>
              <div>
                Powered By{' '}
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='remote-link'
                  href='https://www.ethereum.org/'
                >
                  Ethereum Network
                </a>
              </div>
              <div>
                Developed By{' '}
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='remote-link'
                  href='https://shams-nahid.herokuapp.com/'
                >
                  Shams Nahid
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  announcements() {
    const { manager, players, balanceEther } = this.state;
    return (
      <div className='announcement-container'>
        <div className='announcement-title'>
          Announcements
          <div
            className='refresh-button'
            onClick={this.onClickUpdateAnnouncement}
          >
            <span className='refresh-text'>Update Announcements</span>
            <span className='lnr lnr-sync refresh-icon'></span>
          </div>
        </div>
        <div className='announcement-section'>
          <span className='lnr lnr-bullhorn announcement-icon'></span>
          <div className='announcement-status'>
            Minimum <span className='marked-number'>0.10</span> ether is
            required.
          </div>
        </div>
        <div className='announcement-section'>
          <span className='lnr lnr-bullhorn announcement-icon'></span>
          <div className='announcement-status'>
            The contract is managed by{' '}
            <span className='manager-address'>{manager}</span>.
          </div>
        </div>
        <div className='announcement-section'>
          <span className='lnr lnr-bullhorn announcement-icon'></span>
          <div className='announcement-status'>
            Total <span className='marked-number'>{players.length}</span>{' '}
            players already joined here.
          </div>
        </div>
        <div className='announcement-section'>
          <span className='lnr lnr-bullhorn announcement-icon'></span>
          <div className='announcement-status'>
            You may win <span className='marked-number'>{balanceEther}</span>{' '}
            ether !!!.
          </div>
        </div>
        <div className='manager-section'>
          <div className='manager-warning'>(Only For Contract Manager)</div>
          <button onClick={this.onClickPickWinner} className='custom-button'>
            Pick Winner
          </button>
        </div>
      </div>
    );
  }

  inputForm() {
    return (
      <div>
        <div className='wrap-input100 validate-input'>
          <input
            id='email'
            className='input100'
            type='text'
            name='email'
            placeholder='Example: 0.50'
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
          />
          <span className='focus-input100'></span>
        </div>
        <div className='container-contact100-form-btn'>
          <button className='contact100-form-btn'>Join</button>
        </div>
        <span className='network-warning'>
          This app is running on Rinkeby test network and dealing with fake
          ether.
        </span>
      </div>
    );
  }

  render() {
    const { isTransactionIsRunning, message } = this.state;
    return (
      <LoadingOverlay active={isTransactionIsRunning} spinner text={message}>
        {this.mainWindow()}
      </LoadingOverlay>
    );
  }
}

export default App;
