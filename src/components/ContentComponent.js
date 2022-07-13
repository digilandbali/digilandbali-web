import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import {useState, useEffect} from 'react';

import {MinusCirlce, AddCircle, TickCircle, InfoCircle} from 'iconsax-react';
import FAQComponent from 'src/components/FAQComponent';
import SocialHandles from 'src/components/SocialHandles';
import {
  mintDigilandNFT,
  connectWallet,
  getCurrentWalletConnected,
} from 'src/helpers/metamask-interact';
import useMintHook from 'src/hooks/use-mint.hooks';
import styles from 'styles/ContentComponent.module.css';

const ContentComponent = () => {
  const {
    verifyAllowance,
    allowUSDC,
    isUSDCApproved,
    editAllowance,
    fetchPrice,
    price,
    fetchBalance,
    fetchActiveStage,
    activeStage,
    balance,
    fetchMaxSupply,
    maxSupply,
    fetchMintedQty,
    mintedQty,
    loading,
  } = useMintHook();

  useEffect(() => {
    verifyAllowance();
    fetchPrice();
    fetchBalance();
    fetchActiveStage();
    fetchMaxSupply();
    fetchMintedQty();
  }, []);

  //TODO: add selector here from state management to read walletAddress
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');

  //TODO: move this into a hook e.g. useWalletHooks
  const fetchCurrentWallet = async () => {
    const {address} = await getCurrentWalletConnected();
    return {address};
  };

  // TODO: move this into a hook e.g. useWalletHooks
  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', accounts => {
        if (accounts.length > 0) {
          window.currentAccount = accounts[0];
          setWallet(accounts[0]);
        } else {
          setWallet('');
          setStatus('🦊 connect to metamask using the top right button.');
        }
      });
    } else {
      setStatus(
        <p>
          {' '}
          🦊{' '}
          <a target="_blank" rel="noopener noreferrer" href={`https://metamask.io/download.html`}>
            you must install metamask, a virtual ethereum wallet, in your browser.
          </a>
        </p>,
      );
    }
  };

  useEffect(() => {
    (async () => {
      const {address} = await fetchCurrentWallet();
      setWallet(address);

      addWalletListener();
    })();
  }, []);

  const [referralCode, setReferralCode] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [mintedQuantity, setMintedQuantity] = useState(0);

  const [, setMintStatus] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  //TODO: fetch USDC balance from metamask
  // const [balance] = useState(200_000);

  //Constant state
  const [maxQuantity] = useState(80);

  const handleMintPressed = async () => {
    if (quantity <= maxQuantity - mintedQuantity) {
      let tempMinted = mintedQuantity + quantity;
      setMintedQuantity(tempMinted);

      const {status} = await mintDigilandNFT(quantity);
      setMintStatus(status);
    }
  };

  const handleDecrement = () => {
    if (quantity !== 0) {
      let decreasedQuantity = quantity - 1;
      setQuantity(decreasedQuantity);
    }
  };

  const handleIncrement = () => {
    let increasedQuantity = quantity + 1;
    setQuantity(increasedQuantity);
  };

  const handleChangeQuantity = e => {
    setQuantity(Number(e.target.value));
  };

  const handleChangeReferralCode = e => {
    setReferralCode(e.target.value);
  };

  const handleConnectWallet = async () => {
    const walletResponse = await connectWallet();

    //TODO: set walletAddress to the state management instead
    setWallet(walletResponse.address);
  };

  const handleAllowUSDC = () => {
    allowUSDC(quantity * price);
    verifyAllowance();
  };

  const isUSDCEnough = () => {
    if (balance < quantity * price) return false;
    return true;
  };

  const handleChangeAgreement = () => {
    setIsAgreed(!isAgreed);
  };

  const handleEditAllowance = () => {
    editAllowance();
  };

  return (
    <div id="content">
      <div className="flex flex-col content-center justify-center min-w-fit tablet:grid tablet:grid-flow-col">
        <div className="flex flex-col items-center p-6 gap-4 text-center bg-[#edf4f7] rounded-t-lg tablet:rounded-tr-none tablet:rounded-l-lg tablet:max-w-max tablet:gap-8 desktop:px-20 desktop:py-14">
          <img src="/Hexagon.svg" alt="NFT image illustration" className="w-45 h-45" />
          <div className="flex flex-col gap-4 tablet:gap-4">
            <div>
              <h3 className="font-bold text-xl tablet:text-base">5 DAYS LEFT!</h3>
            </div>
            <div>
              <p className="font-bold">Mint Price</p>
              <p className="font-normal">{price.toLocaleString()} USDC</p>
            </div>
            <div>
              <p className="font-bold">Stage {activeStage} Supply</p>
              <p className="font-normal">
                {mintedQty}/{maxSupply}
              </p>
            </div>
            <div>
              <p className="font-bold">Total Supply</p>
              <p className="font-normal">1,771</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 tablet:my-auto">
            <SocialHandles />
          </div>
        </div>
        <div className="bg-[#fff] rounded-b-lg p-6 tablet:rounded-bl-none tablet:rounded-r-lg tablet:min-w-fit desktop:px-20 desktop:py-14">
          <div className="flex flex-col gap-2 mb-8 tablet:mb-12">
            <h1 className="font-bold text-2xl uppercase desktop:text-3xl">physical land stage</h1>
            <h3 className="font-semibold text-lg uppercase desktop:text-2xl">
              lima beach signature nft
            </h3>
          </div>

          <div className="flex flex-col gap-4 mb-8 tablet:mb-28">
            <input
              className="rounded-lg border border-[#d0d5dd] p-2 shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
              type="text"
              name="referral-code"
              id="referral-code"
              placeholder="Input Referral Code (Optional)"
              alt="Input Referral Code (Optional)"
              value={referralCode}
              onChange={handleChangeReferralCode}
            />

            <div className={styles.container}>
              <div className="flex py-1 px-2 rounded-lg border border-[#d0d5dd] justify-around">
                <div>
                  <IconButton onClick={handleDecrement}>
                    <MinusCirlce size="20" color="#8f98aa" />
                  </IconButton>
                </div>
                <input
                  type="number"
                  name="input-mint-quantity"
                  className={styles.inputQuantity}
                  value={quantity}
                  onChange={handleChangeQuantity}
                ></input>
                <div>
                  <IconButton onClick={handleIncrement}>
                    <AddCircle size="20" color="#8f98aa" />
                  </IconButton>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-lg border border-[#d0d5dd] py-2 px-4">
                <h4 className="font-bold text-sm whitespace-nowrap">
                  {(price * quantity).toLocaleString()} USDC
                </h4>
              </div>
            </div>

            <div>
              Allowed USDC to trade
              <div className="border border-[EDF4F7] rounded flex justify-end items-center py-2 px-3">
                <TickCircle size="16" color={isUSDCApproved ? '#76CE8A' : '#808080'} />
                <div className="ml-2">{(quantity * price).toLocaleString()}</div>
                <button
                  onClick={handleEditAllowance}
                  className={`ml-auto bg-transparent shadow-none rounded-none p-0 font-medium text-xs ${
                    isUSDCApproved ? 'text-[#436CFF]' : 'text-[#FF1E59]'
                  }`}
                >
                  {isUSDCApproved ? 'Edit Allowance' : 'Cancel'}
                </button>
              </div>
            </div>

            <div className="flex flex-row gap-1">
              <input type="checkbox" id="tnc" name="tnc" onChange={handleChangeAgreement} />
              <label htmlFor="tos">
                I agree with{' '}
                <a href="https://google.com" style={{color: '#406aff'}}>
                  terms and conditions
                </a>
              </label>
            </div>
            <div className="font-normal text-lg text-[#ff4b7b]">
              {isUSDCEnough() ? '' : 'Insufficient balance'}
            </div>
          </div>

          <div className="flex flex-col gap-4 desktop:grid desktop:grid-cols-[1fr_1fr]">
            {walletAddress.length > 0 ? (
              <>
                <button
                  className={isUSDCApproved ? 'outlinedActive' : 'outlined'}
                  disabled={loading ? true : isUSDCApproved ? true : false}
                  onClick={handleAllowUSDC}
                >
                  <>
                    {loading ? (
                      'Loading'
                    ) : isUSDCApproved ? (
                      <>
                        Now you can trade USDC
                        <TickCircle size="16" color="#76CE8A" />
                      </>
                    ) : (
                      <>
                        Allow to trade ${(quantity * price).toLocaleString()} USDC
                        <InfoCircle size="16" color={isUSDCEnough() ? '#1F50FF' : '#bbcdfb'} />
                      </>
                    )}
                  </>
                </button>
                <button
                  className="w-full"
                  onClick={handleMintPressed}
                  disabled={quantity > 0 && isAgreed && isUSDCApproved ? false : true}
                >
                  <span>Mint Now</span>
                </button>{' '}
              </>
            ) : (
              <button className="w-full" onClick={handleConnectWallet}>
                <span>Connect Wallet</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="mt-32">
        <FAQComponent />
      </div>
      <div className="relative w-full h-[120px] my-12 tablet:my-32">
        <img src="/Union.svg" layout="fill" className="w-full h-full relative" alt="tes" />
      </div>
    </div>
  );
};

export default ContentComponent;
