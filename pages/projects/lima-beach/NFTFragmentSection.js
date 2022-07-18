import {useRef} from 'react';
import {animated} from 'react-spring';

import {borderWidth, fadeIn, fadeInUpText} from 'src/animation';
import MintingStage from 'src/components/MintingStage';
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
      <MintingStage
        cropImage={false}
        border={false}
        title="7 NFT fragments worth 1 luxury service apartment with a 58-years leasehold"
        description="Each fragment will let the NFT holders stay in the apartment for up to 30 nights. The
            quotas will be renewes every year for the next 58 years on 31 December 23:59:59 (UTC+8)."
        imageUrl="/limabeach/nft-fragment.png"
        imageAlt="NFT Fragment image illustration"
      />
    </div>
  );
};

export default NFTFragmentSection;
