/* eslint-disable @next/next/no-img-element */
import {useRef} from 'react';
import {animated} from 'react-spring';

import styles from '../../styles/ImageDescComponent.module.css';
import {fadeIn, fadeInUpText} from '../animation';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ImageDescComponent = ({imageUrl, imageAlt, title, description}) => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  return (
    <div className={styles.container}>
      {title ? (
        <animated.div
          ref={triggerRef}
          style={fadeInUpText(visible)}
          className={`${styles.title} ${styles.top}`}
        >
          {title}
          <span className={styles.dot}>.</span>
        </animated.div>
      ) : null}
      <div className="tablet:flex">
        <animated.div ref={triggerRef} style={fadeIn(visible)} className={styles.imageContainer}>
          <img src={imageUrl} className={styles.image} alt={imageAlt} />
        </animated.div>
        <div className={styles.textContainer}>
          {title ? (
            <div className="overflow-hidden">
              <animated.div
                ref={triggerRef}
                style={fadeInUpText(visible)}
                className={`${styles.title} ${styles.bottom}`}
              >
                {title}
                <span className={styles.dot}>.</span>
              </animated.div>
            </div>
          ) : null}
          <animated.div ref={triggerRef} style={fadeIn(visible)} className={styles.description}>
            {description}
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default ImageDescComponent;
