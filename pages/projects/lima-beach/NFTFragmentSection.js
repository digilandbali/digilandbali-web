import {useRef} from 'react';
import {animated} from 'react-spring';

import {borderWidth, fadeIn, fadeInUpText} from 'src/animation';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import styles from 'styles/limabeach/NFTFragmentSection.module.css';
import sharedStyles from 'styles/limabeach/SharedStyles.module.css';

const NFTFragmentSection = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  return (
    <div className={`${styles.root} ${sharedStyles.flexOrder8}`}>
      <div className="w-full overflow-hidden">
        <animated.div
          className={sharedStyles.sectionTitleBig}
          ref={triggerRef}
          style={fadeInUpText(visible)}
        >
          <div className={sharedStyles.sectionTitleBig}>
            Lima Beach NFT Fragments<span className={sharedStyles.titleDot}>.</span>
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
      <div className={styles.imageDescContainer}>
        <animated.div className={styles.imageContainer} ref={triggerRef} style={fadeIn(visible)}>
          <img
            src={'/image-removebg-preview_1_1.svg'}
            className={sharedStyles.responsive}
            alt="NFT Fragment image illustration"
          />
        </animated.div>
        <div className={styles.imageDescTextContainer}>
          <h1 className={styles.descTitle}>
            7 NFT fragments would equal 1 luxury service apartment with a 58-years leasehold.
          </h1>
          <div className={styles.descText}>
            One NFT Fragment will represent a one-seventh (1/7) ownership of the apartment leasehold
            that when collected can be fusioned. To get one whole leasehold, a leaseholder would
            need to have seven NFT fragments to combine into one NFT Apartment or one NFT Skyvilla.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTFragmentSection;
