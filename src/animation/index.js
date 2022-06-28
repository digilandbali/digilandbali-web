/* eslint-disable react-hooks/rules-of-hooks */
import {easings, useSpring} from 'react-spring';

export const fadeIn = visible =>
  useSpring({
    from: {opacity: 0},
    to: {opacity: visible ? 1 : 0},
    delay: 100,
    config: {
      duration: 1200,
    },
  });
export const borderWidth = visible =>
  useSpring({
    from: {width: '0%'},
    to: {width: visible ? '100%' : '0%'},
    delay: 100,
    config: {
      duration: 2000,
      easing: easings.easeOutQuint,
    },
  });
export const fadeInUpText = visible =>
  useSpring({
    from: {opacity: 0, transform: 'translateY(100%)'},
    to: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0%)' : 'translateY(100%)',
    },
    delay: 200,
    config: {
      duration: 800,
    },
  });
export const fadeInLeft = visible =>
  useSpring({
    from: {opacity: 0, display: 'none', transform: 'translateX(-100%)'},
    to: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0%)' : 'translateX(-100%)',
      display: visible ? 'flex' : 'none',
    },
    delay: 100,
    config: {
      duration: 1000,
      easing: easings.easeOutQuint,
    },
  });
export const fadeInRight = visible =>
  useSpring({
    from: {opacity: 0, transform: 'translateX(100%)'},
    to: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0%)' : 'translateX(100%)',
    },
    delay: 100,
    config: {
      duration: 1000,
      easing: easings.easeOutQuint,
    },
  });
export const imageWidth = visible =>
  useSpring({
    from: {
      maxWidth: '200px',
      height: '150px',
      objectFit: 'cover',
    },
    to: {
      maxWidth: visible ? '1366px' : '200px',
      height: visible ? 'auto' : '150px',
      objectFit: visible ? 'auto' : 'cover',
    },
    delay: 100,
    config: {
      duration: 500,
      easing: easings.easeOutQuint,
    },
  });
