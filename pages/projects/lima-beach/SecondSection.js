import Image from 'next/image';

import styles from '../../../styles/limabeach/SecondSection.module.css';
import FirstSubSection from './FirstSubSection';
import FourthSubSection from './FourthSubSection';
import SecondSubSection from './SecondSubSection';
import ThirdSubSection from './ThirdSubSection';

const SecondSection = () => {
  return (
    <div className={styles.root}>
      <FirstSubSection />
      <SecondSubSection />
      <ThirdSubSection />
      <FourthSubSection />
      <div className={styles.tokenDistributionContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={'/Roadmap.svg'}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.roadmapContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={'/Token_Distribution.svg'}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
