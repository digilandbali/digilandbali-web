import {useRef} from 'react';
import {animated} from 'react-spring';

import {borderWidth, fadeIn, fadeInUpText} from 'src/animation';
import {FirstIcon, SecondIcon, ThirdIcon} from 'src/components/icons/FacilityIcons';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import styles from 'styles/limabeach/MintSection.module.css';
import sharedStyles from 'styles/limabeach/SharedStyles.module.css';

const MintSection = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  return (
    <>
      <div className={styles.root}>
        <div className={styles.headerContainer}>
          <div className="w-full overflow-hidden">
            <animated.div
              className={sharedStyles.sectionTitleBig}
              ref={triggerRef}
              style={fadeInUpText(visible)}
            >
              <div className={sharedStyles.sectionTitleBig}>
                How to Mint<span className={sharedStyles.titleDot}>.</span>
              </div>
            </animated.div>
            <div className="w-full inline-block">
              <animated.div
                className={sharedStyles.titleBorder}
                ref={triggerRef}
                style={borderWidth(visible)}
              ></animated.div>
            </div>
          </div>
        </div>
        <div className={styles.descContainer}>
          <animated.div className={styles.detailContainer} ref={triggerRef} style={fadeIn(visible)}>
            <img
              src={'/NFTInvest.svg'}
              className={sharedStyles.responsive}
              alt="How to mint illustration"
            />
          </animated.div>
          <div className={styles.stepsContainer}>
            <div className={styles.detailContainer}>
              <div className={styles.stepHeaderContainer}>
                <FirstIcon />
                <h1 className={sharedStyles.titleSmall}>Prepare your wallet</h1>
              </div>
              <div className={styles.stepTextContainer}>
                <div className={sharedStyles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor
                  proin adipiscing lacus augue gravida et.
                </div>
              </div>
            </div>
            <div className={styles.detailContainer}>
              <div className={styles.stepHeaderContainer}>
                <SecondIcon />
                <h1 className={sharedStyles.titleSmall}>Get USDC</h1>
              </div>
              <div className={styles.stepTextContainer}>
                <div className={sharedStyles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor
                  proin adipiscing lacus augue gravida et.
                </div>
              </div>
            </div>
            <div className={styles.detailContainer}>
              <div className={styles.stepHeaderContainer}>
                <ThirdIcon />
                <h1 className={sharedStyles.titleSmall}>Go To Minting Page</h1>
              </div>
              <div className={styles.stepTextContainer}>
                <div className={sharedStyles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor
                  proin adipiscing lacus augue gravida et.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintSection;
