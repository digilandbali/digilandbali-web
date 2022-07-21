/* eslint-disable @next/next/no-img-element */
import {useRef} from 'react';
import {animated} from 'react-spring';

import Link from 'next/link';

import {fadeIn} from '../../src/animation';
import useIntersectionObserver from '../../src/hooks/useIntersectionObserver';
import styles from '../../styles/SponsorSection.module.css';

const SponsorSection = (page = 'home') => {
  // animation trigger
  const triggerAnimation = {
    sponsor: useRef(),
  };

  // visible on viewport
  const visibleAnimation = {
    sponsor: useIntersectionObserver(triggerAnimation.sponsor, {})?.isIntersecting,
  };

  return (
    <section className="w-full">
      <animated.div
        className={styles.sponsorContainer}
        ref={triggerAnimation.sponsor}
        style={fadeIn(visibleAnimation.sponsor)}
      >
        <a href="https://samahitagroup.com" target="_blank" rel="noreferrer">
          <div className={styles.imageContainer}>
            <img src="/sponsor/Samahita.png" className={styles.image} alt="Samahita" />
          </div>
        </a>
        <a href="https://blocksphere.id" target="_blank" rel="noreferrer">
          <div className={styles.imageContainer}>
            <img src="/sponsor/Blocksphere.png" className={styles.image} alt="Blocksphere" />
          </div>
        </a>
        <a href="https://www.digitels.com" target="_blank" rel="noreferrer">
          <div className={styles.imageContainer}>
            <img src="/sponsor/Digitels.png" className={styles.image} alt="Digitels" />
          </div>
        </a>
        <a href="https://linktr.ee/cryptomamak_official" target="_blank" rel="noreferrer">
          <div className={styles.imageContainer}>
            <img src="/sponsor/Cryptomamak.png" className={styles.image} alt="Cryptomamak" />
          </div>
        </a>
      </animated.div>
    </section>
  );
};

export default SponsorSection;
