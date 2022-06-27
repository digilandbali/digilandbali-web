import {useRef} from 'react';
import {animated} from 'react-spring';

import styles from '../../../styles/limabeach/LuxuryPropertySection.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';

import {borderWidth, fadeIn, fadeInUpText} from 'src/animation';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';

const LuxuryPropertySection = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  return (
    <>
      <div
        className={`${sharedStyles.flexColumnStartContainer} ${sharedStyles.flexOrder3} ${styles.root}`}
      >
        <div className="overflow-hidden">
          <animated.div
            className={sharedStyles.sectionTitleBig}
            ref={triggerRef}
            style={fadeInUpText(visible)}
          >
            Luxury Property with Developer Price<span className={sharedStyles.titleDot}>.</span>
          </animated.div>
        </div>
        <div className="w-full inline-block">
          <animated.div
            className={sharedStyles.titleBorder}
            ref={triggerRef}
            style={borderWidth(visible)}
          ></animated.div>
        </div>
        <div className="flex flex-col gap-8 tablet:gap-12 desktop:gap-16">
          <div className={styles.imageDescContainer}>
            <animated.div
              className={styles.imageContainer}
              ref={triggerRef}
              style={fadeIn(visible)}
            >
              <img src={'/NFTapart.svg'} className={styles.img} alt="NFT apartment image" />
            </animated.div>
            <div className={styles.paragraphContainer}>
              {' '}
              <div className={styles.titleSmall}>NFT Apartments</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
                adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
                at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
              </div>
              <div className={styles.labelDescContainer}>
                <div>60 m2</div>
                <div>Download blueprint</div>
              </div>
            </div>
          </div>
          <div className={styles.imageDescContainer}>
            <div className={styles.imageContainer}>
              <img src={'/NFTskyvila.svg'} className={styles.img} alt="NFT Skyvilla image" />
            </div>
            <div className={styles.paragraphContainer}>
              {' '}
              <div className={styles.titleSmall}>NFT Skyvilla</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
                adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
                at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
              </div>
              <div className={styles.labelDescContainer}>
                <label>120 m2</label>
                <label>Download blueprint</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxuryPropertySection;
