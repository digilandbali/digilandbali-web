/* eslint-disable @next/next/no-img-element */
import {useRef} from 'react';
import {animated} from 'react-spring';

import {fadeIn, imageWidth} from '../../src/animation';
import HomeTitleSection from '../../src/components/HomeTitleSection';
import ImageDescComponent from '../../src/components/ImageDescComponent';
import useIntersectionObserver from '../../src/hooks/useIntersectionObserver';

const AboutSection = () => {
  // animation trigger
  const triggerAnimation = {
    imgLeft: useRef(),
    imgRight: useRef(),
    textCenter: useRef(),
  };

  // visible on viewport
  const visibleAnimation = {
    imgLeft: useIntersectionObserver(triggerAnimation.imgLeft, {threshold: 1})?.isIntersecting,
    imgRight: useIntersectionObserver(triggerAnimation.imgRight, {threshold: 1})?.isIntersecting,
    textCenter: useIntersectionObserver(triggerAnimation.textCenter, {})?.isIntersecting,
  };

  const stage = [
    {
      name: 'STAGE 01',
      desc: 'Physical Land Stage',
    },
    {
      name: 'STAGE 02',
      desc: 'Apartment Foundation Stage',
    },
    {
      name: 'STAGE 03',
      desc: 'Apartment Topping-Off Stage',
    },
    {
      name: 'STAGE 04',
      desc: 'Soft Opening Stage',
    },
  ];

  return (
    <section className="py-10">
      <div className="pb-20 tablet:pb-32">
        <HomeTitleSection
          type={'leftImage'}
          topLeftText={'Who'}
          topRightText={'Digilandbali, NFT Developer Property'}
          imageURL={'/image8.svg'}
          imageAlt={'tes'}
          miniText={'One of the properties that has been built by the developer group'}
          descText={`Digilandbali is built by a team of Blockchain Consultant Experts with over a decade of experience. Being one of Bali's most reputable property developers with over 20 years of expertise, they have also built hotels and other properties including Agra Nusa Villas and the Nest in Benoa, as well as the Sapphire Cliff Resort and Umalas Signature. In particular, the NFT property will be maintained by a world-class management team with more than 25 years of experience.`}
        />
      </div>
      <div className="pb-20 tablet:pb-32">
        <HomeTitleSection
          type={'leftImage'}
          topLeftText={'Why'}
          topRightText={'We build the property together, We own the property together'}
          miniText={'On a mission to make everyone\nbecome a property developer'}
          descText={`Digilandbali is a decentralized property developer with no middleman and no high conventional marketing cost. The idea is to create a viable option for the people who are struggling to own a property because of the high cost and unavailability of liquidity.`}
        />
      </div>
      <div className="pb-20 tablet:pb-32">
        <ImageDescComponent
          imageUrl="/image2.svg"
          imageAlt="Tes"
          title={`Get your fragments, Get your apartments, Live up your investments`}
          description={
            'Digilandbali is on a mission by adding value to daily lives of the community by hoping to get more people to involved in property with developer price, giving the NFT owners to stake our NFT apartments for more profitable rental as well as providing Smart 4.0 hospitality system technology. Because, together, we strive to build the NFT property by reducing the financial burden on property developers while yet offering high-end, luxurious services to leaseholders. ―We Build Together, We Own Together.'
          }
        />
      </div>
      <div className="pb-20 tablet:pb-32">
        <animated.div
          className="relative w-full hidden tablet:block"
          style={imageWidth(visibleAnimation.imgLeft)}
          ref={triggerAnimation.imgLeft}
        >
          <img src={'/image5.svg'} className="w-full h-auto" alt={'tes'} />
        </animated.div>
        <animated.div
          className="tablet:py-8"
          style={fadeIn(visibleAnimation.textCenter)}
          ref={triggerAnimation.textCenter}
        >
          <div className="text-center text-[#FFFFFF] font-bold text-[16px] leading:leading-[25px] tablet:text-[34px] tablet:leading-[50px] desktop:text-[64px] desktop:leading-[77px] pb-4 fontFeature">
            Apartment & Skyvillas
            <br />
            Built in Bali,
            <br />
            The Lost Paradise
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/Discord_White.svg"
              className="mx-1 w-[16px] h-[16px] tablet:w-[36px] tablet:h-[36px]"
              alt="Discord-white"
            />
            <img
              src="/Telegram_White.svg"
              className="mx-1 w-[16px] h-[16px] tablet:w-[36px] tablet:h-[36px]"
              alt="Discord-white"
            />
            <img
              src="/Twitter_White.svg"
              className="mx-1 w-[16px] h-[16px] tablet:w-[36px] tablet:h-[36px]"
              alt="Discord-white"
            />
            <img
              src="/Opensea_White.svg"
              className="mx-1 w-[16px] h-[16px] tablet:w-[36px] tablet:h-[36px]"
              alt="Discord-white"
            />
            <div className="text-[10px] tablet:text-base underline text-[#E2E2E2] ml-4">
              JOIN THE
              <br />
              COMMUNITY
            </div>
          </div>
        </animated.div>
        <animated.div
          className="relative w-full hidden tablet:block ml-auto"
          style={imageWidth(visibleAnimation.imgRight)}
          ref={triggerAnimation.imgRight}
        >
          <img src={'/image6.svg'} className="w-full h-auto" alt={'tes'} />
        </animated.div>
      </div>
      <div className="pb-20 tablet:pb-32">
        <HomeTitleSection
          type={'leftImage'}
          topLeftText={'What'}
          topRightText={'Digilandbali 1st Project: \nLima Beach Signature NFT'}
          miniText={'On a mission to make everyone\nbecome a property developer'}
          descText={`Digilandbali develops the next-level NFT concept, in which our NFTs are backed by a tangible asset that will grow in value over time. The NFT has utility and strong physical apartment fundamentals. Lima Beach Signature NFT is Digilandbali's first decentralized property blockchain project. Each Lima Beach Signature NFT symbolizes the physical ownership of an apartment in Pantai Lima, Canggu, and Bali, which leaseholders can use for living. While the Lima Beach Signature's physical properties are all luxury service smart apartments that employ IoT technology.`}
        />
      </div>
      <div className="pb-20 tablet:pb-32">
        <ImageDescComponent
          imageUrl="/image1.svg"
          imageAlt="Tes"
          title={`Mint 7 NFT Fragment \nGet 1 Apartment as Utility`}
          description={
            'One NFT Fragment will be worth 1/7 of the apartment leasehold. When enough of these fragments are collected, they can be fused together. A leaseholder would need seven NFT fragments to make one NFT Apartment or one NFT Skyvilla, which would give them a whole leasehold. 7 NFT fragments would be equal to 1 luxury service apartment with a 58-year leasehold and FREE costs for operating or living there. As the number of NFTs minted increases at each stage, so does their price.'
          }
        />
      </div>
      <div className="pb-20 tablet:pb-32">
        <HomeTitleSection
          type={'topImage'}
          imageURL={'/image4.svg'}
          topLeftText={'Where'}
          topRightText={'Lima Beach Canggu, Bali, Indonesia'}
          descText={`It is the ideal place to spend a seaside holiday. Enjoy its luscious green rice fields that sway in the wind, spectacular vistas of Mount Batukaru, magical sunsets across Pantai Lima Beach, and the sound of the ocean. Is it your dream to be a part of it , and feels the beautiful magic of Bali?`}
        />
      </div>
      <div className="pb-20 tablet:pb-32">
        <HomeTitleSection
          type={'topImage'}
          topLeftText={'When'}
          topRightText={'Minting Starts in July 2022'}
          descText={`Only 1771 NFT Fragments will ever be created. Indulge in on going priority, special perks, real utility and benefits. The first public mint will begin in July 2022, followed by stage two in October 2022, stage three in January 2023, and stage four in June 2023.`}
        />
      </div>
      <div className="pb-20 tablet:pb-80 desktop:pb-64">
        <HomeTitleSection
          type={'custom'}
          topLeftText={'How'}
          topRightText={'How it’s built from minting till become apartments.'}
        >
          <div className="tablet:flex text-start desktop:items-center relative">
            <div className="w-full tablet:w-[30%] desktop:w-[60%] float-left">
              <div className="desktop:relative max-w-full desktop:max-w-[380px] mr-[15px] tablet:mr-0 hidden tablet:block">
                <img
                  src={'/image7.svg'}
                  className="w-full h-auto max-w-[195px] desktop:max-w-[380px] "
                  alt={'tes'}
                />
              </div>
            </div>
            <div className="w-[100%] tablet:w-[70%] desktop:w-[40%] tablet:pl-[80px] desktop:pl-[105px] desktop:pl-0 mb-5 tablet:mb-0">
              <div className="text-[12px] tablet:text-sm leading-[140%] dekstop:text-2xl text-[#FFF] text-justify">
                One NFT Apartment or SkyVilla can be formed by combining all 7 NFT Fragments through
                4-stage. Each stage's fragments will have a distinct possibility of obtaining a
                SkyVilla. As there are only 3 NFT SkyVillas out of 253 units of Apartments, people
                with 7 NFT fragments on the most recent stage have a better chance of gaining
                Skyvilla through the last stage—Fusion.
              </div>
            </div>
            <div className="block tablet:hidden">
              <img src={'/image9.svg'} className="w-full h-auto " alt={'tes'} />
            </div>
            <div className="w-full mt-[20px] tablet:mt-0 tablet:max-w-[380px] relative tablet:absolute bg-[#3F7DF4] text-[#FFF] p-6 tablet:top-[90%] tablet:left-[15%] desktop:top-[50%] desktop:left-[20%]">
              {stage.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-8 pb-4 mb-4 ${
                      index < stage.length - 1 ? 'border-b' : ''
                    }`}
                  >
                    <div className="font-bold text-sm">{item.name}</div>
                    <div className="text-[12px]">{item.desc}</div>
                  </div>
                );
              })}
              <div className="flex items-center justify-end font-bold mt-[50px] desktop:mt-[80px]">
                <div className="mr-2 text-sm">Know More</div>
                <img src={'/arrowTopRight.svg'} className="w-[10px] h-[10px]" alt={'tes'} />
              </div>
            </div>
          </div>
        </HomeTitleSection>
      </div>
    </section>
  );
};

export default AboutSection;
