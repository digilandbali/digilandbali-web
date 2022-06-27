import {useRef} from 'react';
import {animated} from 'react-spring';

import {Import} from 'iconsax-react';
import {borderWidth, fadeIn, fadeInUpText} from 'src/animation';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import styles from 'styles/limabeach/PermissiveDocSection.module.css';
import sharedStyles from 'styles/limabeach/SharedStyles.module.css';

const PermissiveDocSection = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  return (
    <div
      className={`${sharedStyles.flexColumnStartContainer} ${sharedStyles.flexOrder7} ${styles.root}`}
    >
      <div className="w-full overflow-hidden">
        <div className={styles.headerContainer}>
          <div className={styles.topHeaderContainer}>
            <animated.div
              className="flex justify-center"
              ref={triggerRef}
              style={fadeInUpText(visible)}
            >
              <div className={sharedStyles.sectionTitleBig}>
                Permissive Document<span className={sharedStyles.titleDot}>.</span>
              </div>
              <div className={styles.linkWrapper}>
                <Import color="#BBCDFB" variant="Linear" size={24} />
                <a href="" style={{color: '#BBCDFB'}}>
                  Download Set of Document
                </a>
              </div>
            </animated.div>
          </div>
          <div className="w-full inline-block">
            <animated.div
              className={sharedStyles.titleBorder}
              ref={triggerRef}
              style={borderWidth(visible)}
            ></animated.div>
          </div>
        </div>
      </div>
      <div className={styles.headerText}>
        An Indonesian company is set up as a Special Purpose Vehicle (SPV) to hold the physical
        apartment certificate. SPV will put the certificate in the Safe Deposit Box for 60 years
        (the SPV will have a 30 years leasehold rights for the first license and renew/extend the
        leasehold rights for 30 years). All the NFT Buyers can cross-check the legal proof with the
        public notary.
      </div>
      <div className={styles.imageDescContainer}>
        <div className={styles.singleImageContainer}>
          <animated.div className={styles.imageContainer} ref={triggerRef} style={fadeIn(visible)}>
            <img
              src={'/Cert1.svg'}
              className={styles.responsiveImg}
              alt="cerficate 1 illustration"
            />
          </animated.div>
          <h1 className={styles.imageTitle}>Leasehold Documents</h1>
          <div className={styles.imageBorder}></div>
          <div className={styles.imageText}>
            The fourth stage will auction NFT fragments for eight months, and participants of the
            auction will have
          </div>
        </div>
        <div className={styles.singleImageContainer}>
          <animated.div className={styles.imageContainer} ref={triggerRef} style={fadeIn(visible)}>
            <img
              src={'/Cert2.svg'}
              className={styles.responsiveImg}
              alt="certificate 2 illustration"
            />
          </animated.div>
          <h1 className={styles.imageTitle}>Land Certificate</h1>
          <div className={styles.imageBorder}></div>
          <div className={styles.imageText}>
            The fourth stage will auction NFT fragments for eight months, and participants of the
            auction will have
          </div>
        </div>
        <div className={styles.singleImageContainer}>
          <animated.div className={styles.imageContainer} ref={triggerRef} style={fadeIn(visible)}>
            <img
              src={'/Cert3.svg'}
              className={styles.responsiveImg}
              alt="certificate 3 illustration"
            />
          </animated.div>
          <h1 className={styles.imageTitle}>Time Share</h1>
          <div className={styles.imageBorder}></div>
          <div className={styles.imageText}>
            The fourth stage will auction NFT fragments for eight months, and participants of the
            auction will have
          </div>
        </div>
        <div className={styles.linkWrapperInvisible}>
          <Import color="#BBCDFB" variant="Linear" size={24} />
          <a href="" style={{color: '#BBCDFB'}}>
            Download Set of Document
          </a>
        </div>
      </div>
    </div>
  );
};

export default PermissiveDocSection;
