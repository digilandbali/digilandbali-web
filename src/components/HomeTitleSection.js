/* eslint-disable @next/next/no-img-element */
import {useRef} from 'react';
import {animated} from 'react-spring';

import styles from '../../styles/HomeTitleSection.module.css';
import {borderWidth, fadeIn, fadeInUpText} from '../animation';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const HomeTitleSection = ({
  type,
  imageURL,
  imageAlt,
  miniText,
  descText,
  topLeftText,
  topRightText,
  children,
}) => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  return (
    <div className={styles.container}>
      <div className="overflow-hidden">
        <animated.div className={styles.top} ref={triggerRef} style={fadeInUpText(visible)}>
          <div className={styles.left}>{topLeftText}</div>
          <div className={styles.right}>
            {topRightText}
            <span className={styles.dot}>.</span>
          </div>
        </animated.div>
      </div>
      <div className="w-full inline-block">
        <animated.div
          className={styles.border}
          ref={triggerRef}
          style={borderWidth(visible)}
        ></animated.div>
      </div>
      <animated.div ref={triggerRef} style={fadeIn(visible)}>
        {type === 'leftImage' ? (
          <div
            className={`${styles.bottomLeftImage} ${styles.bottom}`}
            style={{alignItems: imageURL ? 'center' : 'flex-start'}}
          >
            <div className={styles.left}>
              {imageURL ? (
                <div className={styles.imageContainer}>
                  <img src={imageURL} className={styles.image} alt={imageAlt} />
                </div>
              ) : null}
              <div
                className={`${styles.miniText} ${
                  imageURL ? 'desktop:text-[14px]' : 'desktop:text-[16px]'
                }`}
              >
                {miniText}
              </div>
            </div>
            <div className={styles.right}>{descText}</div>
          </div>
        ) : type === 'topImage' ? (
          <div className={`${styles.bottomTopImage} ${styles.bottom}`}>
            <div className={styles.left}>
              {imageURL ? (
                <div className={styles.imageContainer}>
                  <img src={imageURL} className={styles.image} alt={imageAlt} />
                </div>
              ) : null}
            </div>
            <div className={styles.right}>{descText}</div>
          </div>
        ) : type === 'custom' ? (
          children
        ) : null}
      </animated.div>
    </div>
  );
};

export default HomeTitleSection;
