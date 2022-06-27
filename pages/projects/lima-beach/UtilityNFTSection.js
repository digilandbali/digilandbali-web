import {useRef} from 'react';
import {animated} from 'react-spring';

import {borderWidth, fadeIn, fadeInUpText} from 'src/animation';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import sharedStyles from 'styles/limabeach/SharedStyles.module.css';
import styles from 'styles/limabeach/UtilityNFTSection.module.css';

const UtilityNFTSection = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  return (
    <>
      <div
        className={`${sharedStyles.flexColumnStartContainer} ${sharedStyles.flexOrder2} ${styles.root}`}
      >
        <div className="overflow-hidden">
          <animated.div
            className={sharedStyles.sectionTitleBig}
            ref={triggerRef}
            style={fadeInUpText(visible)}
          >
            Decentralized NFT Developer Property with Apartments as Utility
            <span className={sharedStyles.titleDot}>.</span>
          </animated.div>
        </div>
        <div className="w-full inline-block">
          <animated.div
            className={sharedStyles.titleBorder}
            ref={triggerRef}
            style={borderWidth(visible)}
          ></animated.div>
        </div>

        <animated.div className={styles.imageDimension} ref={triggerRef} style={fadeIn(visible)}>
          <img src={'/Videopreview.svg'} alt="video preview" />
        </animated.div>
        <div className="flex flex-col items-start gap-[32px] w-full h-auto">
          <div className={styles.descContainer}>
            <div className={styles.descInnerContainer}>
              {' '}
              <div className={styles.titleMedium}>Property with Developer Price</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
                adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
                at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
              </div>
            </div>
            <div className={styles.descInnerContainer}>
              <div className={styles.titleMedium}>Smart Apartment, IoT Connected</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
                adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
                at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
              </div>
            </div>
          </div>
          <div className={styles.descContainer}>
            <div className={styles.descInnerContainer}>
              <div className={styles.titleMedium}>Free 60 Years of Hospitality Management</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
                adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
                at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
              </div>
            </div>
            <div className={styles.descInnerContainer}>
              <div className={styles.titleMedium}>Fully Furnished, Panoramic View</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
                adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
                at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UtilityNFTSection;
