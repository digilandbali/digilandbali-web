import styles from '../../styles/FooterComponent.module.css';

const FooterComponent = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div>
          <img src="/Logo_Digilandbali.svg" className="w-45 h-[30px]" alt="Logo-DigilandBali" />
        </div>
        <div className={styles.info}>
          <div className={styles.discover}>
            <label>Discover</label>
            <label>
              <a href="#!">Digilandbali Whitepaper</a>
            </label>
            <label>
              <a href="#!">Digilandbali Partners</a>
            </label>
            <label>
              <a href="#!">Digilandbali Career</a>
            </label>
          </div>
          <div className={styles.project}>
            <label>Project</label>
            <label>
              <a href="#!">Lima Beach Signature NFT</a>
            </label>
          </div>
          <div className={styles.contact}>
            <label>Contact</label>
            <div>
              <label>Digilandbali, Canggu Avenue, Bali, Indonesia</label>
            </div>
            <label>info@digilandbali.io</label>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <label>
          Verified Contract:{' '}
          <a
            href="https://rinkeby.etherscan.io/address/0x3a0508AF8eCDE61C99083Fbb263d6a99BFe05eCe"
            target="_blank"
            rel="noopener noreferrer"
          >
            0x3a0508AF8eCDE61C99083Fbb263d6a99BFe05eCe
          </a>
        </label>
        <div className={styles.contactIcons}>
          <img src="/Discord_White.svg" className="w-6 h-6" alt="Discord-white" />
          <img src="/Telegram_White.svg" className="w-6 h-6" alt="Discord-white" />
          <img src="/Twitter_White.svg" className="w-6 h-6" alt="Discord-white" />
          <img src="/Opensea_White.svg" className="w-6 h-6" alt="Discord-white" />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
