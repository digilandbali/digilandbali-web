import {useRef} from 'react';
import {animated} from 'react-spring';

import {fadeIn} from 'src/animation';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import styles from 'styles/limabeach/SectionBreak.module.css';

const SectionBreak = () => {
  const images = [
    {
      src: '/Tendermint.svg',
    },
    {
      src: '/Fanthom.svg',
    },
    {
      src: '/Tendermint.svg',
    },
  ];

  const triggerAnimation = {
    sectionBreak: useRef(),
  };

  const visibleAnimation = {
    sectionBreak: useIntersectionObserver(triggerAnimation.sectionBreak, {})?.isIntersecting,
  };

  return (
    <>
      <animated.div
        className={styles.root}
        ref={triggerAnimation.sectionBreak}
        style={fadeIn(visibleAnimation.sectionBreak)}
      >
        {images.map((image, i) => (
          <div key={`${image.src}-${i}`}>
            <img src={image.src} alt={`${image.src} logo`} />
          </div>
        ))}
      </animated.div>
    </>
  );
};

export default SectionBreak;
