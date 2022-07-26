/* eslint-disable @next/next/no-img-element */
import {useRef} from 'react';
import {animated} from 'react-spring';

import styles from '../../styles/limabeach/MintingStage.module.css';
import {borderWidth, fadeIn, fadeInUpText} from '../animation';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const MintingStage = ({
  imageUrl,
  imageAlt,
  title,
  description,
  border = true,
  cropImage = true,
  itemStart = false,
  dot = true,
}) => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  return (
    <div className={styles.container}>
      <div className="hidden tablet:block">
        <animated.div
          ref={triggerRef}
          style={fadeInUpText(visible)}
          className={`${styles.title} ${styles.top}`}
        >
          {title}
          {dot ? <span className={styles.dot}>.</span> : null}
        </animated.div>
        <div className={`w-full inline-block ${border ? '' : 'invisible'}`}>
          <animated.div
            className={styles.border}
            ref={triggerRef}
            style={borderWidth(visible)}
          ></animated.div>
        </div>
      </div>

      <div className={`tablet:flex ${itemStart ? 'tablet:items-start' : 'tablet:items-center'}`}>
        <animated.div ref={triggerRef} style={fadeIn(visible)} className={styles.imageContainer}>
          <img src={imageUrl} className={cropImage ? styles.image : 'w-full'} alt={imageAlt} />
        </animated.div>
        <div className={styles.textContainer}>
          <div className="overflow-hidden">
            <animated.div
              ref={triggerRef}
              style={fadeInUpText(visible)}
              className={`${styles.title} ${styles.bottom}`}
            >
              {title}
              {dot ? <span className={styles.dot}>.</span> : null}
            </animated.div>
            <div className={`w-full inline-block ${border ? '' : 'invisible'}`}>
              <animated.div
                className={styles.border}
                ref={triggerRef}
                style={borderWidth(visible)}
              ></animated.div>
            </div>
          </div>
          <animated.div ref={triggerRef} style={fadeIn(visible)} className={styles.description}>
            {description}
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default MintingStage;
