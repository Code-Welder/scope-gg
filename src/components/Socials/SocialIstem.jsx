import React from 'react';
import style from './socials.module.scss'

const SocialsItem = ({ icon, link, name = 'icon' }) => {
  return (
    <li className={style.item}>
      <a className={style.link} href={link} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={name} />
      </a>
    </li>
  );
};

export default SocialsItem;
