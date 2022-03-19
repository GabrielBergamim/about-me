import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../style.module.scss';

export function Socials() {
  return (
    <div className={styles.header__socials}>
      <a href="https://linkedin.com" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}