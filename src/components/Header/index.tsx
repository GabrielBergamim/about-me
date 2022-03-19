import ME from '../../assets/me.png';
import { Cta } from './Cta';
import { Socials } from './Socials';
import styles from './style.module.scss';

export function Header() {
  return (
    <header>
      <div className={`container ${styles.header} ${styles.header__container}`}>
        <h5>Hello I'm</h5>
        <h1>Gabriel Bergamim</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <Socials />

        <div className={styles.me}>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className={`${styles.scroll} ${styles.scroll__down}`}>Scroll Down</a>
      </div>
    </header>
  );
}