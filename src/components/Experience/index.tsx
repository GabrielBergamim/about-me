import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './style.module.scss';

export function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={`container ${styles.experience}`}>
        <div className={styles.experience__frontend}>
          <h3>Frontend Development</h3>

          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <FontAwesomeIcon className={styles['experience__details--icon']} icon={faCheckCircle} />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <FontAwesomeIcon className={styles['experience__details--icon']} icon={faCheckCircle} />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <FontAwesomeIcon className={styles['experience__details--icon']} icon={faCheckCircle} />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <FontAwesomeIcon className={styles['experience__details--icon']} icon={faCheckCircle} />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <FontAwesomeIcon className={styles['experience__details--icon']} icon={faCheckCircle} />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <FontAwesomeIcon className={styles['experience__details--icon']} icon={faCheckCircle} />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className={styles.experience__backend}>
          <h3>Backend Development</h3>

          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <FontAwesomeIcon className={styles['experience__details--icon']} icon={faCheckCircle} />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <FontAwesomeIcon className={styles['experience__details--icon']} icon={faCheckCircle} />
              <div>
                <h4>SpringBoot</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <FontAwesomeIcon className={styles['experience__details--icon']} icon={faCheckCircle} />
              <div>
                <h4>Nodejs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <FontAwesomeIcon className={styles['experience__details--icon']} icon={faCheckCircle} />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <FontAwesomeIcon className={styles['experience__details--icon']} icon={faCheckCircle} />
              <div>
                <h4>Postgree</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <FontAwesomeIcon className={styles['experience__details--icon']} icon={faCheckCircle} />
              <div>
                <h4>Mongodb</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}