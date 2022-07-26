/* eslint-disable @next/next/no-img-element */
import {useMediaQuery} from '@mui/material';

import {useRef} from 'react';
import {animated} from 'react-spring';

import Link from 'next/link';

import {fadeInLeft, fadeInRight} from '../../src/animation';
import useIntersectionObserver from '../../src/hooks/useIntersectionObserver';
import styles from '../../styles/HomeSection.module.css';

const HomeSection = () => {
  // animation trigger
  const triggerAnimation = {
    floatTextLeft: useRef(),
    floatTextRight: useRef(),
  };

  // visible on viewport
  const visibleAnimation = {
    floatTextLeft: useIntersectionObserver(triggerAnimation.floatTextLeft, {
      threshold: 1,
      rootMargin: '-40%',
    })?.isIntersecting,
    floatTextRight: useIntersectionObserver(triggerAnimation.floatTextRight, {rootMargin: '0%'})
      ?.isIntersecting,
  };

  const isTab = useMediaQuery('(max-width: 919px)', {noSsr: true});

  return (
    <section id="home" className="pt-12">
      <div>
        <div className={styles.titleBig}>DIGILANDBALI</div>
        <div className={styles.subtitle}>WE BUILD TOGETHER, WE OWN TOGETHER</div>
        <div className={`${styles.buttonContainer} ${styles.top}`}>
          <Link href="/#home" passHref>
            <button className={`${styles.button} ${styles.buttonWhite}`}>About Digilandbali</button>
          </Link>
          <Link href="/projects/lima-beach" passHref>
            <button className={styles.button}>Visit Lima Beach Project</button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <animated.div
          className={`${styles.floatingTextContainer} ${styles.floatingText} ${styles.top}`}
          style={fadeInLeft(visibleAnimation.floatTextLeft)}
        >
          <div className={styles.title}>NFT Property Developer</div>
          <div className={styles.subtitle}>
            Build decentralized property blockchain at developer prices in Bali ― To Build With And
            For The Community.
          </div>
        </animated.div>
        <div ref={triggerAnimation.floatTextLeft}></div>
        <div className="w-full mb-8">
          <img
            src={isTab ? '/Home/Home-min.png' : '/Home/Home-min.png'}
            className="w-[80%] h-auto mx-auto"
            alt="HomePicture"
          />
        </div>
        <animated.div
          className={`${styles.floatingTextContainer} ${styles.floatingText} ${styles.bottom}`}
          style={fadeInRight(visibleAnimation.floatTextRight)}
          ref={triggerAnimation.floatTextRight}
        >
          <div className={styles.title}>Apartment and Skyvillas</div>
          <div className={styles.subtitle}>
            Own NFT property in Canggu, Bali with Smart Technology and 60 years of service for free.
          </div>
        </animated.div>
      </div>
      <div className={`${styles.buttonContainer} ${styles.bottom}`}>
        <button className={`${styles.button} ${styles.buttonWhite}`}>About Digilandbali</button>
        <button className={styles.button}>Visit Lima Beach Project</button>
      </div>
      <div className={styles.imageUnionContainer}>
        <img src="/Union.svg" className={styles.imageUnion} alt="HomePicture" />
      </div>
    </section>
  );
};

export default HomeSection;
