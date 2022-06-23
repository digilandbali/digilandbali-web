import Image from 'next/image';

import styles from '../../../styles/limabeach/SecondSection.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';
import AboutLimaBeachSection from './AboutLimaBeachSection';
import BluePrintSection from './BluePrintSection';
import FacilitySection from './FacilitySection';
import LuxuryPropertySection from './LuxuryPropertySection';
import MintingStageSection from './MintingStageSection';
import NFTFragmentSection from './NFTFragmentSection';
import PermissiveDocSection from './PermissiveDocSection';
import SmartSysSection from './SmartSysSection';
import TenthSubSection from './TenthSubSection';
import UtilityNFTSection from './UtilityNFTSection';

const SecondSection = () => {
  return (
    <div className={styles.root}>
      <AboutLimaBeachSection />
      <UtilityNFTSection />
      <LuxuryPropertySection />
      <FacilitySection />
      <BluePrintSection />
      <SmartSysSection />
      <PermissiveDocSection />
      <NFTFragmentSection />
      <MintingStageSection />
      <TenthSubSection />
      <div className={styles.tokenDistributionContainer}>
        <div className={styles.tokenDistributionHeaderContainer}>
          <h1 className={sharedStyles.sectionTitleBig}>Token Distribution.</h1>
          <label className={styles.tokenDistributionLabel}>1,771 NFT Fragment</label>
        </div>
        <div style={{width: '1140px', height: '646px', position: 'relative'}}>
          <Image src={'/Chart.svg'} layout="fill" />
        </div>
      </div>
      <div className={styles.roadmapContainer}>
        <div className={styles.roadmapHeaderContainer}>
          <h1 className={sharedStyles.sectionTitleBig}>Lima Beach Signature NFT Roadmap.</h1>
          <label className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
            adipiscing lacus augue gravida et. Vulputate nunc tortor proin adipiscing lacus augue
            gravida et.
          </label>
        </div>
        <div className={styles.imageContainer}>
          <div style={{width: '100%', height: '1368px', position: 'relative'}}>
            <Image src={'/Roadmap.svg'} layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
