import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './style.module.scss';

export function Works() {
  return (
    <section id="works">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className={`container ${styles.service}`}>
        <article className={styles.service__details}>
          <div className={styles.service__head}>
            <h3>UI/UX Design</h3>
          </div>

          <ul className={styles.service__list}>
            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className={styles.service__details}>
          <div className={styles.service__head}>
            <h3>Web Development</h3>
          </div>

          <ul className={styles.service__list}>
            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className={styles.service__details}>
          <div className={styles.service__head}>
            <h3>Content Creation</h3>
          </div>

          <ul className={styles.service__list}>
            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <FontAwesomeIcon className={styles['service__list--icon']} icon={faCheck} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}