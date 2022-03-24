import { faBook, faHandshake, faHomeAlt, faMessage, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import style from './style.module.scss';


export function Nav() {
  const [activeNav, setActiveNav] = useState<string>('#');

  const handleOnclick = (link: string) => {
    setActiveNav(link);
  }

  return (
    <nav>
      <a href="#" onClick={() => handleOnclick('#')} className={activeNav === '#' ? style.active : ''}>
        <FontAwesomeIcon icon={faHomeAlt} />
      </a>
      <a href="#about" onClick={() => handleOnclick('#about')} className={activeNav === '#about' ? style.active : ''}>
        <FontAwesomeIcon icon={faUserAlt} />
      </a>
      <a href="#experience" onClick={() => handleOnclick('#experience')} className={activeNav === '#experience' ? style.active : ''}>
        <FontAwesomeIcon icon={faBook} />
      </a>
      <a href="#works" onClick={() => handleOnclick('#works')} className={activeNav === '#works' ? style.active : ''}>
        <FontAwesomeIcon icon={faHandshake} />
      </a>
      <a href="#contact" onClick={() => handleOnclick('#contact')} className={activeNav === '#contact' ? style.active : ''}>
        <FontAwesomeIcon icon={faMessage} />
      </a>
    </nav>
  );
}