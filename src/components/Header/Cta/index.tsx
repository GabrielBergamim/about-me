import CV from '../../../assets/cv.pdf';
import styles from './style.module.scss';

export function Cta() {
  return (
    <div className={`${styles.cta}`}>
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn--primary">Let's Talk</a>
    </div>
  );
}