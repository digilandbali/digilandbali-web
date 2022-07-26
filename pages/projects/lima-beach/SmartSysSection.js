import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';
import styles from '../../../styles/limabeach/SmartSysSection.module.css';

const SmartSysSection = () => {
  return (
    <div className={`${styles.smartSystemContainer} ${sharedStyles.flexOrder6}`}>
      <div className={styles.smartSystemHeaderContainer}>
        <h1 className={`${sharedStyles.sectionTitleBig} text-center `}>
          Smart Systems Part of the Experience<span className={sharedStyles.titleDot}>.</span>
        </h1>
        <div className={styles.subtitleContainer}>
          <div className={sharedStyles.subtitleWrapper}>
            Smart hotel automation solution powered by Digihome gives you personalized experience,
            <br />
            efficient operations and management
          </div>
        </div>
      </div>
      <div className={styles.smartSystemDescContainer}>
        <div className="hidden tablet:flex tablet:flex-col tablet:justify-center tablet:gap-12 tablet:max-h-[300px]">
          <div className={styles.descContainer}>
            <h1 className="text-[#E2E2E2]">Connection</h1>
            <div className="text-[#E2E2E2]">Connect automation systems.</div>
          </div>
          <div className={styles.descContainer}>
            <h1 className="text-[#E2E2E2]">User Friendly</h1>
            <div className="text-[#E2E2E2]">Easily connect and install.</div>
          </div>
          <div className={styles.descContainer}>
            <h1 className="text-[#E2E2E2]">Functional</h1>
            <div className="text-[#E2E2E2]">Smart integrated functions.</div>
          </div>
        </div>
        <div className={styles.smartSystemMidDescContainer}>
          <div className={styles.imageContainer}>
            <img
              src={'/Smart_System.svg'}
              className={sharedStyles.responsive}
              alt="Smart system illustration"
            />
          </div>
        </div>
        <div className="hidden tablet:flex tablet:flex-col tablet:justify-center tablet:gap-12 tablet:max-h-[300px]">
          <div className={styles.descContainer}>
            <h1 className="text-[#E2E2E2]">Smart</h1>
            <div className="text-[#E2E2E2]">Smart Control and experience</div>
          </div>
          <div className={styles.descContainer}>
            <h1 className="text-[#E2E2E2]">Green</h1>
            <div className="text-[#E2E2E2]">Response to energy saving experience</div>
          </div>
          <div className={styles.descContainer}>
            <h1 className="text-[#E2E2E2]">Safe</h1>
            <div className="text-[#E2E2E2]">Globally certified products and services</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartSysSection;
