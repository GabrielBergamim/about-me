import { faAward, faFolderPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ME from '../../assets/me-about.jpg';
import styles from './style.module.scss';

export function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className={`container ${styles.about}`}>
        <div className={styles.about__me}>
          <div className={styles['about__me-image']}>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FontAwesomeIcon icon={faAward} className={styles['about__card-icons']} />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className={styles.about__card}>
              <FontAwesomeIcon icon={faUsers} className={styles['about__card-icons']} />
              <h5>Clients</h5>
              <small>200+ World wide</small>
            </article>

            <article className={styles.about__card}>
              <FontAwesomeIcon icon={faFolderPlus} className={styles['about__card-icons']} />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio, laborum expedita, voluptates harum a provident voluptatem, labore eligendi iusto voluptate dicta accusamus possimus? Unde corporis maxime iusto est fuga.</p>

          <a href="#contact" className="btn btn--primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}