import Link from 'next/link';

const NavbarComponent = ({onConnect, walletAddress}) => {
  return (
    <nav id="navbar">
      <div id="logo">
        <img src="/Digiland_Symbol.svg" width={27} height={27} alt="Digiland-logo" />
      </div>

      <div className="link">
        <Link href="">whitepaper</Link>
        <Link href="">project</Link>
        <Link href="">partners</Link>
        <Link href="">career</Link>
      </div>

      <button onClick={onConnect}>
        {walletAddress && walletAddress.length > 0 ? 'Connected' : <span>Connect</span>}
      </button>
    </nav>
  );
};

export default NavbarComponent;
