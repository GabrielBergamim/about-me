import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import styles from './style.module.scss';

const data = [
  {
    image: IMG1,
    title: 'Project 1',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    image: IMG2,
    title: 'Project 2',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    image: IMG3,
    title: 'Project 3',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    image: IMG4,
    title: 'Project 4',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    image: IMG5,
    title: 'Project 5',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    image: IMG6,
    title: 'Project 6',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
];

export function Portifolio() {
  return (
    <section id="portifolio">
      <h5>My Recent Work</h5>
      <h2>Portifolio</h2>

      <div className={`container ${styles.portifolio}`}>
        {data.map(({ image, title, github, demo }, index) => (
          <article key={index} className={styles.portifolio__item}>
            <div className={styles['portifolio__item--image']}>
              <img src={image} alt="Project 1" />
            </div>
            <h3>{title}</h3>
            <div className={styles.portifolio__cta}>
              <a href={github} className="btn" target="_blank">
                GitHub
              </a>
              <a href={demo} className="btn btn--primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}