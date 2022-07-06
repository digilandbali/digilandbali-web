import {createAlchemyWeb3} from '@alch/alchemy-web3';

const contractABI = require('../../contracts/LBSFragment.json');
const usdcContractABI = require('../../contracts/USDC.json');

export const approveUSDC = async amount => {
  const contractAddress = '0xed7e99e9ac159152DDcD6699F716482a2DAF5831';
  const usdcContractAddress = '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b';

  const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;
  const web3 = createAlchemyWeb3(alchemyKey);

  if (window.ethereum) {
    try {
      window.usdcContract = await new web3.eth.Contract(usdcContractABI, usdcContractAddress);

      const currentAccount = await window.ethereum.selectedAddress;

      const usdcDecimals = await window.usdcContract.methods.decimals().call();

      const transactionParameters = {
        from: currentAccount,
        value: amount,
      };

      let isSuccess = false;

      await window.usdcContract.methods
        .approve(contractAddress, web3.utils.toBN(amount * 10 ** usdcDecimals))
        .send({from: currentAccount})
        .on('confirmation', (confirmationNumber, receipt) => {
          if (confirmationNumber === 0) {
            isSuccess = receipt.status;
          }
        })
        .on('error', console.error);

      return isSuccess;
    } catch (error) {
      console.log({error});
      return false;
    }
  }
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const obj = {
        status: '🦊 Metamask connected.',
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        status: 'an error occured',
        address: '',
      };
    }
  } else {
    return {
      address: '',
      status: 'please install metamask',
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: '🦊 Metamask connected.',
        };
      } else {
        return {
          address: '',
          status: '🦊 Connect to Metamask using the top right button.',
        };
      }
    } catch (err) {
      return {
        address: '',
        status: '😥 an error occured',
      };
    }
  } else {
    return {
      address: '',
      status: 'please install metamask',
    };
  }
};

export const mintDigilandNFT = async quantity => {
  const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;
  const web3 = createAlchemyWeb3(alchemyKey);

  const contractAddress = '0xed7e99e9ac159152DDcD6699F716482a2DAF5831';

  const tokenId = 1; // Active stage

  //load smart contract
  window.contract = await new web3.eth.Contract(contractABI.abi, contractAddress); //loadContract();

  const currentAccount = await window.ethereum.selectedAddress;
  const price = await window.contract.methods.getPrice('1').call();

  //set up your Ethereum transaction
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: currentAccount, // must match user's active address.
    data: window.contract.methods.mint(tokenId, quantity, '0x00').encodeABI(), //make call to NFT smart contract
  };

  //sign transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    return {
      success: true,
      status: (
        <a href={`https://rinkeby.etherscan.io/tx/${txHash}`}>
          ✅ Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/${txHash}
        </a>
      ),
    };
  } catch (error) {
    return {
      success: false,
      status: '😥 Something went wrong: ' + error.message,
    };
  }
};
