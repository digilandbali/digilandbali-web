import {useRef} from 'react';
import {animated} from 'react-spring';

import {Import, Verify} from 'iconsax-react';
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
        <animated.div
          className="flex justify-start tablet:justify-end"
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
        <div className="w-full inline-block">
          <animated.div
            className={sharedStyles.titleBorder}
            ref={triggerRef}
            style={borderWidth(visible)}
          ></animated.div>
        </div>
      </div>
      <animated.div className="w-full h-auto" ref={triggerRef} style={fadeIn(visible)}>
        <img
          src={'/IMGPermisiveDocument.png'}
          className="w-full h-auto"
          alt="Permissive Doc Section Illustration"
        />
      </animated.div>
      <div className={styles.headerText}>
        <div className="mb-4">
          To what extent does Digilandbali ensure the safety and security of your physical apartment
          authentication certificate?
        </div>
        <div className="mb-4">
          We are aware that crypto users may consider this when determining whether the property
          blockchain you have chosen will meet your security needs. Today, we are pleased to
          announce a prominent Indonesian company will establish the Special Purpose Vehicle (SPV),
          which holds the physical apartment certificate of all the NFT owners.
        </div>
        <div className="mb-4">
          Consequently, the SPV will store the certificate in the Safe Deposit Box for 60 years.
          Whereby, unlike any traditional complicated home sales activities, all NFT buyers can
          cross-check the legal proof verified by a public notary.
        </div>
        <div className="mb-4 italic">
          *The SPV will have 30 years of leasehold rights for the first license, and the leasehold
          rights will be renewed or extended for 30 years
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-start min-w-full gap-4">
          <div className="flex flex-row justify-center items-center gap-3">
            <Verify size="24" color="#4A72FF" />
            <h1 className={styles.imageTitle}>Leasehold Documents</h1>
          </div>
          <div className="w-full my-1 border-2 border-[#5b5b5b]"></div>
          <div className={styles.imageText}>
            NFT's smart contract includes a notarized leasehold agreement with an agreement number.
            All NFT buyers can cross-check legal proof with a notary for transparency. The NFT owner
            has 60 years to use the leasehold, according to the SPV. Address of 1 NFT Apartment
            determines the leasehold rights. If the apartment NFT relocate, so do the leasehold
            rights.
          </div>
        </div>
        <div className="flex flex-col items-start min-w-full gap-4">
          <div className="flex flex-row justify-center items-center gap-3">
            <Verify size="24" color="#4A72FF" />
            <h1 className={styles.imageTitle}>Land Certificate</h1>
          </div>
          <div className="w-full my-1 border-2 border-[#5b5b5b]"></div>
          <div className={styles.imageText}>
            Digilandbali's "NFT Burning" feature helps NFT owners receive a Physical Leasehold
            Rights Certificate from a notary. This certificate grants the NFT owner 58 years of
            leasehold rights and centralised access to the apartment through an IoT app.
          </div>
        </div>
        <div className="flex flex-col items-start min-w-full gap-4">
          <div className="flex flex-row justify-center items-center gap-3">
            <Verify size="24" color="#4A72FF" />
            <h1 className={styles.imageTitle}>Time Share</h1>
          </div>
          <div className="w-full my-1 border-2 border-[#5b5b5b]"></div>
          <div className={styles.imageText}>
            While there will be a total of 1,771 NFT Fragments, each of which will be shown in the
            metadata as an ERC-1155 with a Timeshare Agreement document.
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
