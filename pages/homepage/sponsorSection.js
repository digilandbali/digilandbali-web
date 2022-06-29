/* eslint-disable @next/next/no-img-element */
import {useRef} from 'react';
import {animated} from 'react-spring';

import {fadeIn} from '../../src/animation';
import useIntersectionObserver from '../../src/hooks/useIntersectionObserver';
import styles from '../../styles/SponsorSection.module.css';

const SponsorSection = () => {
  // animation trigger
  const triggerAnimation = {
    sponsor: useRef(),
  };

  // visible on viewport
  const visibleAnimation = {
    sponsor: useIntersectionObserver(triggerAnimation.sponsor, {})?.isIntersecting,
  };

  return (
    <section>
      <animated.div
        className={styles.sponsorContainer}
        ref={triggerAnimation.sponsor}
        style={fadeIn(visibleAnimation.sponsor)}
      >
        <div className={styles.imageContainer}>
          <img src="/hah.svg" className={styles.image} alt="HomePicture" />
        </div>
        <div className={styles.imageContainer}>
          <img src="/ftm.svg" className={styles.image} alt="HomePicture" />
        </div>
        <div className={styles.imageContainer}>
          <img src="/hah.svg" className={styles.image} alt="HomePicture" />
        </div>
      </animated.div>
    </section>
  );
};

export default SponsorSection;
