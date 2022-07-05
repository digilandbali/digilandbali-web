import {useEffect, useState} from 'react';

import Link from 'next/link';

import {connectWallet, getCurrentWalletConnected} from '../helpers/metamask-interact';

import {ArrowDown2} from 'iconsax-react';

const NavbarComponent = ({onConnect, walletAddress, isOpenNav}) => {
  const language = ['ENGLISH', 'MANDARIN', 'RUSSIA', 'VIETNAM'];
  const [openNavbar, setOpenNavbar] = useState(false);
  const [stickyClass, setStickyClass] = useState('');
  const [pathname, setPathname] = useState([]);

  const closeNavbar = () => {
    setOpenNavbar(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    window.addEventListener('resize', stickNavbar);
    setPathname(window.location.pathname.split('/'));
    return () => {
      window.removeEventListener('scroll', stickNavbar);
      window.removeEventListener('resize', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      let windowWidth = window.innerWidth;
      if (windowHeight > 136 && windowWidth > 1280) setStickyClass('scrolled');
      else if (windowHeight > 100 && windowWidth >= 426) setStickyClass('scrolled');
      else if (windowHeight > 70 && windowWidth < 426) setStickyClass('scrolled');
      else setStickyClass('');
    }
  };

  return (
    <div className={`nav-container ${stickyClass}`}>
      {/* Desktop */}
      <nav className="h-[136px] max-w-[1280px] flex justify-between items-center desktop">
        <div id="logo" className="w-[25%]">
          <Link href="/">
            <img
              src="/Digiland_Symbol.svg"
              className="w-[27px] h-[27px] cursor-pointer"
              alt="Digiland-logo"
            />
          </Link>
        </div>

        <div className="link flex gap-9 justify-center w-[50%]">
          <Link href="/#home">home</Link>
          <Link href="">whitepaper</Link>
          <div className="dropdown-menu relative cursor-pointer">
            <div className="flex items-center gap-2">
              project
              <div className="arrow">
                <ArrowDown2 size="20" color="#FFF" />
              </div>
            </div>
            <div className="dropdown-item">
              <Link href="/projects/lima-beach" passHref>
                <div className="hover:opacity-100 opacity-50 cursor-pointer">
                  lima beach signature nft
                </div>
              </Link>
              <Link href="" passHref>
                <div className="opacity-50 cursor-pointer">coming soon</div>
              </Link>
            </div>
          </div>
          <Link href="">career</Link>
        </div>

        <div className="w-[25%] flex justify-end items-center gap-4">
          <div className="link dropdown-menu relative cursor-pointer mr-0">
            <div className="flex items-center gap-2">
              EN
              <div className="arrow">
                <ArrowDown2 size="20" color="#FFF" />
              </div>
            </div>
            <div className="dropdown-item">
              {language.map((v, i) => {
                return (
                  <Link href="" passHref key={v}>
                    <div className="hover:opacity-100 opacity-50 cursor-pointer">{v}</div>
                  </Link>
                );
              })}
            </div>
          </div>
          {pathname[1] != 'minting' ? (
            <Link href="/minting/lima-beach" passHref>
              <button>
                <span>mint yours</span>
              </button>
            </Link>
          ) : (
            <button onClick={onConnect}>
              <span>{!walletAddress ? 'connect wallet' : 'disconnect wallet'}</span>
            </button>
          )}
        </div>
      </nav>
      {/* Tablet & Mobile */}
      <nav
        className={`h-[70px] tablet:h-[100px] flex justify-between items-center transition transition-colors duration-200 mobile ${
          openNavbar ? 'bg-[#050910]' : 'bg-transparent'
        }`}
      >
        <div id="logo" className="w-[50%]">
          <Link href="/" passHref>
            <div className=" flex items-center text-white text-[12px] tablet:text-[28px] font-bold tracking-wide gap-2">
              <img
                src="/Digiland_Symbol.svg"
                className="w-[14px] h-[14px] tablet:w-[32px] tablet:h-[32px]"
                alt="Digiland-logo"
              />
              DIGILANDBALI
            </div>
          </Link>
        </div>
        <div>
          <button
            className="bg-transparent border-0"
            onClick={() => {
              setOpenNavbar(!openNavbar);
              if (!openNavbar) {
                setTimeout(() => {
                  isOpenNav(!openNavbar);
                }, 200);
              } else {
                isOpenNav(!openNavbar);
              }
            }}
          >
            <img
              src={`${openNavbar ? '/close-icon.svg' : '/hamburger-icon.svg'}`}
              className="w-[18px] tablet:w-[32px]"
              alt="logo"
            />
          </button>
        </div>
        <div
          className={`mobile-inner link text-[16px] tablet:text-[24px] tracking-wide gap-10 right-0 flex flex-col bg-[#050910] w-[100%] h-screen top-[70px] tablet:top-[100px] z-[999] overflow-y-auto ${
            openNavbar ? 'open' : ''
          }`}
        >
          <Link href="/#home" passHref>
            <div onClick={() => closeNavbar()}>home</div>
          </Link>
          <Link href="">
            <div onClick={() => closeNavbar()}>whitepaper</div>
          </Link>
          <div>
            <div>projects</div>
            <div>
              <Link href="/projects/lima-beach" passHref>
                <div
                  onClick={() => closeNavbar()}
                  className="hover:text[#FFF] text-[#E2E2E2] font-medium cursor-pointer mt-[26px] px-6"
                >
                  lima beach signature nft
                </div>
              </Link>
              <Link href="" passHref>
                <div
                  onClick={() => closeNavbar()}
                  className="text-[#E2E2E2] font-medium cursor-pointer mt-[26px] px-6"
                >
                  coming soon
                </div>
              </Link>
            </div>
          </div>
          <Link href="">career</Link>
          <div>
            <div>language</div>
            <div>
              {language.map((v, i) => {
                return (
                  <Link href="" passHref key={i}>
                    <div
                      onClick={() => closeNavbar()}
                      className="hover:text[#FFF] text-[#E2E2E2] font-medium cursor-pointer mt-[26px] px-6"
                    >
                      {v}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <Link href="/minting/lima-beach" passHref>
            <div onClick={() => closeNavbar()}>go to mint page</div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
