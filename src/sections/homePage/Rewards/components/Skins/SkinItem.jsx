import React from 'react';
import style from './skins.module.scss';

const SkinItem = (props) => {
  const {weaponName, skinName, imgPng, imgWebp, link} = props

  return (
    <li className={style.item}>
      <a href={link} className={style.link}>
        <picture className={style.pic}>
          <source srcSet={imgWebp} type="image/webp"/>
          <img 
            className={style.img} 
            src={imgPng} 
            alt={skinName} 
            loading="lazy"
          />
        </picture>
        <div className={style.descr} >
          <h3>{skinName}</h3>
          <p className={style.name} >{weaponName}</p>
        </div>
      </a>
    </li>
  );
};

export default SkinItem;