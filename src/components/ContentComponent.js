import React from "react";

import Image from "next/image";
import styles from "../../styles/ContentComponent.module.css";
import buttonStyles from "../../styles/Button.module.css";

import { InfoCircle } from "iconsax-react";

const ContentComponent = ({
  onIncrement,
  onDecrement,
  onChangeReferralCode,
  referralCode,
  onChangeQuantity,
  quantity,
  mintedQuantity,
  maxQuantity,
  walletAddress,
  mintStatus,
  onMintPressed,
  USDCApproved = false,
  onUSDCApprovalPressed,
}) => {
  return (
    <div id="content">
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <Image
            src="/Hexagon.svg"
            alt="NFT-display"
            height={180}
            width={180}
          />
          <h3>LIMA BEACH NFT</h3>
          <div>
            <p>Mint Price</p>
            <p>2000 USDC</p>
          </div>
          <div>
            <p>Total Supply</p>
            <p>250/250</p>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.rightColumnContent}>
            <div className={styles.header}>
              <h1>PUBLIC SALE STAGE 1</h1>
              <label className={styles.greyedOutLabel700}>
                {`${mintedQuantity}/${maxQuantity} Minted`}{" "}
                <span>Stage 1 supply left</span>
              </label>
            </div>

            <div className={styles.inputMint}>
              <input
                className={styles.inputReferralCode}
                type="text"
                name="referral-code"
                id="referral-code"
                placeholder="Input Referral Code (Optional)"
                value={referralCode}
                onChange={onChangeReferralCode}
              />

              <div className={styles.containerReferralCode}>
                <div style={{ display: "flex" }}>
                  <button
                    className={styles.incrementorButton}
                    onClick={onDecrement}
                  >
                    <span style={{ color: "black" }}>−</span>
                  </button>
                  <input
                    type="number"
                    name="input-mint-quantity"
                    className={styles.inputQuantity}
                    value={quantity}
                    onChange={onChangeQuantity}
                  ></input>
                  <button
                    className={styles.incrementorButton}
                    onClick={onIncrement}
                  >
                    <span style={{ color: "black" }}>+</span>
                  </button>
                </div>
                <label>
                  Total <span>6,000 USDC</span>
                </label>
              </div>

              <div>
                <input type="checkbox" id="tnc" name="tnc" value="Agreed" />
                <label htmlFor="tos">
                  I agree with{" "}
                  <a href="" style={{ color: "#406aff" }}>
                    terms and conditions
                  </a>
                </label>
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <button
                className={
                  USDCApproved
                    ? `${buttonStyles.buttonOutlined} ${buttonStyles.buttonOutlinedSuccess}`
                    : buttonStyles.buttonOutlined
                }
                onClick={onUSDCApprovalPressed}
                disabled={walletAddress.length > 0 ? false : true}
              >
                <span>Allow Digilandbali to trade your USDC</span>
                <InfoCircle
                  color={
                    walletAddress.length === 0
                      ? "#808080"
                      : USDCApproved
                      ? "#76ce8a"
                      : "#1f50ff"
                  }
                  size="16"
                />
              </button>
              <button
                onClick={onMintPressed}
                disabled={quantity > 0 ? false : true}
              >
                <span>Mint Now</span>
              </button>
            </div>

            <label>{mintStatus}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
