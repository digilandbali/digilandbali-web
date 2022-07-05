import {useRef} from 'react';
import {animated} from 'react-spring';

import {fadeIn, fadeInUpText} from '../../src/animation';
import UpcomingFragmentCard from '../../src/components/UpcomingFragmentCard';
import useIntersectionObserver from '../../src/hooks/useIntersectionObserver';

const FragmentSection = () => {
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
      <div className="pb-8 tablet:pb-14">
        <div className="overflow-hidden">
          <animated.div
            className="text-xl tablet:text-3xl desktop:text-5xl text-[#FFF] font-bold text-center pb-5"
            ref={triggerAnimation.title}
            style={fadeInUpText(visibleAnimation.title)}
          >
            Upcoming Fragment Collection
            <span className="text-xl tablet:text-3xl desktop:text-5xl text-[#406aff] p-0">.</span>
          </animated.div>
        </div>
        <animated.div
          className="text-[12px] tablet:text-[14px] desktop:text-base text-[#E2E2E2] tablet:px-24 text-center"
          ref={triggerAnimation.subtitle}
          style={fadeIn(visibleAnimation.subtitle)}
        >
          When you buy the NFT, you are not merely buying a NFT or a provably-rare piece of art.
          With an exclusive high-end service that offers growing advantages over time, you are
          obtaining physical property ownership. Stay tuned, we will reveal upcoming fragment
          collection sooner than you think.
        </animated.div>
      </div>
      <animated.div
        className="tablet:grid grid-cols-4 gap-4"
        ref={triggerAnimation.content}
        style={fadeIn(visibleAnimation.content)}
      >
        <UpcomingFragmentCard
          type="ongoing"
          title={'LIMA BEACH SIGNATURE NFT'}
          description={'CANGGU, BALI'}
          imageUrl={'/fragment1.svg'}
        />
        <UpcomingFragmentCard imageUrl={'/fragment2.svg'} />
        <UpcomingFragmentCard imageUrl={'/fragment3.svg'} />
        <UpcomingFragmentCard imageUrl={'/fragment4.svg'} />
      </animated.div>
    </section>
  );
};

export default FragmentSection;
