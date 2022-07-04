/* eslint-disable @next/next/no-img-element */
import {useRef} from 'react';
import {animated} from 'react-spring';

import {fadeIn, fadeInUpText} from '../../src/animation';
import useIntersectionObserver from '../../src/hooks/useIntersectionObserver';

const RevealSection = () => {
  // animation trigger
  const triggerAnimation = {
    title: useRef(),
    subtitle: useRef(),
    content: useRef(),
  };

  // visible on viewport
  const visibleAnimation = {
    title: useIntersectionObserver(triggerAnimation.title, {})?.isIntersecting,
    subtitle: useIntersectionObserver(triggerAnimation.subtitle, {})?.isIntersecting,
    content: useIntersectionObserver(triggerAnimation.content, {})?.isIntersecting,
  };

  return (
    <section className="pb-20 tablet:pb-32">
      <div className="pb-14">
        <div className="overflow-hidden">
          <animated.div
            className="text-xl tablet:text-3xl desktop:text-5xl text-[#FFF] font-bold text-center pb-5"
            ref={triggerAnimation.title}
            style={fadeInUpText(visibleAnimation.title)}
          >
            NFT Reveal
            <span className="text-xl tablet:text-3xl desktop:text-5xl text-[#406aff] p-0">.</span>
          </animated.div>
        </div>
        <animated.div
          className="text-[12px] tablet:text-[14px] desktop:text-base text-[#E2E2E2] tablet:px-24 text-center"
          ref={triggerAnimation.subtitle}
          style={fadeIn(visibleAnimation.subtitle)}
        >
          Watch this space if you want to get your hands on one of these exclusive NFT drops, we
          could announce the first one tomorrow.
        </animated.div>
      </div>
      <animated.div
        className="tablet:grid tablet:grid-cols-3 tablet:gap-4"
        ref={triggerAnimation.content}
        style={fadeIn(visibleAnimation.content)}
      >
        <img
          src={'/reveal1.svg'}
          className="w-full h-auto rounded-2 mb-4 tablet:mb-0"
          alt={'tes'}
        />
        <img
          src={'/reveal2.svg'}
          className="w-full h-auto rounded-2 mb-4 tablet:mb-0"
          alt={'tes'}
        />
        <img
          src={'/reveal3.svg'}
          className="w-full h-auto rounded-2 mb-4 tablet:mb-0"
          alt={'tes'}
        />
      </animated.div>
    </section>
  );
};

export default RevealSection;
